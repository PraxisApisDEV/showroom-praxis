let videoActualP;
let objectActualPN = [];
let allObjectPN = []
let allvideosPN = []

const TotemPNegociosObj = function(scene, textDescription, plane, camera, lamp){
    const fondo =  FondoObj(scene, new BABYLON.Vector3(89.9,-9.8,487.6));

    const opt1 = OptionsObject(scene, new BABYLON.Vector3(88.6,-13,513.2));//108
    const opt2 = OptionsObject(scene, new BABYLON.Vector3(88.6,-17,513.2));
    const opt3 = OptionsObject(scene, new BABYLON.Vector3(88.6,-21,513.2));

    const tituloProcesos = SvgObject(scene, new BABYLON.Vector3(88.7,-1,517.2), "images/ProcesosNegocios/TEXTO PROCESOS DE NEGOCIO.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, Math.PI/2, -Math.PI/2));

    const textoOnboarding = SvgObject(scene, new BABYLON.Vector3(88.7,-13,513.2), "images/ProcesosNegocios/Onboarding/Totem/TEXTO ONBOARDING.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const iconoOnboarding = SvgObject(scene, new BABYLON.Vector3(88.7,-13,517.2), "images/ProcesosNegocios/Onboarding/Totem/ICONO ONBOARDING.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const plusOnboarding = PlusImageObject2(scene, new BABYLON.Vector3(88.7,-13,509.2));
    
    const textoFirma = SvgObject(scene, new BABYLON.Vector3(88.7,-17,513.2), "images/ProcesosNegocios/FirmaDigital/Totem/TEXTO FIRMA DIGITAL.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const iconoFirma = SvgObject(scene, new BABYLON.Vector3(88.7,-17,517.2), "images/ProcesosNegocios/FirmaDigital/Totem/ICONO FIRMA.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const plusFirma = PlusImageObject2(scene, new BABYLON.Vector3(88.7,-17,509.2));
    
    const textoApi = SvgObject(scene, new BABYLON.Vector3(88.7,-21,513.2), "images/ProcesosNegocios/ApiConect/Totem/TEXTO API CONNECT.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const iconoApi = SvgObject(scene, new BABYLON.Vector3(88.7,-21,517.2), "images/ProcesosNegocios/ApiConect/Totem/ICONO API.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const plusApi = PlusImageObject2(scene, new BABYLON.Vector3(88.7,-21,509.2));
    
    const fondoTexto = SvgObject(scene, new BABYLON.Vector3(88.8,1.5,486.2), "images/ProcesosNegocios/Cuadro por texto.svg", { width: 32, height: 6 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    
    const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,502.2), "images/ProcesosNegocios/Onboarding/Icono onboarding.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
    const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,495.2), "images/ProcesosNegocios/Onboarding/Titulo Onboarding.svg", {width: 9, height: 1.5}, new BABYLON.Vector3(0, Math.PI/2, 0));

    const logo  = ImageObject(scene, "logos/LOGO PTS.png", new BABYLON.Vector3(88.8,-23.5,484.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 7.3, height: 1.8});
    const silla = ImageObject(scene, "images/ProcesosNegocios/Silla.png", new BABYLON.Vector3(88.7,-19.5,464.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6, height: 9});

    const text = TextObject(scene,textDescription, 23, "white", new BABYLON.Vector3(88.7,-12.5,486.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});

    videoActualP = AddVideo(scene, "Onboarding Digital.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,483.2), new BABYLON.Vector3(0, Math.PI/2, 0));

    const qr2  = ImageObject(scene, "images/ProcesosNegocios/Onboarding/qr2.png", new BABYLON.Vector3(88.6,-12,462.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
    const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,462.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
    const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,462), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
    const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,463.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));

    objectActualPN.push(qr2,
        qr2fondo,
        contacto,
        iconContacto
    );

    allObjectPN.push( qr2,
        qr2fondo,
        contacto,
        iconContacto
    );

    objectActualPN.push(icon);
    objectActualPN.push(titulo);
    objectActualPN.push(text);
    objectActualPN.push(videoActualP.plane);

    allObjectPN.push(opt1, opt2, opt3,
        tituloProcesos, plane, titulo,
        textoOnboarding, iconoOnboarding, plusOnboarding,
        textoFirma, iconoFirma, plusFirma,
        textoApi, iconoApi, plusApi,
        fondoTexto, icon, fondo,
        logo, silla, text, videoActualP.plane
    )
    allvideosPN.push(videoActualP.video);

    BotonOcultar(scene,allObjectPN, new BABYLON.Vector3(86.8,-21.5,500.2), {width: 7, height: 2}, "images/ProcesosNegocios/BOTON ROSA.svg", new BABYLON.Vector3(0, Math.PI/2, 0), videoActualP.video, camera, lamp, allvideosPN, 2)


    clicOptPN1(opt1, scene);
    clicOptPN2(opt2, scene);
    clicOptPN3(opt3, scene);
    
}

const clicOptPN1 = function(plane, scene){
    // Habilitar interacción con el plano
    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                videoActualP.video.pause();
                OcultarPrimerosObjetos(objectActualPN);
                console.log("Clic 2");
                objectActualPN = [];
                getTextPN(0).then((text) =>{
                    console.log(text)
                    const texts = TextObject(scene, text, 23, "white", new BABYLON.Vector3(88.7,-12.5,486.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});
                    objectActualPN.push(texts);
                    allObjectPN.push(texts);
                })

                const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,502.2), "images/ProcesosNegocios/Onboarding/Icono onboarding.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
                const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,495.2), "images/ProcesosNegocios/Onboarding/Titulo Onboarding.svg", {width: 9, height: 1.5}, new BABYLON.Vector3(0, Math.PI/2, 0));
                videoActualP = AddVideo(scene, "Onboarding Digital.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,483.2), new BABYLON.Vector3(0, Math.PI/2, 0));

                const qr2  = ImageObject(scene, "images/ProcesosNegocios/Onboarding/qr2.png", new BABYLON.Vector3(88.6,-12,462.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,462.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,462), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,463.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
            
                objectActualPN.push(qr2,
                    qr2fondo,
                    contacto,
                    iconContacto
                );
            
                allObjectPN.push( qr2,
                    qr2fondo,
                    contacto,
                    iconContacto
                );

                allObjectPN.push(titulo, icon, videoActualP.plane);

                objectActualPN.push(titulo);
                objectActualPN.push(icon);
                objectActualPN.push(videoActualP.plane);
            }
        )
    );
}

const clicOptPN2 = function(plane, scene){
    // Habilitar interacción con el plano
    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                videoActualP.video.pause();
                OcultarPrimerosObjetos(objectActualPN);
                console.log("Clic 2");
                objectActualPN = [];
                getTextPN(3).then((text) =>{
                    console.log(text)
                    const texts = TextObject(scene, text, 23, "white", new BABYLON.Vector3(88.7,-12.5,486.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});
                    objectActualPN.push(texts);
                    allObjectPN.push(texts);
                })

                const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,502.2), "images/ProcesosNegocios/FirmaDigital/Icono Firma digital.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
                const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,495.2), "images/ProcesosNegocios/FirmaDigital/Titulo Firma digital.svg", {width: 9, height: 1.2}, new BABYLON.Vector3(0, Math.PI/2, 0));
                //videoActualP = AddVideo(scene, "Onboarding digital empleados.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,483.2), new BABYLON.Vector3(0, Math.PI/2, 0));

                const imgV = ImageObject(scene, "images/ProcesosNegocios/FirmaDigital/imagenP.jpg",new BABYLON.Vector3(88.8,-10,483.2),1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 38, height: 17 });

                const qr  = ImageObject(scene, "images/ProcesosNegocios/FirmaDigital/qr.png", new BABYLON.Vector3(88.6,-21,470.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qrfondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-21,470.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const masInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,470), "images/ProcesosNegocios/Texto mas informacion.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconMasInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,471.9), "images/ProcesosNegocios/Icono mas informacion.svg", {width: 1, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                const qr2  = ImageObject(scene, "images/ProcesosNegocios/FirmaDigital/qr2.png", new BABYLON.Vector3(88.6,-12,462.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,462.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,462), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,463.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                objectActualPN.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto, imgV
                );

                allObjectPN.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto, imgV
                );

                allObjectPN.push(titulo, icon, videoActualP.plane);

                objectActualPN.push(titulo);
                objectActualPN.push(icon);
                objectActualPN.push(videoActualP.plane);

            }
        )
    );
}


const clicOptPN3 = function(plane, scene){
    // Habilitar interacción con el plano
    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                videoActualP.video.pause();
                OcultarPrimerosObjetos(objectActualPN);
                console.log("Clic 2");
                objectActualPN = [];
                getTextPN(4).then((text) =>{
                    console.log(text)
                    const texts = TextObject(scene, text, 23, "white", new BABYLON.Vector3(88.7,-12.5,486.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});
                    objectActualPN.push(texts);
                    allObjectPN.push(texts);
                })

                const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,502.2), "images/ProcesosNegocios/ApiConect/ICONO API.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
                const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,495.2), "images/ProcesosNegocios/ApiConect/TITULO API.svg", {width: 9, height: 1.2}, new BABYLON.Vector3(0, Math.PI/2, 0));
                videoActualP = AddVideo(scene, "API Connect.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,483.2), new BABYLON.Vector3(0, Math.PI/2, 0));

                const qr  = ImageObject(scene, "images/ProcesosNegocios/ApiConect/qr Api Conect.png", new BABYLON.Vector3(88.6,-21,470.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qrfondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-21,470.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const masInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,470), "images/ProcesosNegocios/Texto mas informacion.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconMasInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,471.9), "images/ProcesosNegocios/Icono mas informacion.svg", {width: 1, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                const qr2  = ImageObject(scene, "images/ProcesosNegocios/ApiConect/qr2.png", new BABYLON.Vector3(88.6,-12,462.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,462.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,462), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,463.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                allObjectPN.push(titulo, icon, videoActualP.plane);

                objectActualPN.push(titulo);
                objectActualPN.push(icon);
                objectActualPN.push(videoActualP.plane);

                objectActualPN.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

                allObjectPN.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

            }
        )
    );
}

const getTextPN = async function(position){
    let text;
    await loadJSON("./resource/json/categoria-productos.json").then(async (json) =>{
        const categoria =  await getStandFromJSON(json, 0).then((categor) => {
            
            text = categor.productos[position].description;
        });
       
    });
    return text;
}

const PlusImageObject2 = function(scene, position = new BABYLON.Vector3(0, 6, 0)){
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 1, height: 1 }, scene);
    const texture = new BABYLON.Texture("./resource/images/ProcesosNegocios/SIGNO DE MAS.png", scene);

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