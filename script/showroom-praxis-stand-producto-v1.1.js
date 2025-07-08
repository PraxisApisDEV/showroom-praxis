var productoSelec = "";
var planeV = "";
var videoMat = "";
var videoVidTex = "";
var createStand = async function(category,scene) {

    if (category.productos.length>=0){
        productoSelec = category.productos[0];   // por default el primero
    }
    // ---------- GUI 
    var advancedTexture1 = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
    
    // Seccion Escena Detalle de Producto:
    var grid = getGrid();
    advancedTexture1.addControl(grid);

    // Seccion Menu Lateral    
    var stackPanel1 = getStackPanel("panel1",true);    

    // Seccion titulo y descripcion    
    var stackPanel2 = getStackPanel("panel2",true);    
    
    // Seccion video y qr    
    var stackPanel3 = getStackPanel("panel3",true);    

    // Seccion QR
    var stackPanel4 = getStackPanel("panel4",false);
    
    // INI - Seccion Menu Lateral - add Controles
    grid.addControl(stackPanel1, 0, 0);

        // Home button
        var buttonH = createBMenu("buttonH","Home",'100px',"white","gray", "20px",null);            
        stackPanel1.addControl(buttonH);

        buttonH.onPointerUpObservable.add(function () {         
            deteleDetalleProd(); 
            advancedTexture1.removeControl(grid);       
            grid.dispose();
            advancedTexture1.dispose();         
            scene.dispose();
            currentScene = scenes[0];      
            
            console.log("IHM - regresar a Home");
        });

        var rTitleC = ""
        rTitleC = createTitle(category.titulo,"200px","90px","14px");
        stackPanel1.addControl(rTitleC);

        // Seccion Menu Lateral Izquierdo - crear botones
        var button1 = createBMenu("button0",category.productos[0].title,'220px',"rgb(233,233,233)","rgba(11, 161, 248, 0.9)", "18px",0); 
        stackPanel1.addControl(button1);

        //.onValueChangedObservable.add(function(value) {
        //.onPointerUpObservable.add((evt) => {    
        //.onPointerUpObservable.add(function(value) {    
        //.onPointerClickObservable.add((evt) => {           
        button1.onPointerUpObservable.add( (evt) => {    
            console.log("IHM2 utiliza funcion...");
            seleccionProd("button0");
        });

        var button2 = createBMenu("button1",category.productos[1].title,'220px',"rgb(233,233,233)","rgba(21, 96, 140, 0.90)", "20px",1); 
        stackPanel1.addControl(button2);

        button2.onPointerUpObservable.add(function (evt) {
            seleccionProd("button1");
        });
        
         var button3 = createBMenu("button2",category.productos[2].title,'220px',"rgb(233,233,233)","rgba(21, 96, 140, 0.90)", "20px",2); 
        stackPanel1.addControl(button3);

        button3.onPointerUpObservable.add(function (evt) {
            seleccionProd("button2");
        });

    // FIN - Seccion Menu Lateral - add Controles

    // Seccion Descripcion - 
    var videoProducto = "";
    
    
    
    
    function createDetalleProd(){
        console.log("Cargando detalle de:",productoSelec.title);
        var rDescrip = "";

        /*
        var rTitleP = "";
        if(productoSelec.title!="") {        
            rTitleP = createInfoTitle(productoSelec.title);
            //stackPanel2.addControl(rTitleP);
        }*/

        grid.addControl(stackPanel2, 0, 1);


        if(productoSelec.description!="") {                         
            rDescrip = createInfoDescription(productoSelec.description);        
            //stackPanel2.addControl(rDescrip); 
            stackPanel3.addControl(rDescrip); 
            
        }
   
        rVideo = createRecTransp("350px", "300px"); 
        //stackPanel3.addControl(rVideo);
        stackPanel2.addControl(rVideo);

        // Seccion Video y QRs
        grid.addControl(stackPanel3, 0, 2);    

        // Seccion video
        if(productoSelec.videoUrl!=""){ 
            videoProducto = createVideo(productoSelec.videoUrl,scene);
            console.log("videoUrl:",productoSelec.videoUrl);
            videoVidTex.video.play();
            videoVidTex.video.muted = false;
        }


        // Seccion One Page
        var imageQR ="";
        if(productoSelec.onePagePdf!="") {
            imageQR = createOnePage("qr",productoSelec.onePageQr,"100px","100px","10px","20px");
            stackPanel4.addControl(imageQR);
        }

        var formQR ="";
        if(productoSelec.formQr!=""){
            formQR = createForm("formQr",productoSelec.formQr,"100px","130px","8px","70px");
            stackPanel4.addControl(formQR);
        }
    
        stackPanel3.addControl(stackPanel4); 
    }
    function deteleDetalleProd(){
        grid.removeControl(stackPanel2);         
        stackPanel2.dispose();            
        grid.removeControl(stackPanel3);         
        stackPanel3.dispose();
        grid.removeControl(stackPanel4);         
        stackPanel4.dispose();
        if(null!=videoProducto && ""!=videoProducto){                        
            const videoEl = videoVidTex.video;
            videoVidTex.video.pause();                       
            
            videoVidTex.dispose();
            
            while (videoEl.firstChild) {
                videoEl.removeChild(videoEl.lastChild);
            }

            videoEl.src = '';
            videoEl.removeAttribute('src');
            videoEl.load();            
            videoEl.remove();

            videoMat.dispose();
            videoProducto.dispose();            
        }    
    }
    function seleccionProd(nameB){
        console.log("IHM %s.value:%d",nameB,advancedTexture1.getControlByName(nameB).value);
        var selM1 = advancedTexture1.getControlByName(nameB).value;
        if(selM1>=0){
            productoSelec = category.productos[selM1];
            console.log("IHM Producto Seleccionado:",productoSelec.title);
            deteleDetalleProd();
            createDetalleProd();
            var control;
            for(i=0;i<category.productos.length;i++){                
                control = advancedTexture1.getControlByName("button"+i);
                if(control.name==nameB){
                    control.background="rgba(11, 161, 248, 0.9)";
                }else {
                    control.background="rgba(21, 96, 140, 0.90)";
                }
            }
        }        
    }
    createDetalleProd();


}

// INI - GUI Babylon JS - controls
function createBMenu(name,title,width,color,background,left,value){
    var button = BABYLON.GUI.Button.CreateSimpleButton(name, title);
    //button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    //button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    button.width = width;
    button.height = "40px";
    button.color = color;
    button.background = background;
    button.cornerRadius = "10";
    button.paddingBottom = "10px";
    button.top = "20px";
    //button.left = left;
    button.value = value
    return button;
}

function getGrid(){
    var grid = new BABYLON.GUI.Grid("grid");

    grid.addColumnDefinition(260, true);
    grid.addColumnDefinition(650, true);
    grid.addColumnDefinition(350, true);
    grid.addRowDefinition(650,true);
    //grid.addRowDefinition(400,true);
    //grid.background="gray";
    //grid.AllowAlphaInheritance = true;
    //grid.alpha = 0.5;
    return grid;
}

function getStackPanel(name,isV){
    var panel = new BABYLON.GUI.StackPanel(name);
    panel.width = "100%"
    panel.height = "100%"
    panel.top = "20px"
    //panel.left = "20px" 
    panel.isVertical=isV;
    //panel.background = "rgba(21, 96, 140, 0.90)";
    //panel.AllowAlphaInheritance = false;
    //panel.alpha = 1;
    return panel;
}

function getRectWhitText(nameR,background,color,width,height,text,fontSize,cornerRadius,hAlignment) {

    var rectangle = new BABYLON.GUI.Rectangle(nameR);
    rectangle.width = width;
    rectangle.height = height;  //  "525px"
    rectangle.thickness= 0;   
    rectangle.background = background;
    //rectangle.color = color;    
    rectangle.cornerRadius = cornerRadius;
    //rectangle.paddingBottom = "10px";
    //rectangle.paddingLeft = "10px";
    //rectangle.alpha = 0.5;
    //rectangle.top = "20px"    ///IHM
    //rectangle.left = "0px"
    rectangle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    rectangle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    
    

    var title = new BABYLON.GUI.TextBlock("title"); 
    title.text = text;
    title.color = color;
    title.fontSize = fontSize;
    //title.fontSizeInPixels = fontSize;
    title.fontFamily = "Helvetica";
    title.textWrapping = true;  //IHM
    title.resizeToFit = true;   //IHM    
    title.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    title.textHorizontalAlignment = hAlignment;
    title.paddingLeft = "20px";
    //title.paddingLeftInPixels = "10px"
    title.paddingRight = "20px";
    //title.paddingRightInPixels = "10px";

    //title.paddingBottom = "10px";
    //title.AllowAlphaInheritance = false;
    //title.alpha = 1;
    
    rectangle.addControl(title);
    return rectangle;
}

function getImage(name,url,width,height,top,left){
    //"resource/qr/CMPay-onePage.png"
    var image = new BABYLON.GUI.Image(name, url);
    image.width = width;
    image.height = height;
    image.top = top;
    image.left = left
    image.cornerRadius = "10";
    //image.AllowAlphaInheritance = false;
    //image.alpha = 0.8;
    return image;
}
// FIN - GUI Babylon JS - controls


function createInfoTitle(title){
    //onsole.log("JSON* info.title:", prod.info.title);
    //console.log("JSON info.description:", prod.info.description);
    //console.log("JSON* info.image:", prod.info.image);
    //"rgba(21, 96, 140, 0.90)"
    
    return getRectWhitText("rect","rgba(219, 84, 21, 0.9)", "rgb(233,233,233)", "250px", "60px",title, "17px",0,BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER);    
}
                              
function createTitle(title,width,height,fontZ){
    //onsole.log("JSON* info.title:", prod.info.title);
    //console.log("JSON info.description:", prod.info.description);
    //console.log("JSON* info.image:", prod.info.image);
    //"rgba(21, 96, 140, 0.90)"
    
    return getRectWhitText("rect","rgba(219, 84, 21, 0)", "rgb(233,233,233)", width, height,title, fontZ,0,BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER);    
}

function createInfoDescription(descrip){
    // 800px 300px
    //"rgb(233,233,233)"    
    //"rgba(34, 71, 172, 0.80)"
    return getRectWhitText("rect2", "rgba(21, 96, 140, 0.90)", "rgb(233,233,233)",  "350px", "450px",descrip, "16px",10,BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT); 
}

 
function createRecTransp(width,height){
    // 800px 300px
    //"rgb(233,233,233)"    
    //"rgba(34, 71, 172, 0.80)"
    return getRectWhitText("rect2", "rgba(21, 96, 140, 0)", "rgb(233,233,233)", width, height,"", "16px",10,BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT); 
}

function createVideo (url,scene) {
        
        var planeOpts = {
			//height: 5.4762, 
            //height: 7.4762, 
            height: 10.4762, 
			//width: 7.3967, 
            //width: 11.3967, 
            width: 15.3967, 
			sideOrientation: BABYLON.Mesh.DOUBLESIDE
	    };

        planeV = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
	    var vidPos = (new BABYLON.Vector3(-2,7.5,0));
        //var vidPos = (new BABYLON.Vector3(-12,2.5,0.1))
        //var vidPos = (new BABYLON.Vector3(-4,0,-0.5))
        planeV.position = vidPos;

        videoMat = new BABYLON.StandardMaterial("m", scene);
        
        //videoVidTex = new BABYLON.VideoTexture("vidtex",url, scene);
        videoVidTex = new BABYLON.VideoTexture(
            "vidtex",
            url,
            scene,
            false,
            false,
            BABYLON.VideoTexture.TRILINEAR_SAMPLINGMODE,
            {
                autoPlay:true,
                autoUpdateTexture:true,
                poster:"resource/background/logo_praxis.png"
            }
        );
        videoVidTex.video.pause();
        videoVidTex.video.muted = true;

	    videoMat.diffuseTexture = videoVidTex;
	    videoMat.roughness = 1;
	    videoMat.emissiveColor = new BABYLON.Color3.White();
	    planeV.material = videoMat;

        /*
        scene.onPointerObservable.add(function(evt){
                if(evt.pickInfo.pickedMesh === planeV){
                    //console.log("picked");
                        if(videoVidTex.video.paused) {
                            videoVidTex.video.play();
                            videoVidTex.video.muted = false;
                        } else {
                            videoVidTex.video.pause();
                        }
                        console.log(videoVidTex.video.paused?"paused":"playing");
                }
        }, BABYLON.PointerEventTypes.POINTERPICK);
        */

        console.log("FIN crea video");

        return planeV;

     }

     

     
function createOnePage(name,url,width,height,top,left){
    //"resource/qr/CMPay-onePage.png"      
    var imageQR = new BABYLON.GUI.Image(name,url);
    imageQR.width = width;
    imageQR.height = height;
    imageQR.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    imageQR.top = top;
    imageQR.left = left
    return imageQR;  
}

function createForm(name,url,width,height,top,left){
    // "resource/qr/CMPay-onePage.png"
     var imageQR = new BABYLON.GUI.Image(name, url);
    imageQR.width = width;
    imageQR.height = height;
    imageQR.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    imageQR.top = top;
    imageQR.left = left
    return imageQR; 
}