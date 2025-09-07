let videoActualEC;
let objectActualEC = [];
let allObjectEC = []
let allvideos = []


const TotemEcommerceObj = function(scene, textDescription, plane, camera, lamp){
    const fondo = FondoObj(scene, new BABYLON.Vector3(89.9,-9.5,287.6));

    const opt1 = OptionsObject(scene, new BABYLON.Vector3(88.6,-13,313.2));//108
    const opt2 = OptionsObject(scene, new BABYLON.Vector3(88.6,-17,313.2));
    //const opt3 = OptionsObject(scene, new BABYLON.Vector3(88.6,-17,313.2));
    const opt4 = OptionsObject(scene, new BABYLON.Vector3(88.6,-21,313.2));

    const tituloEC = SvgObject(scene, new BABYLON.Vector3(88.7,-1,317.2), "images/ECommerce/TEXTO ECOMMERCE Y SEGURIDAD.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, Math.PI/2, -Math.PI/2));

    // Opción 1
    const svgTextoOpt1 = SvgObject(scene, new BABYLON.Vector3(88.7,-13,313.2), "images/ECommerce/VentaDigital/totem/TEXTO VENTA DIGITAL.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const svgIconoOpt1 = SvgObject(scene, new BABYLON.Vector3(88.7,-13,317.2), "images/ECommerce/VentaDigital/totem/ICONO VENTA DIGITAL.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const plusOpt1     = PlusImageObject(scene, new BABYLON.Vector3(88.7,-13,309.2));

    // Opción 2
    const svgTextoOpt2 = SvgObject(scene, new BABYLON.Vector3(88.7,-17,313.2), "images/ECommerce/MensajeriaAlerta/Totem/TEXTO MENSAJERIA Y ALERTAS.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const svgIconoOpt2 = SvgObject(scene, new BABYLON.Vector3(88.7,-17,317.2), "images/ECommerce/MensajeriaAlerta/Totem/ICONO MENSAJERIA.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const plusOpt2     = PlusImageObject(scene, new BABYLON.Vector3(88.7,-17,309.2));

    // Opción 3
    /*const svgTextoOpt3 = SvgObject(scene, new BABYLON.Vector3(88.7,-17,313.2), "images/ECommerce/IA/Totem/TITULO IA.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const svgIconoOpt3 = SvgObject(scene, new BABYLON.Vector3(88.7,-17,317.2), "images/ECommerce/IA/Totem/ICONO IA.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const plusOpt3     = PlusImageObject(scene, new BABYLON.Vector3(88.7,-17,309.2));
*/
    // Opción 4
    const svgTextoOpt4 = SvgObject(scene, new BABYLON.Vector3(88.7,-21,313.2), "images/ECommerce/Reconocimiento/Totem/TEXTO RECONOCIMIENTO DE IMAGENES.svg", { width: 5.5, height: 1.5 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const svgIconoOpt4 = SvgObject(scene, new BABYLON.Vector3(88.7,-21,317.2), "images/ECommerce/Reconocimiento/Totem/ICONO RECONOCIMIENTO DE IMEGEN.svg", { width: 2, height: 2 }, new BABYLON.Vector3(0, Math.PI/2, 0));
    const plusOpt4     = PlusImageObject(scene, new BABYLON.Vector3(88.7,-21,309.2));

    // Cuadro para texto
    const svgCuadroTexto = SvgObject(scene, new BABYLON.Vector3(88.8,1.5,286.2), "images/ECommerce/CUADRO PARA TEXTO.svg", { width: 32, height: 6 }, new BABYLON.Vector3(0, Math.PI/2, 0));     
    const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,302.2), "images/ECommerce/VentaDigital/ICONO VENTA DIGITAL.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
    const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,295.2), "images/ECommerce/VentaDigital/TITULO VENTA DIGITAL.svg", {width: 9, height: 1.3}, new BABYLON.Vector3(0, Math.PI/2, 0));

    const logo = ImageObject(scene, "logos/LOGO PTS.png", new BABYLON.Vector3(88.8,-23.5,284.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 3});
    const silla = ImageObject(scene, "images/ECommerce/SILLA.png", new BABYLON.Vector3(88.7,-19.5,264.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6, height: 9});

    const text = TextObject(scene,textDescription, 23, "white", new BABYLON.Vector3(88.7,-12.5,286.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});

    videoActualEC = AddVideo(scene, "PTShop.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,283.2), new BABYLON.Vector3(0, Math.PI/2, 0));

    const qr  = ImageObject(scene, "images/ECommerce/VentaDigital/qr.png", new BABYLON.Vector3(88.6,-21,270.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
    const qrfondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-21,270.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
    const masInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,270), "images/ProcesosNegocios/Texto mas informacion.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
    const iconMasInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,271.9), "images/ProcesosNegocios/Icono mas informacion.svg", {width: 1, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));            

    const qr2  = ImageObject(scene, "images/ECommerce/VentaDigital/qr2.png", new BABYLON.Vector3(88.6,-12,262.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
    const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,262.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
    const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,262), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
    const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,263.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
    objectActualEC.push(qr, qr2,
        qr2fondo, qrfondo,
        masInfo, contacto,
        iconMasInfo, iconContacto
    );

    allObjectEC.push(qr, qr2,
        qr2fondo, qrfondo,
        masInfo, contacto,
        iconMasInfo, iconContacto
    );

    objectActualEC.push(icon);
    objectActualEC.push(titulo);
    objectActualEC.push(text);
    objectActualEC.push(videoActualEC.plane);

    allObjectEC.push(
        opt1, opt2,  opt4, //opt3,
        svgTextoOpt1, svgIconoOpt1, plusOpt1,
        svgTextoOpt2, svgIconoOpt2, plusOpt2,
        //svgTextoOpt3, svgIconoOpt3, plusOpt3,
        svgTextoOpt4, svgIconoOpt4, plusOpt4,
        svgCuadroTexto, logo, silla,
        text, videoActualEC.plane,
        icon, titulo, plane, fondo
    );

    allvideos.push(videoActualEC.video);

    BotonOcultar(scene,allObjectEC, new BABYLON.Vector3(86.8,-21.5,300.2), {width: 7, height: 2}, "images/ECommerce/BOTON MORADO.svg", new BABYLON.Vector3(0, Math.PI/2, 0), videoActualEC.video, camera, lamp, allvideos,1)

    clicOptEC1(opt1, scene);
    clicOptEC2(opt2, scene);
    //clicOptEC3(opt3, scene);
    clicOptEC4(opt4, scene);
}

const clicOptEC1 = function(plane, scene){
    // Habilitar interacción con el plano
    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                videoActualEC.video.pause();
                OcultarPrimerosObjetos(objectActualEC);
                console.log("Clic 2");
                objectActualEC = [];
                getTextEC(0).then((text) =>{
                    console.log(text)
                    const texts = TextObject(scene, text, 23, "white", new BABYLON.Vector3(88.7,-12.5,286.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});
                    objectActualEC.push(texts);
                    allObjectEC.push(texts);
                })

                const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,302.2), "images/ECommerce/VentaDigital/ICONO VENTA DIGITAL.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
                const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,295.2), "images/ECommerce/VentaDigital/TITULO VENTA DIGITAL.svg", {width: 9, height: 1.3}, new BABYLON.Vector3(0, Math.PI/2, 0));
                videoActualEC = AddVideo(scene, "PTShop.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,283.2), new BABYLON.Vector3(0, Math.PI/2, 0));

                const qr  = ImageObject(scene, "images/ECommerce/VentaDigital/qr.png", new BABYLON.Vector3(88.6,-21,270.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qrfondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-21,270.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const masInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,270), "images/ProcesosNegocios/Texto mas informacion.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconMasInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,271.9), "images/ProcesosNegocios/Icono mas informacion.svg", {width: 1, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));            

                const qr2  = ImageObject(scene, "images/ECommerce/VentaDigital/qr2.png", new BABYLON.Vector3(88.6,-12,262.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,262.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,262), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,263.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                            
                objectActualEC.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

                allObjectEC.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

                objectActualEC.push(titulo);
                objectActualEC.push(icon);
                objectActualEC.push(videoActualEC.plane);

                allObjectEC.push(titulo, icon, videoActualEC.plane);
                allvideos.push(videoActualEC.video);
            }
        )
    );
}

const clicOptEC2 = function(plane, scene){
    // Habilitar interacción con el plano
    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                videoActualEC.video.pause();
                OcultarPrimerosObjetos(objectActualEC);
                console.log("Clic 2");
                objectActualEC = [];
                getTextEC(1).then((text) =>{
                    console.log(text)
                    const texts = TextObject(scene, text, 23, "white", new BABYLON.Vector3(88.7,-12.5,286.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});
                    objectActualEC.push(texts);
                    allObjectEC.push(texts);
                })

                const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,302.2), "images/ECommerce/MensajeriaAlerta/ICONO MENSAJERIA.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
                const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,296.2), "images/ECommerce/MensajeriaAlerta/TITULO MENSAJERIA.svg", {width: 7, height: 1.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                videoActualEC = AddVideo(scene, "Chaski.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,283.2), new BABYLON.Vector3(0, Math.PI/2, 0));

                const qr  = ImageObject(scene, "images/ECommerce/MensajeriaAlerta/qr.png", new BABYLON.Vector3(88.6,-21,270.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qrfondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-21,270.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const masInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,270), "images/ProcesosNegocios/Texto mas informacion.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconMasInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,271.9), "images/ProcesosNegocios/Icono mas informacion.svg", {width: 1, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                const qr2  = ImageObject(scene, "images/ECommerce/MensajeriaAlerta/qr2.png", new BABYLON.Vector3(88.6,-12,262.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,262.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,262), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,263.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                objectActualEC.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

                allObjectEC.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

                objectActualEC.push(titulo);
                objectActualEC.push(icon);
                objectActualEC.push(videoActualEC.plane);

                allObjectEC.push(titulo, icon, videoActualEC.plane);
                allvideos.push(videoActualEC.video);

            }
        )
    );
}


const clicOptEC3 = function(plane, scene){
    // Habilitar interacción con el plano
    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                videoActualEC.video.pause();
                OcultarPrimerosObjetos(objectActualEC);
                console.log("Clic 2");
                objectActualEC = [];
                getTextEC(2).then((text) =>{
                    console.log(text)
                    const texts = TextObject(scene, text, 19, "white", new BABYLON.Vector3(88.7,-12.4,287.2), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 28, height: 30}, {width:500, height:250});
                    objectActualEC.push(texts);
                    allObjectEC.push(texts);
                })

                const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,302.2), "images/ECommerce/IA/ICONO IA.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
                const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.7,295.2), "images/ECommerce/IA/TITULO IA.svg", {width: 9, height: 1.5}, new BABYLON.Vector3(0, Math.PI/2, 0));
                videoActualEC = AddVideo(scene, "Onboarding digital empleados.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,283.2), new BABYLON.Vector3(0, Math.PI/2, 0));

                const qr2  = ImageObject(scene, "images/ECommerce/IA/qr2.png", new BABYLON.Vector3(88.6,-12,262.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,262.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,262), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,263.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                            
                objectActualEC.push(qr2,
                    qr2fondo, contacto, iconContacto
                );
            
                allObjectEC.push( qr2,
                    qr2fondo, contacto, iconContacto
                );

                objectActualEC.push(titulo);
                objectActualEC.push(icon);
                objectActualEC.push(videoActualEC.plane);

                allObjectEC.push(titulo, icon, videoActualEC.plane);
                allvideos.push(videoActualEC.video);

            }
        )
    );
}

const clicOptEC4 = function(plane, scene){
    // Habilitar interacción con el plano
    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                videoActualEC.video.pause();
                OcultarPrimerosObjetos(objectActualEC);
                console.log("Clic 2");
                objectActualEC = [];
                getTextEC(3).then((text) =>{
                    console.log(text)
                    const texts = TextObject(scene, text, 23, "white", new BABYLON.Vector3(88.7,-12.5,286.3), new BABYLON.Vector3(0, Math.PI/2, 0), {width: 31, height: 30}, {width:500, height:250});
                    objectActualEC.push(texts);
                    allObjectEC.push(texts);
                })

                const icon = SvgObject(scene, new BABYLON.Vector3(88.7,4.5,302.2), "images/ECommerce/Reconocimiento/ICONO RECONOCIMIENTO.svg", {width: 4, height: 4}, new BABYLON.Vector3(0, Math.PI/2, 0))
                const titulo = SvgObject(scene, new BABYLON.Vector3(88.7,3.4,295.2), "images/ECommerce/Reconocimiento/TITULO RECONOCMIENTO.svg", {width: 9, height: 1.5}, new BABYLON.Vector3(0, Math.PI/2, 0));
                videoActualEC = AddVideo(scene, "RecognizeME.mp4", { width: 38, height: 17 },new BABYLON.Vector3(88.8,-10,283.2), new BABYLON.Vector3(0, Math.PI/2, 0));

                const qr  = ImageObject(scene, "images/ECommerce/Reconocimiento/qr.png", new BABYLON.Vector3(88.6,-21,270.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qrfondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-21,270.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const masInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,270), "images/ProcesosNegocios/Texto mas informacion.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconMasInfo = SvgObject(scene, new BABYLON.Vector3(88.6,-18.5,271.9), "images/ProcesosNegocios/Icono mas informacion.svg", {width: 1, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                const qr2  = ImageObject(scene, "images/ECommerce/Reconocimiento/qr2.png", new BABYLON.Vector3(88.6,-12,262.2), 1, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 5, height: 5});
                const qr2fondo  = ImageObject(scene, "images/ProcesosNegocios/Cuadro para QR.png", new BABYLON.Vector3(88.6,-12,262.2), 0.2, new BABYLON.Vector3(0, Math.PI/2, 0), { width: 6.3, height: 6.3});
                const contacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,262), "images/ProcesosNegocios/Texto contactanos.svg", {width: 2.8, height: 1}, new BABYLON.Vector3(0, Math.PI/2, 0));
                const iconContacto = SvgObject(scene, new BABYLON.Vector3(88.6,-9.5,263.9), "images/ProcesosNegocios/Icono contactanos.svg", {width: 0.6, height: 0.6}, new BABYLON.Vector3(0, Math.PI/2, 0));
                
                objectActualEC.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

                allObjectEC.push(qr, qr2,
                    qr2fondo, qrfondo,
                    masInfo, contacto,
                    iconMasInfo, iconContacto
                );

                objectActualEC.push(titulo);
                objectActualEC.push(icon);
                objectActualEC.push(videoActualEC.plane);

                allObjectEC.push(titulo, icon, videoActualEC.plane);
                allvideos.push(videoActualEC.video);

            }
        )
    );
}

const getTextEC = async function(position){
    let text;
    await loadJSON("./resource/json/categoria-productos.json").then(async (json) =>{
        const categoria =  await getStandFromJSON(json, 1).then((categor) => {
            
            text = categor.productos[position].description;
        });
       
    });
    return text;
}