
const loadBuildingSecurity = async (scene) => {
    const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "art_gallery.glb",
        scene
    );

    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = new BABYLON.Vector3(0, -24, 0); // posición en el mundo
    building.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);    // escala normal
    building.rotation = new BABYLON.Vector3(0, Math.PI/2, 0); // rotado 180°

    return building;
};

const loadBuildingComerce = async (scene) => {
    const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "art_gallery.glb", 
        scene
    );

    loadLight(scene).then(building => {
        console.log("Edificio cargado:", building.name);
    });
    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = new BABYLON.Vector3(-10, -20, 150); // posición en el mundo
    building.scaling = new BABYLON.Vector3(28, 28, 28);    // escala normal
    building.rotation = new BABYLON.Vector3(0, Math.PI/2, 0); // rotado 180°

    loadTableBussines(scene).then(building => {
        console.log("Edificio cargado:", building.name); 
    });

    return building;
};

const loadBuildingBussines = async (scene) => {
    /*const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "art_gallery.glb",
        scene
    );

    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = new BABYLON.Vector3(-15, -60, 290); // posición en el mundo
    building.scaling = new BABYLON.Vector3(28, 28, 28);    // escala normal
    building.rotation = new BABYLON.Vector3(0, Math.PI/2, 0); // rotado 180°
     
    return building;*/
    return false;
};

const loadTableBussines = async (scene) => {
    const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "console_table.glb",
        scene
    );

    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = new BABYLON.Vector3(0, 0, 0); // posición en el mundo
    building.scaling = new BABYLON.Vector3(1000, 1000, 1000);    // escala normal
    building.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0); // rotado 180°

    return building;
};

const loadcity = async (scene) => {
    const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "beautiful_city.glb",
        scene
    );

    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = new BABYLON.Vector3(63, 7, -30); // posición en el mundo
    building.scaling = new BABYLON.Vector3(15, 15, 15);    // escala normal
    building.rotation = new BABYLON.Vector3(0, 0, 0); // rotado 180°

    return building;
};

const loadLight = async (scene) => {
    const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "overhead_light.glb",
        scene
    );

    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = new BABYLON.Vector3(63, 7, -30); // posición en el mundo
    building.scaling = new BABYLON.Vector3(15, 15, 15);    // escala normal
    building.rotation = new BABYLON.Vector3(0, 0, 0); // rotado 180°

    return building;
};
const loadPaint = async (scene, position = new BABYLON.Vector3(0, 6, 0), scaling = new BABYLON.Vector3(0, 0, 0), rotation = new BABYLON.Vector3(0, 0, 0)) => {
    /*const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "painting_shades_of_blue.glb",
        scene
    );

    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = position; // posición en el mundo
    building.scaling = scaling;    // escala normal
    building.rotation = rotation; // rotado 180°
*/
    return false;//building;
};

