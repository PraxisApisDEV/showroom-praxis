// Función para crear pared con hueco
const createParedConHueco = function (scene, positionX, positionY, positionZ) {
    // Crear una pared grande con un hueco circular en el centro
    var pared = BABYLON.MeshBuilder.CreateBox("paredConHueco", {
        width: 15.0,
        height: 10.0,
        depth: 20
    }, scene);
    var luzD = createLuzDireccional(scene);
    var genSombra = createSombra(luzD);
    // Crear material para la pared
    var paredMaterial = new BABYLON.StandardMaterial("paredMaterial", scene);
    paredMaterial.diffuseColor = new BABYLON.Color3(0.7, 0.7, 0.7); // Color gris
    paredMaterial.specularColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    
    pared.material = paredMaterial;
    
    // Posicionar la pared centrada
    pared.position.x = 0+positionX;
    pared.position.y = 5+positionY; // Centrado verticalmente
    pared.position.z = 0+positionZ;
    
    // Agregar sombra a la pared
    if (genSombra) {
        createSombraAObj(pared, genSombra);
    }
    
    // Crear el hueco (cilindro que se restará de la pared)
    var hueco = BABYLON.MeshBuilder.CreateBox("hueco", {
        width: 5.0,
        height: 10.0,
        depth: 20
    }, scene);
    
    // Posicionar el hueco en el centro de la pared
    hueco.position.x = 0+positionX;
    hueco.position.y = 0+positionY;
    hueco.position.z = 0;
    
    // Crear material para el hueco (transparente)
    var huecoMaterial = new BABYLON.StandardMaterial("huecoMaterial", scene);
    huecoMaterial.alpha = 0.0; // Completamente transparente
    
    hueco.material = huecoMaterial;
    
    // Usar CSG (Constructive Solid Geometry) para crear el hueco
    var paredCSG = BABYLON.CSG.FromMesh(pared);
    var huecoCSG = BABYLON.CSG.FromMesh(hueco);
    
    // Restar el hueco de la pared
    var paredConHuecoCSG = paredCSG.subtract(huecoCSG);
    
    // Crear el mesh final con el hueco
    var paredFinal = paredConHuecoCSG.toMesh("paredFinal", paredMaterial, scene);
    
    // Posicionar la pared final
    paredFinal.position.x = 0+positionX;
    paredFinal.position.y = 5+positionY;
    paredFinal.position.z = 0+positionZ;
    
    // Agregar sombra a la pared final
    if (genSombra) {
        createSombraAObj(paredFinal, genSombra);
    }
    
    // Ocultar los meshes originales
    pared.setEnabled(false);
    hueco.setEnabled(false);
    
    // Animación de aparición de la pared
    paredFinal.scaling = new BABYLON.Vector3(0, 0, 0);
    
    var animacionAparicion = new BABYLON.Animation("aparicionPared", "scaling", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var keysAparicion = [];
    keysAparicion.push({
        frame: 0,
        value: new BABYLON.Vector3(0, 0, 0)
    });
    keysAparicion.push({
        frame: 60,
        value: new BABYLON.Vector3(1, 1, 1)
    });
    
    animacionAparicion.setKeys(keysAparicion);
    paredFinal.animations.push(animacionAparicion);
    
    // Ejecutar animación de aparición
    scene.beginAnimation(paredFinal, 0, 60, false);
    
    return paredFinal;
}