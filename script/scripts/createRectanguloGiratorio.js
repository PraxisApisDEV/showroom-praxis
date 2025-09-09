 // Función para crear rectángulo giratorio con animaciones
 const createRectanguloGiratorio = function (scene, allScene1Objects, camera) {

    //const fondo = FondoMainObj(scene, new BABYLON.Vector3(500,-200,600))
    var faceUV = [];
    faceUV[0] = new BABYLON.Vector4(-1.5, -1.5, 2.6, 2.6); // Frente (+z)
    faceUV[1] = new BABYLON.Vector4(-1.5, -1.5, 2.6, 2.6); // Atrás (-z)
    
    for (let i = 2; i < 6; i++) {
        faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0); // invisibles 
    }

    // Crear el rectángulo con textura solo en dos caras
    var rectangulo = BABYLON.MeshBuilder.CreateBox("rectanguloGiratorio", {
        width: 10.0,
        height: 5.0,
        depth: 0.5,
        faceUV: faceUV,
        wrap: true // importante para que faceUV funcione correctamente
    }, scene);
        
    var textura = new BABYLON.StandardMaterial("texturaMaterial", scene);
    textura.diffuseTexture = new BABYLON.Texture("./resource/images/LOGO PTS.png", scene); // Usa una imagen propia
    textura.diffuseTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
    textura.diffuseTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
    textura.specularColor = new BABYLON.Color3(0, 0, 0); // Sin brillo
    textura.backFaceCulling = true; // Opcional, muestra ambas caras


    var texturaMitad1 = new BABYLON.StandardMaterial("texturaMitad1", scene);
    var tex1 = new BABYLON.Texture("./resource/images/LOGO PTS.png", scene);
    tex1.uScale = 2.6;           // Reduce al 50% del ancho
    tex1.vScale = 2.6;           // Reduce al 50% del alto
    tex1.uOffset = -1.9;         // Centrar en el eje U (horizontal)
    tex1.vOffset = -0.7;         // Centrar en el eje V (vertical)
    tex1.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
    tex1.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
    texturaMitad1.diffuseTexture = tex1;
    texturaMitad1.specularColor = new BABYLON.Color3(0, 0, 0);
    texturaMitad1.backFaceCulling = true;
    
    
    // Material para mitad2 (igual que el anterior)
    var texturaMitad2 = new BABYLON.StandardMaterial("texturaMitad2", scene);
    var tex2 = new BABYLON.Texture("./resource/images/LOGO PTS.png", scene);
    tex2.uScale = 1.9;
    tex2.vScale = 1.9;
    tex2.uOffset = 0.75;
    tex2.vOffset = -0.4;
    tex2.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
    tex2.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
    texturaMitad2.diffuseTexture = tex2;
    texturaMitad2.specularColor = new BABYLON.Color3(0, 0, 0);
    texturaMitad2.backFaceCulling = true;

    rectangulo.material = textura;
    
    // Posicionar el rectángulo centrado
    rectangulo.position.x = 0;
    rectangulo.position.y = 2.5; // Centrado verticalmente
    rectangulo.position.z = 0;
    var luzD = createLuzDireccional(scene);
    var genSombra = createSombra(luzD);        
    // Agregar sombra al rectángulo
    if (genSombra) {
        createSombraAObj(rectangulo, genSombra);
    }
    
    // Animación de rotación lenta en el eje Y
    var rotationAnimation = new BABYLON.Animation("rotationAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    
    var keyFrames = [];
    keyFrames.push({
        frame: 0,
        value: 0
    });
    keyFrames.push({
        frame: 120, // 4 segundos a 30 FPS
        value: 2 * Math.PI // Una vuelta completa
    });
    
    rotationAnimation.setKeys(keyFrames);
    rectangulo.animations.push(rotationAnimation);
    
    // Iniciar la animación de rotación
    scene.beginAnimation(rectangulo, 0, 120, true);
    
    // Variables para el escalado
    var escalaOriginal = rectangulo.scaling.clone();
    var escalaGrande = new BABYLON.Vector3(1.5, 1.5, 1.5);
    
    // Interacción con el mouse
    rectangulo.actionManager = new BABYLON.ActionManager(scene);
    
    // Evento cuando el mouse entra (hover)
    rectangulo.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
        // Hacer el rectángulo más grande
        BABYLON.Animation.CreateAndStartAnimation("scaleUp", rectangulo, "scaling", 30, 30, escalaOriginal, escalaGrande, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    }));
    
    // Evento cuando el mouse sale
    rectangulo.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
        // Volver al tamaño original
        BABYLON.Animation.CreateAndStartAnimation("scaleDown", rectangulo, "scaling", 30, 30, escalaGrande, escalaOriginal, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    }));
    
    // Evento cuando se hace clic
    rectangulo.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
        // Detener la animación de rotación
        scene.stopAnimation(rectangulo);
        
        // Crear dos mitades del rectángulo
        var mitad1 = BABYLON.MeshBuilder.CreateBox("mitad1", {
            width: 5.0,
            height: 5.0,
            depth: 0.5,
        }, scene);
        
        var mitad2 = BABYLON.MeshBuilder.CreateBox("mitad2", {
            width: 5.0,
            height: 5.0,
            depth: 0.5,
        }, scene);
        
        // Aplicar el mismo material
        mitad1.material = texturaMitad1;
        mitad2.material = texturaMitad2;
        
        // Posicionar las mitades
        mitad1.position = rectangulo.position.clone();
        mitad2.position = rectangulo.position.clone();
        
        // Ocultar el rectángulo original
        rectangulo.setEnabled(false);
        
        // Animación de separación
        var animacionSeparacion1 = new BABYLON.Animation("separacion1", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        var animacionSeparacion2 = new BABYLON.Animation("separacion2", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        
        var keys1 = [];
        keys1.push({ frame: 0, value: rectangulo.position.x - 2.5 });
        keys1.push({ frame: 60, value: rectangulo.position.x - 8.0 });
        animacionSeparacion1.setKeys(keys1);
        
        var keys2 = [];
        keys2.push({ frame: 0, value: rectangulo.position.x + 2.5 });
        keys2.push({ frame: 60, value: rectangulo.position.x + 8.0 });
        animacionSeparacion2.setKeys(keys2);
        
        mitad1.animations.push(animacionSeparacion1);
        mitad2.animations.push(animacionSeparacion2);
        
        // Ejecutar animaciones de separación
        scene.beginAnimation(mitad1, 0, 60, false);
        scene.beginAnimation(mitad2, 0, 60, false);
        
        // Después de 2 segundos, hacer desaparecer las mitades y crear la pared con hueco
        setTimeout(function () {
           
            let avion; // Declarado fuera para tener acceso global en este scope
        
            // Carga del modelo .glb
            BABYLON.SceneLoader.ImportMesh(
                "", 
                "./resource/models/", // Carpeta local
                "low_poly_airplane.glb", // Archivo del avión
                scene,
                function (meshes) {
                    avion = meshes[0]; // Malla principal
        
                    avion.position = rectangulo.position.clone();
                    avion.scaling = new BABYLON.Vector3(2, 2, 2); // Tamaño
                    avion.rotation = new BABYLON.Vector3(0, -Math.PI / 2, 0); // Orientación
        
                    // Animación de vuelo hacia adelante
                    const vuelo = new BABYLON.Animation(
                        "vueloAvion",
                        "position.z",
                        30,
                        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                    );
                    vuelo.setKeys([
                        { frame: 0, value: avion.position.z },
                        { frame: 100, value: avion.position.z - 30 }
                    ]);
        
                    avion.animations.push(vuelo);
                    scene.beginAnimation(avion, 0, 100, false);
        
                    // Esperar a que termine el vuelo (3.5 segundos), luego eliminar avión y cargar escena
                    setTimeout(() => {
                        avion.dispose();
                         // Ocultar las mitades
                        mitad1.setEnabled(false);
                        mitad2.setEnabled(false);
        
                        loadBuildingBussines(scene).then((building) => {
                            console.log("Edificio Cargado ....");
                            ActionMover1(scene, camera);
                        });
        
                    }, 2000); // Tiempo suficiente para que el avión "vuele"
                }
            );
        }, 2000); // Espera 2s después del clic antes de iniciar el proceso
        
        

       
        
        
    }));
    
    return rectangulo;
}

const FondoMainObj = function(scene, position =  new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 2000, height: 1000 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ECommerce/Fondo.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, Math.PI/6, 0);

    return plane;
}