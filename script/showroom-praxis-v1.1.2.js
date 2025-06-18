const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);



var createScene = async function() {       
        

        // -- Main Scene (Default) --
        var sceneMain = new BABYLON.Scene(engine);
            sceneMain.clearColor = new BABYLON.Color3.Black;

            createArcRotateCamera(sceneMain);
            createLight(sceneMain); 
            
            //new BABYLON.AxesViewer(sceneMain, 5);

             function createSceneM() {                            
           
                createSuelo(sceneMain);          

                createMuroPrincipal(-12,sceneMain);
                createMuroMadera(-8,sceneMain);
                createMuroPrincipal(-4,sceneMain);            
                //createMuroPrincipal(0,sceneMAin);
                createMuroMadera(0,sceneMain);
                createMuroPrincipal(4,sceneMain);
                createMuroMadera(8,sceneMain);
                createMuroPrincipal(12,sceneMain);

                // 0,4,2
                console.log("JSON-- stand.logo:", standCMpay.logo);
                //"resource/logos/CMPay.png"
                var muroCMPay = createMuroLogo(0,5,-2,standCMpay.logo,sceneMain);
                muroCMPay.actionManager = new BABYLON.ActionManager(sceneMain);
                muroCMPay.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {                                        
                    //currentScene = scenes[1];

                    createStand(productCMpay,sceneMain);
                }));
                
                console.log("JSON-- stand.logo:", standChaski.logo);
                //"resource/logos/chaski.png"
                var muroChasky = createMuroLogo(-8,5,-2,standChaski.logo,sceneMain);
                muroChasky.actionManager = new BABYLON.ActionManager(sceneMain);
                muroChasky.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
                    createStand(productChaski,sceneMain);
                }));
                
                
                //var muroKarpay = createMuroLogoTransparente(-8,5,-2,"resource/logos/karpay_grande.png",sceneMain);
                //"resource/logos/global-transactions.png"
                //var muroGlobal = createMuroLogo(8,5,-2,"resource/logos/global-transactions.png",sceneMain);

                console.log("JSON-- stand.logo:", standFirmaDigital.logo);
                var muroFirma = createMuroLogo(8,5,-2,standFirmaDigital.logo,sceneMain);
                muroFirma.actionManager = new BABYLON.ActionManager(sceneMain);
                muroFirma.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
                    createStand(productFirmaDigital,sceneMain);
                }));
                //-----------------> INI TEXTO 
                // createTextoFijo("PRODUCTOS DIGITALES - Praxis");
                //-----------------> FIN TEXTO 
             } 
             //createSceneM(); 
            // Load JSON Stands
            loadJSON(jsonStandsLogosURL).then((dataS) => {
                if(dataS) {                                       
                    console.log("JSON-| Stands:", dataS);
                    console.log("JSON-| Stands.length:", dataS.stands.length);

                    for (let i = 0;i<dataS.stands.length;i++){
                        getStandFromJSON(dataS,i).then((stand) => {
                            if(stand) {
                                switch(i){
                                    case 0:
                                        standRecognizeMe = stand;
                                        break;
                                    case 1:
                                        standChatbot = stand;
                                        break;
                                    case 2:
                                        standCMpay = stand;
                                        break;
                                    case 3:
                                        standChaski = stand;
                                        break;
                                    case 4:
                                        standFirmaDigital = stand;
                                        break;
                                    case 5:
                                        standApi = stand;
                                        break;
                                    case 6:
                                        standOnboarding = stand;
                                        break;
                                    case 7:
                                        standMarketplace = stand;
                                        break;
                                }
                                if(i==(dataS.stands.length-1)){
                                    createSceneM(); 
                                }
                            }
                        });
                    }                     
                }
            }); 
            initJSONData(); 
              
            

    //Set current scene
    var currentScene = sceneMain;

    //Scenes array
    var scenes = [];
    scenes.push(sceneMain);
    //scenes.push(scene1);
    //scenes.push(scene2);
    //scenes.push(scene3);

    //runRenderLoop inside a setTimeout is neccesary in the Playground to stop the PG's runRenderLoop.
    /*
    setTimeout(function() {
        engine.stopRenderLoop();
        engine.runRenderLoop(function () {
        console.info("INI Timeout");                
        currentScene.render();
        console.info("FIN Timeout");
                        
        });
    }, 500);
    */
    return sceneMain;
    
};



    var createFreeCamera = function (scene) {
        // This creates and positions a free camera (non-mesh)
        //new BABYLON.Vector3(0, 5, -25)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0.5, -0.5, -20), scene);
        
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        scene.activeCamera = camera;
        //camera.attachControl(canvas, true);
        scene.activeCamera.attachControl(canvas, true);
    }

    const createArcRotateCamera = function (scene) {        
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

        camera.setPosition(new BABYLON.Vector3(0, 7, -15));

        scene.activeCamera = camera;
        //camera.attachControl(canvas, true);
        scene.activeCamera.attachControl(canvas, true);
    }

    var createLight = function (scene) {
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
        //var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
    }

    const createSuelo = function (scene) {
        //var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 100, height: 60});
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 100, height: 60},scene);
            /*
            const xrPromise = scene.createDefaultXRExperienceAsync({
                floorMeshes: [ground]
            }); 
            */

        const localAxes = new BABYLON.AxesViewer(scene, 1);
        localAxes.xAxis.parent = ground;
        localAxes.yAxis.parent = ground;
        localAxes.zAxis.parent = ground;
    }

    const createMuroPrincipal = function (positionX,scene) {
        // Create a basic wall (box)          
            const wall = BABYLON.MeshBuilder.CreateBox("wall", {width: 4, height: 10, depth: 0.4},scene);

            // Add a material
            const wallMaterial = new BABYLON.StandardMaterial("wallMaterial", scene);
            //wallMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8); // Gray color
            //const texture = new BABYLON.Texture("https://mexico.praxisglobe.com/imagenes/index/talento_fondo_arriba_chico.png", scene);
            // resource/background/talento_fondo_arriba_chico.png
            // resource/background/logo_praxis.png
            // resource/background/41500093.jpg    <----
            // resource/background/piso_madera.jpg      
            // resource/background/textura-madera.jpg                              
            const texture = new BABYLON.Texture("resource/background/home_praxis_mexico.png", scene);
            
       
            wallMaterial.diffuseTexture = texture;
            wall.material = wallMaterial;

            // Position the wall
            wall.position.x = positionX; // Example position
            wall.position.y = 5; // Example position
            wall.position.z = 0; // Example position

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
            const texture2 = new BABYLON.Texture("resource/background/muro_madera.jpg", scene);                  
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

    const createPedestal = function () {

    }

    var createMuroLogo = function (positionX,positionY,positionZ,srcImg, scene) {
       
        var hdrTexture = new BABYLON.HDRCubeTexture(
            "https://dl.dropbox.com/s/6eyb6pgqiq43xbz/this.hdr",
            scene,512
        );
        hdrTexture.level = 1;

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
        cubeMat.reflectionTexture = hdrTexture;
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
