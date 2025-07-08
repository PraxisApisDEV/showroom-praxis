
var createStand = async function(product,scene) {

    // ---------- GUI 
    var advancedTexture1 = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
    
    // Seccion Escena Detalle de Producto:
    var grid = getGrid();
    advancedTexture1.addControl(grid);

    // Seccion titulo y descripcion    
    var stackPanel = getStackPanel();
    //advancedTexture1.addControl(stackPanel)
    
    var rTitle = "";
    if(product.info.title!="") {        
        rTitle = createInfoTitle(product.info.title);
        grid.addControl(rTitle,0,1);
    }
    var rDescrip = "";
    if(product.info.description!="") {                         
        rDescrip = createInfoDescription(product.info.description);
    }
    //stackPanel.addControl(rTitle);
     
    stackPanel.addControl(rDescrip); 

    // Seccion Imagen fondo
    var stackPanel2 = getStackPanel();
    var image = "";
    if(product.info.image!=""){
        console.log("image: ",product.info.image);
        image = getImage("imagen",product.info.image,"350px","350px","50px","1px");  
        stackPanel2.addControl(image);      
    }

    // Seccion video
    var videoProducto = "";
    if(product.video.url!=""){ 
        //videoProducto = createVideo(product.video.url,scene);
    }

    // Seccion One Page
    var imageQR ="";
    if(product.pdf.qrImage!="") {
        imageQR = createOnePage("qr",product.pdf.qrImage,"150px","150px","1px","1px");
    }

    //Main menu button
    var button1 = createBMenu("button1","Home =)(=",'100px',"white","gray", "20px");    
    advancedTexture1.addControl(button1);

    button1.onPointerUpObservable.add(function () { 
        grid.removeControl(rTitle);                     
        grid.removeControl(stackPanel); 
        if(image!=""){
            grid.removeControl(stackPanel2); 
        }
        if(videoProducto!=""){
            //remove Video
        }
        if(imageQR!=""){
            grid.removeControl(imageQR);                   
        }
        
        advancedTexture1.removeControl(grid);
        advancedTexture1.dispose();        
        //console.log("regresar a Home");                            
    });

    var button2 = createBMenu("button2","Info",'100px',"black","white", "120px"); 
    advancedTexture1.addControl(button2);

    button2.onPointerUpObservable.add(function () { 
        console.log("Boton Info");
        if(videoProducto!=""){        
            // Remove Video  
        }
        if(imageQR!=""){     
            grid.removeControl(imageQR);
        }
        
        grid.addControl(stackPanel, 1, 1); 
        if(image!=""){         
            grid.addControl(stackPanel2,1,2);
        } 
        
        
    });

    var button3 = createBMenu("button3","Video",'100px',"black","white", "220px"); 
    advancedTexture1.addControl(button3);

    button3.onPointerUpObservable.add(function () { 
        console.log("Boton Video");
        console.log("JSON- video.url:", product.video.url);
        console.info("IHM");
        
        grid.removeControl(stackPanel);
        if(image!=""){
            grid.removeControl(stackPanel2);        
        }
        if(imageQR!=""){
            grid.removeControl(imageQR);
        }
        if(videoProducto!=""){
            //console
            //createVideo(videoProducto,scene)
        }
                                  
    });

    var button4 = createBMenu("button4"," One Page ",'110px',"black","white", "320px");
    advancedTexture1.addControl(button4);

    button4.onPointerUpObservable.add(function () { 
        console.log("Boton One Page -");
         console.log("JSON- pdf.qrImage:", product.pdf.qrImage);
         
        grid.removeControl(stackPanel); 
        if(image!=""){
            grid.removeControl(stackPanel2);
        }
        if(videoProducto!=""){
            //remove Video
        }
        if(imageQR!=""){
            grid.addControl(imageQR,1,1);
        }
                                  
    });

    var button5 = createBMenu("button5"," Me interesa ",'110px',"black","white", "430px");
    advancedTexture1.addControl(button5);

    button5.onPointerUpObservable.add(function () { 
        console.log("Boton Me interesa -");
         console.log("JSON- form.url:", product.form.url);
                
        grid.removeControl(stackPanel); 
        if(image!=""){
            grid.removeControl(stackPanel2);
        }
        if(videoProducto!=""){
            //remove Video
        }
        if(imageQR!=""){
            grid.removeControl(imageQR);        
        }

        if(product.form.url!=""){
            window.open(product.form.url);
        }                 
    });



}

// INI - GUI Babylon JS - controls
function createBMenu(name,title,width,color,background,left){
    var button = BABYLON.GUI.Button.CreateSimpleButton(name, title);
    button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    button.width = width;
    button.height = "40px";
    button.color = color;
    button.background = background;
    button.cornerRadius = "10";
    button.paddingBottom = "10px";
    button.top = "20px";
    button.left = left;
    return button;
}

function getGrid(){
    var grid = new BABYLON.GUI.Grid("grid");

    grid.addColumnDefinition(220, true);
    grid.addColumnDefinition(650, true);
    grid.addColumnDefinition(300, true);
    grid.addRowDefinition(150,true);
    grid.addRowDefinition(400,true);
    grid.background="gray";
    //grid.AllowAlphaInheritance = true;
    //grid.alpha = 0.5;
    return grid;
}

function getStackPanel(){
    var panel = new BABYLON.GUI.StackPanel("panel");
    panel.width = "850px"
    panel.height = "600px"
    panel.top = "50px"
    panel.left = "20px" 
    panel.isVertical=true;
    //panel.AllowAlphaInheritance = false;
    //panel.alpha = 1;
    return panel;
}

function getRectWhitText(nameR,background,color,width,height,text,fontSize,cornerRadius) {

    var rectangle = new BABYLON.GUI.Rectangle(nameR);
    rectangle.background = background;
    rectangle.color = color;
    rectangle.width = width;
    rectangle.height = height;  //  "525px"
    rectangle.thickness= 0;   
    rectangle.cornerRadius = cornerRadius;
    //rectangle.paddingBottom = "10px";
    rectangle.paddingLeft = "10px";
    //rectangle.alpha = 0.5;
    rectangle.top = "20px"
    //rectangle.left = "0px"

    var title = new BABYLON.GUI.TextBlock("title");    
    title.fontFamily = "Helvetica";
    title.textWrapping = true;
    title.resizeToFit = true;   
    title.text = text;
    title.color = "black";
    title.fontSize = fontSize;
    title.paddingBottom = "10px";
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
    return getRectWhitText("rect", "white", "black", "300px", "30px",title, "25px",0);    
}

function createInfoDescription(descrip){
    // 800px 300px
    return getRectWhitText("rect2", "rgb(233,233,233)", "rgb(233,233,233)",  "600px", "350px",descrip, "18px",10); 
}

function createVideo (url,scene) {

        console.log("INI crea video");
        var planeOpts = {
			//height: 5.4762, 
            height: 7.4762, 
			//width: 7.3967, 
            width: 11.3967, 
			sideOrientation: BABYLON.Mesh.DOUBLESIDE
	    };

        var planeV = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
	    var vidPos = (new BABYLON.Vector3(-10,2,-2));
        //var vidPos = (new BABYLON.Vector3(-12,2.5,0.1))
        //var vidPos = (new BABYLON.Vector3(-4,0,-0.5))
        planeV.position = vidPos;

        var videoMat = new BABYLON.StandardMaterial("m", scene);
        //"resource/video/demo-video.mp4"
        var videoVidTex = new BABYLON.VideoTexture("vidtex",url, scene);
        videoVidTex.video.pause();
        videoVidTex.video.muted = true;

	    videoMat.diffuseTexture = videoVidTex;
	    videoMat.roughness = 1;
	    videoMat.emissiveColor = new BABYLON.Color3.White();
	    planeV.material = videoMat;

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

        console.log("FIN crea video");

        return planeV;

     }

     

     
function createOnePage(name,url,width,height,top,left){
    //"resource/qr/CMPay-onePage.png"
    var imageQR = new BABYLON.GUI.Image(name, "resource/qr/CMPay-onePage.png");
    imageQR.width = width;
    imageQR.height = height;
    imageQR.top = top;
    imageQR.left = left
    return imageQR;  
}

function createForm(){

}