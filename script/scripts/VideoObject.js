const AddVideo = function(scene, name, size, position = new BABYLON.Vector3(0,0,0), rotation = new BABYLON.Vector3(0, 0, 0)) {        
    
    let planeV = BABYLON.MeshBuilder.CreatePlane("plane", size, scene);
    //var vidPos = (new BABYLON.Vector3(-12,2.5,0.1))
    //var vidPos = (new BABYLON.Vector3(-4,0,-0.5))
    planeV.position = position;

    let videoMat = new BABYLON.StandardMaterial("m", scene);
    
    let url = "./resource/video/"+ name;

    //videoVidTex = new BABYLON.VideoTexture("vidtex",url, scene);
    let videoVidTex = new BABYLON.VideoTexture(
        "vidtex",
        url,
        scene,
        false,
        false,
        BABYLON.VideoTexture.TRILINEAR_SAMPLINGMODE,
        {
            autoPlay:true,
            loop: true,
            muted: true
        }
    );
    //videoVidTex.video.pause();
    //videoVidTex.video.muted = true;
    let video = videoVidTex.video;
    videoMat.diffuseTexture = videoVidTex;
    videoMat.roughness = 1;
    //videoMat.emissiveColor = new BABYLON.Color3.White();
    planeV.material = videoMat;
    planeV.rotation = rotation;
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

    console.log("FIN crea video "+ video);

    return { plane: planeV, video: video };

 }