const SvgObject = function (
    scene,
    position = new BABYLON.Vector3(0, 6, 0),
    nombre,
    size = { width: 10, height: 3.5 },
    rotation = new BABYLON.Vector3(0, Math.PI / 2, -Math.PI / 2)
  ) {
    const texturePath = "./resource/" + nombre;
  
    const svgTexture = new BABYLON.Texture(texturePath, scene, false, true, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);
  
    // Forzar alta calidad en retina / móviles
    svgTexture.uScale = 1;
    svgTexture.vScale = 1;
    svgTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
    svgTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
  
    const material = new BABYLON.StandardMaterial("svgMaterial", scene);
    material.diffuseTexture = svgTexture;
    material.diffuseTexture.hasAlpha = true;
    material.backFaceCulling = false;
  
    // Ajustar tamaño según orientación
    const aspectRatio = window.innerWidth / window.innerHeight;
    const width = size.width * (aspectRatio < 1 ? 0.8 : 1); // Reducir si es portrait
  
    const plane = BABYLON.MeshBuilder.CreatePlane("svgPlane", { width: width, height: size.height }, scene);
    plane.material = material;
    plane.position = position;
    plane.rotation = rotation;
  
    return plane;
  };

  const ImageObject = function (
    scene,
    name,
    position = new BABYLON.Vector3(0, 6, 0),
    opacity = 1,
    rotation = new BABYLON.Vector3(0, 0, 0),
    size = { width: 2, height: 2 }
  ) {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const adjustedWidth = size.width * (aspectRatio < 1 ? 0.8 : 1);
  
    const plane = BABYLON.MeshBuilder.CreatePlane("imagePlane", { width: adjustedWidth, height: size.height }, scene);
  
    const url = "./resource/" + name;
    const texture = new BABYLON.Texture(url, scene, false, true, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);
    texture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
    texture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
  
    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true;
    material.backFaceCulling = false;
    material.alpha = opacity;
  
    plane.material = material;
    plane.position = position;
    plane.rotation = rotation;
  
    return plane;
  };

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
