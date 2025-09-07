const TotemECommerce = async function(scene, position = new BABYLON.Vector3(0, 6, 0), camera, lamp){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 15, height: 30 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ECommerce/TOMEM MORADO.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, Math.PI/2, 0);

    let textDescription = "";
    await loadJSON("./resource/json/categoria-productos.json").then(async (json) =>{
        const categoria =  await getStandFromJSON(json, 1).then((categor) => {
            
            textDescription = categor.productos[0].description;
        });
       
    });
    
    console.log(textDescription);

    TotemEcommerceObj(scene, textDescription, plane, camera, lamp);

    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}


const TotemProcesosNeg = async function(scene, position = new BABYLON.Vector3(0, 6, 0), camera, lamp){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 15, height: 30 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ProcesosNegocios/TOTEM NARANJA.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, Math.PI/2, 0);

    let textDescription = "";
    await loadJSON("./resource/json/categoria-productos.json").then(async (json) =>{
        const categoria =  await getStandFromJSON(json, 0).then((categor) => {
            
            textDescription = categor.productos[0].description;
        });
       
    });
   
    console.log(textDescription);
    TotemPNegociosObj(scene, textDescription, plane, camera, lamp);
    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}

const TotemOperacionesCom = async function(scene, position = new BABYLON.Vector3(0, 6, 0), camera){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 15, height: 30 }, scene);
    const texture = new BABYLON.Texture("./resource/images/OperacionesComerciales/TotemAzul.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, 0, 0);

    let textDescription = "";
    await loadJSON("./resource/json/categoria-productos.json").then(async (json) =>{
        const categoria =  await getStandFromJSON(json, 2).then((categor) => {
            
            textDescription = categor.productos[0].description;
        });
       
    });
    
    console.log(textDescription);
    TotemOperacionesComObj(scene, textDescription, plane, camera, null)
    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}

const FondoObj = function(scene, position =  new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 70, height: 40 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ECommerce/Fondo.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, Math.PI/2, 0);

    return plane;
}

const FondoObj2 = function(scene, position =  new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 70, height: 40 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ECommerce/Fondo.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, 0, 0);

    return plane;
}

const LampObj = function(scene, position = new BABYLON.Vector3(0, 6, 0)){
    const lampLight = new BABYLON.PointLight("lampLight", position, scene);
    lampLight.intensity = 10.2;
    lampLight.range = 100;
    lampLight.diffuse = new BABYLON.Color3(1, 1, 0.8);  // Luz cálida
    lampLight.specular = new BABYLON.Color3(1, 1, 1);

    // 2. Crear una malla para representar la lámpara (bombilla)
    const bulb = BABYLON.MeshBuilder.CreateSphere("bulb", { diameter: 0.3 }, scene);
    bulb.position = lampLight.position.clone();

    // 3. Material emisivo para que la bombilla parezca brillar
    const bulbMat = new BABYLON.StandardMaterial("bulbMat", scene);
    bulbMat.emissiveColor = new BABYLON.Color3(1, 1, 0.6); // Brillo cálido
    bulb.material = bulbMat;

    // 4. (Opcional) Efecto de brillo global (glow)
    const glowLayer = new BABYLON.GlowLayer("glow", scene);
    glowLayer.intensity = 0.6;

    return {
        light: lampLight,
        mesh: bulb,
        glow: glowLayer
    };

}

const OptionsObject = function(scene, position = new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 11, height: 3 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ECommerce/RECTANGULO BLANCO.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 0.2;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, Math.PI/2, 0);

    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}

const OptionsObject2 = function(scene, position = new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 11, height: 3 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ECommerce/RECTANGULO BLANCO.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 0.2;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, 0, 0);

    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}


const PlusImageObject = function(scene, position = new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 1, height: 1 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ECommerce/SIGNO DE MAS.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, Math.PI/2, 0);

    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}


