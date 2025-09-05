let allTotemOptions = [];

const OcultarPrimerosObjetos = function OcultarPrimerosObjetosFn(allSceneObjects){
    allSceneObjects.forEach(obj => {
        if (obj instanceof Promise) {
            obj.then(real => real?.setEnabled(false));
        } else if (Array.isArray(obj)) {
            obj.forEach(o => o?.setEnabled(false));
        } else if (obj?.setEnabled) {
            obj.setEnabled(false);
        }
    });
}

const MostrarPrimerosObjetos = function OcultarPrimerosObjetosFn(allSceneObjects){
    allSceneObjects.forEach(obj => {
        if (obj instanceof Promise) {
            obj.then(real => real?.setEnabled(true));
        } else if (Array.isArray(obj)) {
            obj.forEach(o => o?.setEnabled(true));
        } else if (obj?.setEnabled) {
            obj.setEnabled(false);
        }
    });
}

const PauseVideos = function(allvideos){
    allvideos.forEach(obj => {
        if(!obj.paused){
            obj.pause();
        }
    })
}

const ActionMover1 = function(scene, camera){
    camera.alpha = -2.245537269018449;
    camera.beta = 1.3654983619940768; 
    girarCamaraA(camera, 35, 1500).then((camara) => {
        girarCamaraBetaA(camera, 5, 1500).then((camara) => {
            console.log(camera);
            moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 130), 10, 1500).then(() => {
                const totem1 = ImageObject(scene, "images/ProcesosNegocios/TOTEM NARANJA.png", new BABYLON.Vector3(-28.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                const titulo1 = SvgObject(scene, new BABYLON.Vector3(-33.8,5,169), "images/ProcesosNegocios/TEXTO PROCESOS DE NEGOCIO.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                const totem2 = ImageObject(scene, "images/ECommerce/TOMEM MORADO.png", new BABYLON.Vector3(-8.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                const titulo2 = SvgObject(scene, new BABYLON.Vector3(-13.8,5,169), "images/ECommerce/TEXTO ECOMMERCE Y SEGURIDAD.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                const totem3 = ImageObject(scene, "images/OperacionesComerciales/TotemAzul.png", new BABYLON.Vector3(12.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                const titulo3 = SvgObject(scene, new BABYLON.Vector3(7.8,5,169), "images/OperacionesComerciales/Totem/TEXTO OPERACIONES COMERCIALES.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
    

                loadPaint(scene, new BABYLON.Vector3(91, -13.5, 290), new BABYLON.Vector3(110, 46, 46), new BABYLON.Vector3(0, -Math.PI/2, 0)).then((paint => {

                }));
                loadPaint(scene, new BABYLON.Vector3(91, -13.5, 490), new BABYLON.Vector3(110, 46, 46), new BABYLON.Vector3(0, -Math.PI/2, 0)).then((paint => {

                }));
                loadPaint(scene, new BABYLON.Vector3(-17, -13.5, 592), new BABYLON.Vector3(110, 46, 46), new BABYLON.Vector3(0, Math.PI, 0)).then((paint => {

                }));

                allTotemOptions.push(totem1);
                allTotemOptions.push(totem2);
                allTotemOptions.push(totem3);

                allTotemOptions.push(titulo1);
                allTotemOptions.push(titulo2);
                allTotemOptions.push(titulo3);

                ClicTotem1(totem2,scene, allTotemOptions, camera);
                ClicTotem2(totem1,scene,allTotemOptions,camera);
                ClicTotem3(totem3,scene,allTotemOptions,camera);
            }).finally(() => {
                console.log(camera);
            });
        })
    });
}

const ClicTotem1 = function(plane, scene, allTotemOptions, camera){
    // Habilitar interacción con el plano
    camera.alpha = -1.6251072771252533;
    camera.beta = 1.461711260451552;

    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                camera.alpha = -1.6251072771252533;
                camera.beta = 1.461711260451552;
                OcultarPrimerosObjetos(allTotemOptions);
                moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 270), 10, 1500).then(() => {
                    girarCamaraA(camera, -89, 1500).then(() => {
                        const lamp = LampObj(scene, new BABYLON.Vector3(80, 27, 277));//17
                        TotemECommerce(scene, new BABYLON.Vector3(89, -8.5, 312), camera, lamp);
                        moverCamaraAZoom(camera, new BABYLON.Vector3(58, -7.8, 288), 10, 1500).then(() => {
                            girarCamaraA(camera, -1, 1500).then(() => {
                                girarCamaraBetaA(camera, 4, 1500).then(() => {
                                    console.log(camera);
                                });
                            });
                        });
                    });
                });
                
            }
        )
    );
}

const ClicTotem2 = function(plane, scene, allTotemOptions, camera){
    // Habilitar interacción con el plano

    camera.alpha = -1.6251072771252533;
    camera.beta = 1.461711260451552;

    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                camera.alpha = -1.6251072771252533;
                camera.beta = 1.461711260451552;
                OcultarPrimerosObjetos(allTotemOptions);
                moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 470), 10, 1500).then(() => {
                    girarCamaraA(camera, -89, 1500).then(() => {
                        const lamp = LampObj(scene, new BABYLON.Vector3(80, 27, 477));
                        TotemProcesosNeg(scene, new BABYLON.Vector3(89, -8.5, 512), camera, lamp);
                        moverCamaraAZoom(camera, new BABYLON.Vector3(58, -8, 488), 10, 1500).then(() => {
                            girarCamaraA(camera, -3, 1500).then(() => {
                                girarCamaraBetaA(camera, 2, 1500).then(() => {
                                    console.log(camera);
                                });
                            });
                        });
                    });
                });
                
            }
        )
    );
}

const ClicTotem3= function(plane, scene, allTotemOptions, camera){
    // Habilitar interacción con el plano

    camera.alpha = -1.6251072771252533;
    camera.beta = 1.461711260451552;

    plane.isPickable = true;

    // Agregar evento de clic
    plane.actionManager = new BABYLON.ActionManager(scene);
    plane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                camera.alpha = -1.6251072771252533;
                camera.beta = 1.461711260451552;
                OcultarPrimerosObjetos(allTotemOptions);
                moverCamaraAZoom(camera, new BABYLON.Vector3(-16, -10, 560), 10, 1500).then(() => {
                    TotemOperacionesCom(scene, new BABYLON.Vector3(-41, -8.5, 590.6), camera)
                    girarCamaraBetaA(camera, 6, 1500).then(() => {
                        girarCamaraA(camera, 2, 1500).then(() => {
                            console.log(camera);
                        })
                    });
                });
                
            }
        )
    );
}

const ShowBuildByNumber = function ShowBuildByNumberFn(scene,num, allSceneObjects, camera){
    console.log("Metodo ShowBuild"+camera);
    OcultarPrimerosObjetos(allSceneObjects);
    
    switch(num){
        case 0 : 
            loadBuildingComerce(scene).then(building => {
                console.log("Edificio cargado:", building.name); 
            });
        break;
        case 1 : 
            loadBuildingSecurity(scene).then(building => {
                console.log("Edificio cargado:", building.name);
            });
        break;
        case 2 :
            loadBuildingBussines(scene).then(building => {
                TotemECommerce(scene, new BABYLON.Vector3(89, -8.5, 107));
                LampObj(scene, new BABYLON.Vector3(80, 27, 90));
                console.log("Edificio cargado:", camera);
                camera.alpha = -1.4723375822244664;
                camera.beta = 1.3795496369902849; 
                
                //girarCamaraA(camera, -45, 1500);
                    moverCamaraAZoom(camera, new BABYLON.Vector3(0, 3, 80), 10, 1500 ).then(() => {
                        girarCamaraA(camera, -94, 1500).then(() => {
                            moverCamaraAZoom(camera, new BABYLON.Vector3(50, -1.5, 80), 1, 1500 ).then(() =>{
                               
                            })
                        });
                        
                        
                    });
                
            });
        break;
    }
}

const moverCamaraAZoom = function moverCamaraAZoomFN(camera, nuevaCoordenada, nuevoZoom, duracion = 1000) {
    // nuevaCoordenada: BABYLON.Vector3 (el nuevo target)
    // nuevoZoom: número (nuevo radius, cuanto más pequeño, más cerca)
    // duracion: duración del movimiento en milisegundos

    return new Promise((resolve) => {
        let finishedCount = 0;

        const onEnd = () => {
            finishedCount++;
            if (finishedCount === 2) {
                resolve();
            }
        };
        

        BABYLON.Animation.CreateAndStartAnimation(
            "camTargetMove",
            camera,
            "target",
            60,
            duracion / 16.67,
            camera.target.clone(),
            nuevaCoordenada,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            null,
            onEnd
        );

        BABYLON.Animation.CreateAndStartAnimation(
            "camZoom",
            camera,
            "radius",
            60,
            duracion / 16.67,
            camera.radius,
            nuevoZoom,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            null,
            onEnd
        );
    });
}

const girarCamaraA = function girarCamaraHacia(camera, grados, duracion = 1000) {
    return new Promise((resolve) => {
        // 1. Calcular ángulo horizontal (alpha)
        const alphaInicial = camera.alpha;
        const alphaFinal = alphaInicial + BABYLON.Tools.ToRadians(grados);

        // 2. Crear animación
        BABYLON.Animation.CreateAndStartAnimation(
            "giroAlpha", 
            camera, 
            "alpha",
            60, 
            duracion / 16.67,
            alphaInicial, 
            alphaFinal,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            null,
            () => {
                // Se llama al terminar la animación
                resolve();
            }
        );
    });
};

const girarCamaraBetaA = function girarCamaraHacia(camera, grados, duracion = 1000) {
    return new Promise((resolve) => {
        // 1. Calcular ángulo horizontal (alpha)
        const betaInicial = camera.beta;
        const betaFinal = betaInicial + BABYLON.Tools.ToRadians(grados);

        // 2. Crear animación
        BABYLON.Animation.CreateAndStartAnimation(
            "giroBeta", 
            camera, 
            "beta",
            60, 
            duracion / 16.67,
            betaInicial, 
            betaFinal,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
            null,
            () => {
                // Se llama al terminar la animación
                resolve();
            }
        );
    });
};

const ActionButton1 = function(camera, scene){
    camera.alpha = -3.1397002203320157;
    camera.beta = 1.530596413098753;
    girarCamaraA(camera, 180, 1500).then(() => {
        moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 270), 10, 1500).then(() =>{
            girarCamaraA(camera, 90, 1500).then(() => {
                moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 130), 10, 1500).then(() => {
                    girarCamaraA(camera, 180, 1500).then(() => {
                        const totem1 = ImageObject(scene, "images/ProcesosNegocios/TOTEM NARANJA.png", new BABYLON.Vector3(-28.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                        const titulo1 = SvgObject(scene, new BABYLON.Vector3(-33.8,5,169), "images/ProcesosNegocios/TEXTO PROCESOS DE NEGOCIO.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                        const totem2 = ImageObject(scene, "images/ECommerce/TOMEM MORADO.png", new BABYLON.Vector3(-8.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                        const titulo2 = SvgObject(scene, new BABYLON.Vector3(-13.8,5,169), "images/ECommerce/TEXTO ECOMMERCE Y SEGURIDAD.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                        const totem3 = ImageObject(scene, "images/OperacionesComerciales/TotemAzul.png", new BABYLON.Vector3(12.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                        const titulo3 = SvgObject(scene, new BABYLON.Vector3(7.8,5,169), "images/OperacionesComerciales/Totem/TEXTO OPERACIONES COMERCIALES.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                        
                        allTotemOptions.push(totem1);
                        allTotemOptions.push(totem2);
                        allTotemOptions.push(totem3);

                        allTotemOptions.push(titulo1);
                        allTotemOptions.push(titulo2);
                        allTotemOptions.push(titulo3);

                        ClicTotem1(totem2,scene, allTotemOptions, camera);
                        ClicTotem2(totem1,scene,allTotemOptions,camera);
                        ClicTotem3(totem3,scene,allTotemOptions,camera);

                    })
                })
            })
        })
    });
}

const ActionButton2 = function(camera, scene){
    camera.alpha = -3.164127859714081;
    camera.beta = 1.5021467633298364;
    girarCamaraA(camera, 180, 1500).then(() => {
        moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 470), 10, 1500).then(() =>{
            girarCamaraA(camera, 90, 1500).then(() => {
                moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 130), 10, 1500).then(() => {
                    girarCamaraA(camera, 180, 1500).then(() => {
                        const totem1 = ImageObject(scene, "images/ProcesosNegocios/TOTEM NARANJA.png", new BABYLON.Vector3(-28.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                        const titulo1 = SvgObject(scene, new BABYLON.Vector3(-33.8,5,169), "images/ProcesosNegocios/TEXTO PROCESOS DE NEGOCIO.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                        const totem2 = ImageObject(scene, "images/ECommerce/TOMEM MORADO.png", new BABYLON.Vector3(-8.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                        const titulo2 = SvgObject(scene, new BABYLON.Vector3(-13.8,5,169), "images/ECommerce/TEXTO ECOMMERCE Y SEGURIDAD.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                        const totem3 = ImageObject(scene, "images/OperacionesComerciales/TotemAzul.png", new BABYLON.Vector3(12.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                        const titulo3 = SvgObject(scene, new BABYLON.Vector3(7.8,5,169), "images/OperacionesComerciales/Totem/TEXTO OPERACIONES COMERCIALES.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                        
                        allTotemOptions.push(totem1);
                        allTotemOptions.push(totem2);
                        allTotemOptions.push(totem3);

                        allTotemOptions.push(titulo1);
                        allTotemOptions.push(titulo2);
                        allTotemOptions.push(titulo3);

                        ClicTotem1(totem2,scene, allTotemOptions, camera);
                        ClicTotem2(totem1,scene,allTotemOptions,camera);
                        ClicTotem3(totem3,scene,allTotemOptions,camera);

                    })
                })
            })
        })
    });
}

const ActionButton3 = function(camera, scene){
    camera.alpha = -1.5681009893065228;
    camera.beta = 1.5903277102595965;
    girarCamaraA(camera, 180, 1500).then(() => {
        moverCamaraAZoom(camera, new BABYLON.Vector3(-10, 5, 130), 10, 1500).then(() => {
            girarCamaraA(camera, 180, 1500).then(() => {
                const totem1 = ImageObject(scene, "images/ProcesosNegocios/TOTEM NARANJA.png", new BABYLON.Vector3(-28.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                const titulo1 = SvgObject(scene, new BABYLON.Vector3(-33.8,5,169), "images/ProcesosNegocios/TEXTO PROCESOS DE NEGOCIO.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                const totem2 = ImageObject(scene, "images/ECommerce/TOMEM MORADO.png", new BABYLON.Vector3(-8.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                const titulo2 = SvgObject(scene, new BABYLON.Vector3(-13.8,5,169), "images/ECommerce/TEXTO ECOMMERCE Y SEGURIDAD.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                const totem3 = ImageObject(scene, "images/OperacionesComerciales/TotemAzul.png", new BABYLON.Vector3(12.8,-1.5,170), 1, new BABYLON.Vector3(0, 0, 0), { width: 15, height: 30});
                const titulo3 = SvgObject(scene, new BABYLON.Vector3(7.8,5,169), "images/OperacionesComerciales/Totem/TEXTO OPERACIONES COMERCIALES.svg", { width: 10, height: 3.5 }, new BABYLON.Vector3(0, 0, -Math.PI/2));
                
                allTotemOptions.push(totem1);
                allTotemOptions.push(totem2);
                allTotemOptions.push(totem3);

                allTotemOptions.push(titulo1);
                allTotemOptions.push(titulo2);
                allTotemOptions.push(titulo3);

                ClicTotem1(totem2,scene, allTotemOptions, camera);
                ClicTotem2(totem1,scene,allTotemOptions,camera);
                ClicTotem3(totem3,scene,allTotemOptions,camera);

            })
        })
    })
}


