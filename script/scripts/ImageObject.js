const SvgObject = function(scene, position = new BABYLON.Vector3(0, 6, 0), nombre, size = { width: 10, height: 3.5 }, rotation = new BABYLON.Vector3(0, Math.PI/2, -Math.PI/2)) {
    // Concatenar correctamente la ruta con el nombre del archivo
    const texturePath = "./resource/" + nombre;

    // Crear la textura
    const svgTexture = new BABYLON.Texture(texturePath, scene);
    svgTexture.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE);

    // Crear el material
    const material = new BABYLON.StandardMaterial("svgMaterial", scene);
    material.diffuseTexture = svgTexture;
    material.diffuseTexture.hasAlpha = true;
    material.backFaceCulling = false;

    // Crear el plano
    const plane = BABYLON.MeshBuilder.CreatePlane("svgPlane", size, scene);
    plane.material = material;

    // Posicionar el plano
    plane.position = position;
    plane.rotation =  rotation;

    // Devolver el objeto por si se necesita usar
    return plane;
}

const ImageObject = function(scene, name, position = new BABYLON.Vector3(0, 6, 0), opacity = 1, rotation = new BABYLON.Vector3(0, 0, 0), size = { width: 2, height: 2 }){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", size, scene);

    const url = "./resource/"+name;

    const texture = new BABYLON.Texture(url, scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = opacity;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation = rotation;

    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}

const TextObject = function(scene, text, fontSize = 20, color, position = new BABYLON.Vector3(0, 6, 0), rotation  = new BABYLON.Vector3(0, 0, 0), size = { width: 2, height: 2 }, sizeText = { width: 500, height: 256 }) {
    const plane = BABYLON.MeshBuilder.CreatePlane("textPlane", size, scene);
    plane.position = position;
   

    // Crear GUI para ese mesh
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);

    const textBlock = new BABYLON.GUI.TextBlock();
    textBlock.text =  text;
    textBlock.color = color;
    textBlock.fontSize = fontSize;
    textBlock.textWrapping = true;
    textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    textBlock.paddingLeft = "10px";
    textBlock.paddingTop = "10px";

    plane.rotation = rotation;
    advancedTexture.addControl(textBlock);

    return plane;


}
