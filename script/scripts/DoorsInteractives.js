const createDoorsInteractives = function (scene, door1x, door2x, giro1x, giro2x) {
    // Crear materiales transparentes
    const doorMat1 = new BABYLON.StandardMaterial("transparentDoorMat1", scene);
    doorMat1.alpha = 0.5;
    doorMat1.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);

    const doorMat2 = new BABYLON.StandardMaterial("transparentDoorMat2", scene);
    doorMat2.alpha = 0.5;
    doorMat2.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);

    // Crear puertas (planos 3D)
    const door1 = BABYLON.MeshBuilder.CreatePlane("door1", { width: 3, height: 8 }, scene);
    door1.material = doorMat1;
    door1.position.x = door1x;
    door1.position.y = 3;
    door1.position.z = 0;

    const door2 = BABYLON.MeshBuilder.CreatePlane("door2", { width: 3, height: 8 }, scene);
    door2.material = doorMat2;
    door2.position.x = door2x;
    door2.position.y = 3;
    door2.position.z = 0;

    // Función para configurar animación de puerta
    const setupDoorAnimation = (door, hingePosition, openAngle) => {
        // Crear nodo hinge como padre de la puerta
        const hinge = new BABYLON.TransformNode("hinge_" + door.name, scene);
        hinge.position = hingePosition;

        // Reposicionar puerta relativa al hinge
        door.setParent(hinge);
        door.position = door.position.subtract(hingePosition); // ahora relativa al hinge

        // Crear animación de rotación
        const anim = new BABYLON.Animation(
            "doorAnim_" + door.name,
            "rotation.y",
            30,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );

        anim.setKeys([
            { frame: 0, value: 0 },
            { frame: 30, value: openAngle }
        ]);

        hinge.animations = [anim];

        // Configurar eventos de mouse
        door.actionManager = new BABYLON.ActionManager(scene);

        door.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, () => {
                scene.beginAnimation(hinge, 0, 30, false, 1.5);
            })
        );

        door.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, () => {
                scene.beginAnimation(hinge, 30, 0, false, 1.5);
            })
        );
    };

    // Configurar animaciones (abrir en sentidos opuestos)
    setupDoorAnimation(door1, new BABYLON.Vector3(giro1x, 1.5, 0), Math.PI / 4);   // izquierda, gira hacia afuera
    setupDoorAnimation(door2, new BABYLON.Vector3(giro2x, 1.5, 0), -Math.PI / 4);  // derecha, gira hacia afuera

    return [door1, door2];
};