const loadTree1 = async (scene, posicionX) => {
    const result = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "./resource/models/",
        "jabami_anime_tree_v1.glb",
        scene
    );

    // Opcional: ajustar posición, rotación y escala
    const building = result.meshes[0];
    building.position = new BABYLON.Vector3(posicionX, 0, -8); // posición en el mundo
    building.scaling = new BABYLON.Vector3(1.1, 1.1, 1.1);    // escala normal
    building.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0); // rotado 180°

    return building;
};