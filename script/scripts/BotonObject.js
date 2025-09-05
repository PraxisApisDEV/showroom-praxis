const BotonOcultar = function (scene, allObject, position = new BABYLON.Vector3(85, 1, 287), dimension = { width: 3, height: 1, depth: 0.3}, nombre, rotation  = new BABYLON.Vector3(0, 0, 0), video, camera, lampara, allvideos, num) {
    // Crear la base del botón
    const boton = BABYLON.MeshBuilder.CreateBox("boton3D", dimension, scene);
    boton.position =  position;

    // Material del botón
    const botonMaterial = new BABYLON.StandardMaterial("botonMaterial", scene);
    botonMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.6, 1); // Azul
    boton.material = botonMaterial;

    // Texto 3D encima del botón
    const textPlane = BABYLON.MeshBuilder.CreatePlane("textPlane", { size: 2.5 }, scene);
    textPlane.parent = boton;
    textPlane.position = new BABYLON.Vector3(0, 0, -0.51); // Posición relativa al botón
    textPlane.rotation = new BABYLON.Vector3(0, 0, 0); // Mostrarlo desde arriba


    const textTexture = new BABYLON.DynamicTexture("dynamicTexture", { width:512, height:256 }, scene);
    textTexture.drawText(nombre, null, 140, "bold 120px Arial", "white", "transparent", true);
    
    const textMaterial = new BABYLON.StandardMaterial("textMaterial", scene);
    textMaterial.diffuseTexture = textTexture;
    textMaterial.diffuseTexture.hasAlpha = true;
    textMaterial.backFaceCulling = false; // Para que se vea desde ambos lados
    textMaterial.useAlphaFromDiffuseTexture = true;
    //textMaterial.emissiveColor = BABYLON.Color3.White();
    textPlane.material = textMaterial;

    boton.rotation = rotation;

    // Acción al hacer clic
    boton.actionManager = new BABYLON.ActionManager(scene);
    boton.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, () => {
            // Ocultar objetos del totem
            boton.setEnabled(false);
            video.pause();
           OcultarPrimerosObjetos(allObject);
           switch (num) {
            case 1:
                ActionButton1(camera, scene);
                PauseVideos(allvideos);
                lampara.light.dispose(); // Elimina la luz
                lampara.mesh.dispose();  // Elimina la bombilla (esfera)
                lampara.glow.dispose();
                break;
                
            case 2:
                console.log("2");
                ActionButton2(camera,scene);
                PauseVideos(allvideos);
                lampara.light.dispose(); // Elimina la luz
                lampara.mesh.dispose();  // Elimina la bombilla (esfera)
                lampara.glow.dispose();
                break;
            case 3:
                ActionButton3(camera,scene);
                PauseVideos(allvideos);
                break;
        
            default:
                console.warn("Número no reconocido:", num);
                break;
            }
        })
    );

    textPlane.actionManager = new BABYLON.ActionManager(scene);
textPlane.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, () => {
            boton.setEnabled(false);
            video.pause();
           OcultarPrimerosObjetos(allObject);
           switch (num) {
            case 1:
                ActionButton1(camera, scene);
                PauseVideos(allvideos);
                lampara.light.dispose(); // Elimina la luz
                lampara.mesh.dispose();  // Elimina la bombilla (esfera)
                lampara.glow.dispose();
                break;
                
            case 2:
                console.log("2");
                ActionButton2(camera,scene);
                PauseVideos(allvideos);
                lampara.light.dispose(); // Elimina la luz
                lampara.mesh.dispose();  // Elimina la bombilla (esfera)
                lampara.glow.dispose();
                break;
            case 3:
                ActionButton3(camera,scene);
                PauseVideos(allvideos);
                break;
        
            default:
                console.warn("Número no reconocido:", num);
                break;
            }
           
    })
);

    return boton;
}