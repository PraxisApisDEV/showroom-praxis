const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

 //Set current scene
var currentScene = "";

//Scenes array
var scenes = [];

var createScene = async function() {               

        // -- Main Scene (Default) --
        var sceneMain = new BABYLON.Scene(engine);
            //sceneMain.clearColor = new BABYLON.Color3.Black;

        // Escena Detalle de Producto
        var scene1 = new BABYLON.Scene(engine);
        var scene2 = new BABYLON.Scene(engine);
        var scene3 = new BABYLON.Scene(engine);

            createArcRotateCamera(sceneMain);
            createLight(sceneMain); 
            var luzD = createLuzDireccional(sceneMain);
            var genSombra = createSombra(luzD);
            
            //new BABYLON.AxesViewer(sceneMain, 5);

             function createSceneM() {                            
           
                createSuelo(sceneMain);  

                createMuroPrincipal("./resource/background/home_praxis_mexico.png",70,35,0.4,0,8,25,sceneMain);

                //var muroTexto1 = createMuroTexto("wall1",standProcesoDeNegocio.titulo,-8,5,0,sceneMain);
                var muroTexto1 = createMuroPrincipal("./resource/background/totem1.png",
                    5,10,0.4,
                    -8,5,0,sceneMain);
                createSombraAObj(muroTexto1,genSombra);

                //console.log("JSON-- stand.titulo:", standProcesoDeNegocio.titulo);
                //console.log("JSON-- stand.productos.length:", standProcesoDeNegocio.productos.length);             
                muroTexto1.actionManager = new BABYLON.ActionManager(sceneMain);
                muroTexto1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {                                        
                    currentScene = scenes[1];
                    console.log("IHM - Entra a detalle");                    
                    //createSceneD(standOperacionesComerciales.productos);
                    createStand(standProcesoDeNegocio,currentScene);                    
                }));

                //var muroTexto2 = createMuroTexto("wall2",standEcomerceSeguridad.titulo,0,5,0,sceneMain);
                var muroTexto2 = createMuroPrincipal("./resource/background/totem2.png",
                    5,10,0.4,
                    0,5,0,sceneMain);
                createSombraAObj(muroTexto2,genSombra);
                //console.log("JSON-- stand.titulo:", standEcomerceSeguridad.titulo);
                //console.log("JSON-- stand.productos.length:", standEcomerceSeguridad.productos.length);             
                muroTexto2.actionManager = new BABYLON.ActionManager(sceneMain);
                muroTexto2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {                                        
                    currentScene = scenes[2];
                    console.log("IHM - Entra a detalle");                    
                    //createSceneD(standOperacionesComerciales.productos);
                    createStand(standEcomerceSeguridad,currentScene);                    
                }));
                
                //var muroTexto3 = createMuroTexto("wall3",standOperacionesComerciales.titulo,8,5,0,sceneMain);
                var muroTexto3 = createMuroPrincipal("./resource/background/totem3.png",
                    5,10,0.4,
                    8,5,0,sceneMain);
                createSombraAObj(muroTexto3,genSombra);
                //console.log("JSON-- stand.titulo:", standOperacionesComerciales.titulo);
                //console.log("JSON-- stand.productos.length:", standOperacionesComerciales.productos.length);
                /*for(i=0;i<standOperacionesComerciales.productos.length;i++){
                    console.log("JSON-- productos.title: ",standOperacionesComerciales.productos[i].title);                    
                    console.log("JSON-- productos.icono: ",standOperacionesComerciales.productos[i].icono);

                    console.log("JSON-- productos.description: ",standOperacionesComerciales.productos[i].description);                                                            
                    console.log("JSON-- productos.videoUrl: ",standOperacionesComerciales.productos[i].videoUrl);                    
                    console.log("JSON-- productos.onePageQr: ",standOperacionesComerciales.productos[i].onePageQr);                    
                    console.log("JSON-- productos.formQr: ",standOperacionesComerciales.productos[i].formQr);                    
                }*/
                       
                
                muroTexto3.actionManager = new BABYLON.ActionManager(sceneMain);
                muroTexto3.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {                                        
                    currentScene = scenes[3];
                    console.log("IHM - Entra a detalle");                    
                    //createSceneD(standOperacionesComerciales.productos);
                    createStand(standOperacionesComerciales,currentScene);                    
                })); 


                //-----------------> INI TEXTO 
                // createTextoFijo("PRODUCTOS DIGITALES - Praxis");
                //-----------------> FIN TEXTO 
             } 
             //createSceneM(); 

            // Load JSON Stands
            loadJSON(jsonCategoriasURL).then((dataC) => {
                if(dataC) {                                       
                    //console.log("JSON-| Categorias:", dataC);
                    console.log("JSON-| Categorias.length:", dataC.categorias.length);

                    for (let i = 0;i<dataC.categorias.length;i++){
                        getStandFromJSON(dataC,i).then((stand) => {
                            if(stand) {
                                switch(i){
                                    case 0:   // Procesos de Negocio
                                        standProcesoDeNegocio = stand;
                                        break;
                                    case 1:   // E-Commerce y Seguridad
                                        standEcomerceSeguridad = stand;
                                        break;
                                    case 2:   // Operaciones Comerciales
                                        standOperacionesComerciales = stand;
                                        break;                                    
                                }
                                if(i==(dataC.categorias.length-1)){
                                    createSceneM(); 
                                }
                            }
                        });
                    }                     
                }
            });           
            
    //Set current scene
    currentScene = sceneMain;

    //Scenes array    
    scenes.push(sceneMain);
    scenes.push(scene1);
    scenes.push(scene2);
    scenes.push(scene3);

    //runRenderLoop inside a setTimeout is neccesary in the Playground to stop the PG's runRenderLoop.
    
    setTimeout(function() {
        engine.stopRenderLoop();
        engine.runRenderLoop(function () {
        //console.info("INI Timeout");                
        currentScene.render();
        //console.info("FIN Timeout");                        
        });
    }, 500);
    
    return sceneMain;
    
};

// INI - Babylon JS - controls

    function getGround (scene){         
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 100, height: 60},scene);
         ground.receiveShadows = true;
            /*
            const xrPromise = scene.createDefaultXRExperienceAsync({
                floorMeshes: [ground]
            }); 
            */
        
        getAxesViewer(ground,scene);
        return ground;
    }

    function getGroundTexture (scene) {
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 100, height: 60},scene);
        ground.receiveShadows = true;

        //var textureGround = new BABYLON.DynamicTexture("dynamic texture", {width:512, height:256}, scene);   

        var groundMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
              
        //groundMaterial.backFaceCulling = true;                

        //textura-madera.jpg
        //piso_madera.jpg
        //41500093.jpg
        //madera-fondo.jpg  *
        var texture = new BABYLON.Texture("./resource/background/41500093.jpg", scene);
        groundMaterial.diffuseTexture = texture;          
        
        //groundMaterial.diffuseTexture.uScale = 13.0; // Repeat 5 times on the Vertical Axes
        groundMaterial.diffuseTexture.uScale = 7.0;
        
        //groundMaterial.diffuseTexture.vScale = 7.0; // Repeat 5 times on the Horizontal Axes
        //groundMaterial.diffuseTexture.vScale = 7.0;

        ground.material = groundMaterial;

        getAxesViewer(ground,scene);
        return ground;
    }

    function getAxesViewer(mesh,scene){
        const localAxes = new BABYLON.AxesViewer(scene, 1);
        localAxes.xAxis.parent = mesh;
        localAxes.yAxis.parent = mesh;
        localAxes.zAxis.parent = mesh;
    }

    function getHemisphericLight(scene){
         var lightH = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
        //var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        //lightH.diffuse = new BABYLON.Color3(1, 0, 0);
	    //lightH.specular = new BABYLON.Color3(0, 1, 0);
	    //light.groundColor = new BABYLON.Color3(0, 1, 0);        
        lightH.intensity = 0.8;
    }

    function getSpotLight(scene){        
        var lightS = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
        lightS.intensity = 0.5;
    }

    function getPointLight(scene){
        var lightP = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 10, -6), scene);
        lightP.intensity = 0.4;
    }

    function getDirectionalLight(scene){
        const  lightD = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, 1), scene);
        lightD.position = new BABYLON.Vector3(0, 15, -30);
        return lightD;
    }

    function getShadowGenerator(light){
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        //shadowGenerator.addShadowCaster(mesh, true);
        shadowGenerator.useContactHardeningShadow = true;
        shadowGenerator.contactHardeningLightSizeUVRatio = 0.0075;
        return shadowGenerator;

    }


// FIN - Babylon JS - controls

    var createFreeCamera = function (scene) {
        // This creates and positions a free camera (non-mesh)
        //new BABYLON.Vector3(0, 5, -25)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0.5,5,-21), scene);
        
        // This targets the camera to scene origin
        camera.setTarget(new BABYLON.Vector3(0.5,5,0));

        scene.activeCamera = camera;
        //camera.attachControl(canvas, true);
        scene.activeCamera.attachControl(canvas, true);
        return camera;
    }

    var createArcRotateCamera = function (scene) {        
        //const alpha =  Math.PI/4;
        const alpha =  -1.6;
        //const beta = Math.PI/3;
        const beta = Math.PI/2.1;
        const radius = 17;
        const target = new BABYLON.Vector3(0, 3, 0);
        const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);        
        //var camera1 = new BABYLON.ArcRotateCamera("Camera1", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene1);
               
        // This targets the camera to scene origin
        //camera.setTarget(BABYLON.Vector3.Zero());

        camera.setPosition(new BABYLON.Vector3(-12, 7, -15));

        scene.activeCamera = camera;
        //camera.attachControl(canvas, true);
        scene.activeCamera.attachControl(canvas, true);
        return camera;
    }

    var createLight = function (scene) {
        
        getHemisphericLight(scene);

        //getPointLight(scene);

        //getPointLight(scene);
    }

    function createLuzDireccional(scene){
        return getDirectionalLight(scene); 
    }

    function createSombra(light) {  
        return getShadowGenerator(light);      
    }

    function createSombraAObj(mesh,sombra) {
        sombra.getShadowMap().renderList.push(mesh);
    }

    const createSuelo = function (scene) {
        //getGround (scene);
        getGroundTexture (scene);        
    }

    function createMuroTexto (name,text,positionX,posicionY,posicionZ,scene) {
        var faceUV = new Array(6);
        for (var i = 0; i < 6; i++) {
            faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
        }
        faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);
        var wall = BABYLON.MeshBuilder.CreateBox(name, {width: 5, height: 10, depth: 0.4, faceUV: faceUV},scene);

        var textureWall = new BABYLON.DynamicTexture("dynamic texture", {width:512, height:256}, scene);   
        
         //Add text to dynamic texture
        var font = "bold 25px Sans-serif";
        textureWall.drawText(text, 75, 150, font, "white","DarkOrange", true, true);

        var wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
        wallMaterial.backFaceCulling = true;
                
        //wallMaterial.diffuseColor = new BABYLON.Color3(1,0.48,0)   // new BABYLON.Color3(226, 135, 67);  //BABYLON.Color3.Random();
        wallMaterial.diffuseTexture = textureWall;
        wall.material = wallMaterial;
      

        wall.position.x = positionX; // Example position
        wall.position.y = posicionY; // Example position
        wall.position.z = posicionZ; // Example position
        return wall;
     }
      
     
    const createMuroPrincipal = function (srcImg,w,h,d,positionX,posicionY,posicionZ,scene) {
        var faceUV = new Array(6);
        for (var i = 0; i < 6; i++) {
            faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
        }
        faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);
        // Create a basic wall (box)          
            const wall = BABYLON.MeshBuilder.CreateBox("wall", {width: w, height: h, depth: d, faceUV: faceUV},scene);

            // Add a material
            const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
            //wallMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8); // Gray color
            //const texture = new BABYLON.Texture("https://mexico.praxisglobe.com/imagenes/index/talento_fondo_arriba_chico.png", scene);
            // resource/background/talento_fondo_arriba_chico.png
            // resource/background/logo_praxis.png
            // resource/background/41500093.jpg    <----
            // resource/background/piso_madera.jpg      
            // resource/background/textura-madera.jpg                              
            const texture = new BABYLON.Texture(srcImg, scene);
            
       
            wallMaterial.diffuseTexture = texture;
            wall.material = wallMaterial;

            // Position the wall
            wall.position.x = positionX; // Example position
            wall.position.y = posicionY; // Example position
            wall.position.z = posicionZ; // Example position
        return wall;
    }

    const createMuroMadera = function (positionX,scene) {
        // Create a basic wall (box)          
            const wall2 = BABYLON.MeshBuilder.CreateBox("wall", {width: 4, height: 10, depth: 2},scene);

            // Add a material
            const wall2Material = new BABYLON.StandardMaterial("wallMaterial", scene);
            //wall2Material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8); // Gray color
            
            // resource/background/talento_fondo_arriba_chico.png                            
            // resource/background/logo_praxis.png
            // resource/background/piso_madera.jpg
            // resource/background/muro_madera.jpg <---
            // resource/background/fondo-madera_1189-186.avif
            // resource/background/textura-madera.jpg
            // resource/background/madera-fondo.jpg   <-----
            const texture2 = new BABYLON.Texture("./resource/background/muro_madera.jpg", scene);                  
            wall2Material.diffuseTexture = texture2;

            wall2.material = wall2Material;

            // Position the wall
            wall2.position.x = positionX; // Example position
            wall2.position.y = 5; // Example position
            wall2.position.z = 0; // Example position
    }

    const createTextoFijo = function (text) {
        // GUI
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var textblock = new BABYLON.GUI.TextBlock();
        //textblock.text = "Praxis";
        textblock.text = text;
        textblock.fontSize = 24;
        textblock.top = -50;
        textblock.color = "white";
        advancedTexture.addControl(textblock);

    }

    var createMuroLogo = function (positionX,positionY,positionZ,srcImg, scene) {
       
        //var hdrTexture = new BABYLON.HDRCubeTexture(
        //    "https://dl.dropbox.com/s/6eyb6pgqiq43xbz/this.hdr",
        //    scene,512
        //);
        //hdrTexture.level = 1;

        var faceUV = new Array(6);
        for (var i = 0; i < 6; i++) {
            faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
        }

        faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);
        
        //var cube = BABYLON.MeshBuilder.CreateBox("myCube",{size:2, faceUV: faceUV},scene);
        var cube = BABYLON.MeshBuilder.CreateBox("myCube",{width: 3, height: 2, depth: 0.1, faceUV: faceUV},scene);
        //var cube = BABYLON.MeshBuilder.CreateBox("myCube",{width: 3, height: 2, depth: 0.1},scene);
        
        //var cubeTexture = new BABYLON.Texture("https://dl.dropbox.com/s/cg3m0wniqjyxqfq/SSS.png",scene)
        // "resource/background/logo_praxis.png"
        var cubeTexture = new BABYLON.Texture(srcImg,scene)
        var cubeMat= new BABYLON.PBRMaterial("cubeMaterial",scene);
        cubeMat.albedoTexture = cubeTexture;
        //cubeMat.reflectionTexture = hdrTexture;
        cubeMat.roughness = 1;
        cubeMat.metallic = 0;        
        //cubeMat.alpha = 0.7;   // Transparencia
        cube.material = cubeMat;        
        
        cube.position.x = positionX; // Example position
        cube.position.y = positionY; // Example position
        cube.position.z = positionZ;

        return cube;
        //-----------------------------------------------
        //const wall2 = BABYLON.MeshBuilder.CreateBox("wall", {width: 3, height: 2, depth: 0.1});
        //const wall2Material = new BABYLON.StandardMaterial("wallMaterial", scene); 
        //const texture2 = new BABYLON.Texture("resource/background/logo_praxis.png", scene);                  
        //wall2Material.diffuseTexture = texture2;

        //wall2.material = wall2Material;

        //wall2.position.x = positionX; // Example position
        //wall2.position.y = positionY; // Example position
        //wall2.position.z = positionZ;
    }

     var createMuroLogoTransparente = function (positionX,positionY,positionZ,srcImg, scene) {
         var mat = new BABYLON.StandardMaterial("logo", scene);
        mat.diffuseTexture = new BABYLON.Texture(srcImg, scene);
        mat.diffuseTexture.hasAlpha = true;
        mat.backGroundCulling = false;

        var faceUV = new Array(6);
        for (var i = 0; i < 6; i++) {
            faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
        }

        faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1);

        var box = BABYLON.MeshBuilder.CreateBox("myCube",{width: 3, height: 2, depth: 0.1, faceUV: faceUV},scene);
        box.material = mat;

        box.position.x = positionX; 
        box.position.y = positionY; 
        box.position.z = positionZ;

        return box;
     } 

    
    createScene().then(sceneToRender => {
        engine.runRenderLoop(() => sceneToRender.render());
    });
    
    window.addEventListener("resize", function () { // Watch for browser/canvas resize events
        engine.resize();
    });
