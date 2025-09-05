 // Función para crear rectángulo giratorio con animaciones
 const createRectanguloGiratorio = function (scene, allScene1Objects, camera) {

    //const fondo = FondoMainObj(scene, new BABYLON.Vector3(500,-200,600))
    var faceUV = [];
    faceUV[0] = new BABYLON.Vector4(-0.5, -0.5, 1.6, 1.6); // Frente (+z)
    faceUV[1] = new BABYLON.Vector4(-0.5, -0.5, 1.6, 1.6); // Atrás (-z)
    
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
    tex1.uScale = 1;           // Reduce al 50% del ancho
    tex1.vScale = 1;           // Reduce al 50% del alto
    tex1.uOffset = -0.26;         // Centrar en el eje U (horizontal)
    tex1.vOffset = 0;         // Centrar en el eje V (vertical)
    tex1.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
    tex1.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
    texturaMitad1.diffuseTexture = tex1;
    texturaMitad1.specularColor = new BABYLON.Color3(0, 0, 0);
    texturaMitad1.backFaceCulling = true;
    
    
    // Material para mitad2 (igual que el anterior)
    var texturaMitad2 = new BABYLON.StandardMaterial("texturaMitad2", scene);
    var tex2 = new BABYLON.Texture("./resource/images/LOGO PTS.png", scene);
    tex2.uScale = 1;
    tex2.vScale = 1;
    tex2.uOffset = 0.75;
    tex2.vOffset = 0;
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
        setTimeout(function() {
            mitad1.setEnabled(false);
            mitad2.setEnabled(false);
            //fondo.setEnabled(false);
            
            console.log(camera);

            loadBuildingBussines(scene).then((bulding) => {
                console.log("Edificio Cargado ....");
                ActionMover1(scene, camera);
            })
            // Crear pared con hueco
            /*const paredHueco1 = createParedConHueco(scene,0,0,8);
            allScene1Objects.push(paredHueco1);
            const paredHueco2 = createParedConHueco(scene,10,0,8);
            allScene1Objects.push(paredHueco2);
            const paredHueco3 = createParedConHueco(scene,-10,0,8);
            allScene1Objects.push(paredHueco3);
            const door1 = createDoorsInteractives(scene,-4,4,-2.5,2.5);
            allScene1Objects.push(door1);
            const door2 = createDoorsInteractives(scene,14.5,25.5,6,14);
            allScene1Objects.push(door2);
            const door3 = createDoorsInteractives(scene,-24,-15.5,-12.5,-7);
            allScene1Objects.push(door3);
            const cars = createAdvancedMovingCars(scene,8).then((cars) => {
                console.log("Carros listos:", cars);
                allScene1Objects.push(cars);
            });

            const city = loadcity(scene).then(building => {
                console.log("Edificio cargado:", building.name);
                allScene1Objects.push(building);
            });


            console.log(camera);

           createHexagonoCategoria(scene,camera,"Procesos de Negocio",allScene1Objects,0,new BABYLON.Vector3(-10, 13, 0), new BABYLON.Vector3(-8, 3, 1));
           createHexagonoCategoria(scene,camera,"E-Comerce y Seguridad",allScene1Objects,1,new BABYLON.Vector3(0, 13, 0), new BABYLON.Vector3(0, 3, 1));
           createHexagonoCategoria(scene,camera,"Operaciones Comerciales",allScene1Objects,2,new BABYLON.Vector3(10, 13, 0), new BABYLON.Vector3(8, 3, 1));

           console.log("Numero Objetos"+ allScene1Objects.length);*/


        }, 2000);

       
        
        
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