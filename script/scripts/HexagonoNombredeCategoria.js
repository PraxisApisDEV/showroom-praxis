const createHexagonoCategoria = function createHexagonoProcesosNegocio(scene,camera,titulo, allSceneObjects, numBuild, position = new BABYLON.Vector3(0, 6, 0), moveCamera = new BABYLON.Vector3(0, 6, 0)) {
    // Crear forma hexagonal
    const hexagon = BABYLON.MeshBuilder.CreatePolyhedron("hexagonPolyhedron", {type: 1, size: 1}, scene); 
    hexagon.position = position.clone();

    // Crear material degradado (usamos una textura dinámica como degradado)
    const gradientTexture = new BABYLON.DynamicTexture("gradientTex", { width: 256, height: 256 }, scene, false);
    const ctx = gradientTexture.getContext();

    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, "#FFA500"); // Naranja fuerte
    gradient.addColorStop(1, "#FFCC80"); // Naranja claro

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    gradientTexture.update();

    const matHex = new BABYLON.StandardMaterial("hexMat", scene);
    matHex.diffuseTexture = gradientTexture;
    matHex.emissiveColor = new BABYLON.Color3(1, 0.6, 0); // Refuerzo naranja
    matHex.backFaceCulling = false;
    hexagon.material = matHex;

    // Texto en plano frontal
    const textPlane = BABYLON.MeshBuilder.CreatePlane("textoHex", {
        width: 7,
        height: 7
    }, scene);
    textPlane.position = position.clone();
    textPlane.position.y -= 5;
    textPlane.position.z -= 5;

    const textTexture = new BABYLON.DynamicTexture("textTex", { width: 512, height: 256 }, scene, false);
    textTexture.hasAlpha = true;
    textTexture.drawText(titulo, null, 150, "bold 42px Arial", "black", "transparent", true);

    const textMat = new BABYLON.StandardMaterial("textMat", scene);
    textMat.diffuseTexture = textTexture;
    textMat.emissiveColor = new BABYLON.Color3(1, 1, 1);
    textMat.backFaceCulling = false;
    textPlane.material = textMat;

    // Acciones al hacer clic
    hexagon.actionManager = new BABYLON.ActionManager(scene);
    hexagon.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickUpTrigger,
        () => {
            moverCamaraAZoom(camera, moveCamera, 10, 1500)
    .then(() => {
        console.log(camera);
        ShowBuildByNumber(scene, numBuild, allSceneObjects, camera);
    });

            //ShowBuildByNumber(scene, numBuild, allSceneObjects);
        }
    ));

    textPlane.actionManager = new BABYLON.ActionManager(scene);
    textPlane.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickUpTrigger,
        () => {
            moverCamaraAZoom(camera, moveCamera, 10, 1500)
            .then(() =>{
                ShowBuildByNumber(scene, numBuild, allSceneObjects, camera);
            });
            //ShowBuildByNumber(scene, numBuild, allSceneObjects);
        }
    ));

    scene.registerBeforeRender(() => {
        hexagon.rotation.y += 0.01;
    });
    allSceneObjects.push(hexagon);
    allSceneObjects.push(textPlane);

    return { hexagon, textPlane };
}

function getHexagonShape(radius = 1) {
    const shape = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        shape.push(new BABYLON.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    return shape;
}
