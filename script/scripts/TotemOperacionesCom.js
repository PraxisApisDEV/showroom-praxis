let videoActualOC;
let objectActualOC = [];
let allObjectOC = []
let allvideosOC = []


const TotemOperacionesComObj = function(scene, textDescription, plane, camera, lamp){

    const fondo = FondoObj2(scene, new BABYLON.Vector3(-16.6, -9.4, 590.8));

    const opt1 = OptionsObject2(scene, new BABYLON.Vector3(-41.6,-15,590.2));//108
    

    const tituloOperacionesComerciales = SvgObject(scene, new BABYLON.Vector3(-46, -1, 590.2), "images/OperacionesComerciales/Totem/TEXTO OPERACIONES COMERCIALES.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));

    const textoPuntoVenta = SvgObject(scene, new BABYLON.Vector3(-41.6, -15, 590.2), "images/OperacionesComerciales/Totem/TEXTO PUNTO DE VENTA.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, 0, 0));

    const iconoTarjeta = SvgObject(scene, new BABYLON.Vector3(-45.6, -15, 590.2), "images/OperacionesComerciales/Totem/ICONO TARJETA.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, 0, 0));

    const plusPuntoVenta = PlusImageObject3(scene, new BABYLON.Vector3(-37.6, -15, 590.2));

    const cuadroTextoOperaciones = SvgObject(scene, new BABYLON.Vector3(-15.6, 1.5, 590.2), "images/OperacionesComerciales/CUADRO PARA TEXTO.svg", { width: 32, height: 6 }, new BABYLON.Vector3(0, 0, 0));

    const icon = SvgObject(scene, new BABYLON.Vector3(-30.6,4.5,590.1), "images/OperacionesComerciales/ICONO PUNTO DE VENTA.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, 0, 0))
    const titulo = SvgObject(scene, new BABYLON.Vector3(-23.6,3.4,590.1), "images/OperacionesComerciales/TITULO PUNTO DE VENTA .svg", {width: 9, height: 1.5}, new BABYLON.Vector3(0, 0, 0));

    const logo = ImageObject(scene, "logos/LOGO PTS.png", new BABYLON.Vector3(-15.6,-23.5,590.1), 1, new BABYLON.Vector3(0, 0, 0), { width: 7.3, height: 1.8});
    const silla = ImageObject(scene, "images/OperacionesComerciales/SILLON.png", new BABYLON.Vector3(6.4,-19.5,590.09), 1, new BABYLON.Vector3(0, 0, 0), { width: 9, height: 9});

    const text = TextObject(scene,textDescription, 23, "white", new BABYLON.Vector3(-15.6,-12.5,590.1), new BABYLON.Vector3(0, 0, 0), {width: 31, height: 30}, {width:500, height:250});

    videoActualOC = AddVideo(scene, "cmpay.mp4", { width: 38, height: 17 },new BABYLON.Vector3(-12.6,-10,590.1), new BABYLON.Vector3(0, 0, 0));

    const qr  = ImageObject(scene, "images/OperacionesComerciales/qr.png", new BABYLON.Vector3(-0.6,-21,590.08), 1, new BABYLON.Vector3(0, 0, 0), { width: 5, height: 5});
    const qrfondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(-0.6,-21,590.08), 0.2, new BABYLON.Vector3(0, 0, 0), { width: 6.3, height: 6.3});
    const masInfo = SvgObject(scene, new BABYLON.Vector3(-0.4,-18.5,590.08), "images/ProcesosNegocios/Texto mas informacion.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, 0, 0));
    const iconMasInfo = SvgObject(scene, new BABYLON.Vector3(-2.2,-18.5,590.08), "images/ProcesosNegocios/Icono mas informacion.svg", {width: 1, height: 1}, new BABYLON.Vector3(0, 0, 0));            

    const qr2  = ImageObject(scene, "images/OperacionesComerciales/qr2.png", new BABYLON.Vector3(8.4,-12,590), 1, new BABYLON.Vector3(0, 0, 0), { width: 5, height: 5});
    const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(8.4,-12,590), 0.2, new BABYLON.Vector3(0, 0, 0), { width: 6.3, height: 6.3});
    const contacto = SvgObject(scene, new BABYLON.Vector3(8.3,-9.5,590), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, 0, 0));
    const iconContacto = SvgObject(scene, new BABYLON.Vector3(6.5,-9.5,590), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, 0, 0));
                            
    objectActualOC.push(qr, qr2,
        qr2fondo, qrfondo,
        masInfo, contacto,
        iconMasInfo, iconContacto
    );

    allObjectOC.push(qr, qr2,
        qr2fondo, qrfondo,
        masInfo, contacto,
        iconMasInfo, iconContacto
    );

    allObjectOC.push( opt1, plane, fondo,
        tituloOperacionesComerciales, textoPuntoVenta,
        iconoTarjeta,plusPuntoVenta, cuadroTextoOperaciones,
        icon, titulo, logo, silla,
        text, videoActualOC.plane
    );

    allvideosOC.push(videoActualOC.video);

    BotonOcultar(scene,allObjectOC, new BABYLON.Vector3(-28.6,-21.5,588.1), {width: 7, height: 2}, "images/OperacionesComerciales/BOTON AZUL.svg", new BABYLON.Vector3(0, 0, 0), videoActualOC.video, camera, lamp, allvideosOC, 3)

    
}

const PlusImageObject3 = function(scene, position = new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 1, height: 1 }, scene);
    const texture = new BABYLON.Texture("./resource/images/OperacionesComerciales/Totem/SIGNO DE MAS.png", scene);

    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.hasAlpha = true; // Habilita el canal alfa (transparencia)
    material.backFaceCulling = false;        // Opcional: muestra ambos lados del plano
    material.alpha = 1;    
    
    plane.material = material;

    plane.position = position;
    plane.rotation =  new BABYLON.Vector3(0, 0, 0);

    return plane;    // Asegúrate de que la opacidad del material esté al máximo

}