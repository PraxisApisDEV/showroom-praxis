const createAdvancedMovingCars = async (scene, numCars) => {
    const cars = [];
    const roadLength = 200;

    // Cargar modelo GLB (asegúrate de que la ruta sea válida)
    const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "bmw_vision_neue_klasse.glb",
        scene
    );

    // Desactivar el modelo base
    result.meshes.forEach(mesh => mesh.setEnabled(false));

    const originalRoot = result.meshes.find(mesh => mesh.name === "__root__" || mesh.name === "car_glb");

    for (let i = 0; i < numCars; i++) {
        // Crear contenedor para el carro
        const carContainer = new BABYLON.TransformNode(`carContainer${i}`, scene);
        carContainer.scaling = new BABYLON.Vector3(1, 1, 1);
        // Clonar submeshes del carro y agregarlos al contenedor
        result.meshes
            .filter(mesh => mesh !== originalRoot)
            .forEach(mesh => {
                const cloned = mesh.clone(`${mesh.name}_car${i}`);
                cloned.setEnabled(true);
                cloned.parent = carContainer;
            });

        // Posición inicial
        carContainer.position = new BABYLON.Vector3(
            -roadLength / 2 + (i * (roadLength / numCars)),
            0,
            -13-Math.floor(Math.random() * 7)
        );
        carContainer.rotation = new BABYLON.Vector3(-Math.PI/2, -Math.PI/2, 0); // Mirando hacia adelante

        // Velocidad aleatoria
        const speed =  0.1 + Math.random() * 0.4; // Más velocidad = más rápido

        // Animación de ida y vuelta
        const animation = new BABYLON.Animation(
            `carAnim${i}`,
            "position.x",
            60,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );

        animation.setKeys([
            { frame: 0, value: -roadLength / 2 },
            { frame: 100, value: roadLength / 2 }
        ]);

        carContainer.animations = [animation];

        scene.beginAnimation(carContainer, 0, 100, true, speed);

        cars.push(carContainer);
    }

    return cars;
};