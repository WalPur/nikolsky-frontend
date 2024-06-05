import React, { useEffect, useRef } from "react";
import * as GUI from "@babylonjs/gui";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

const BabylonScene = ({ modelsName = "horse.glb" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engine = new BABYLON.Engine(canvasRef.current, true);
      const scene = new BABYLON.Scene(engine);
      const camera = new BABYLON.ArcRotateCamera(
        "Camera",
        Math.PI / 2,
        Math.PI / 2,
        2,
        new BABYLON.Vector3(0, 0, 5),
        scene
      );
      camera.attachControl(canvasRef.current, true);

      const light = new BABYLON.HemisphericLight(
        "light1",
        new BABYLON.Vector3(1, 1, 0),
        scene
      );
      light.intensity = 0.7;

      const ground = new BABYLON.MeshBuilder.CreateGround("ground", {
        height: 100,
        width: 100,
        subdivisions: 1,
      });

      const groundMaterial = new BABYLON.StandardMaterial(
        "groundMaterial",
        scene
      );
      groundMaterial.diffuseTexture = new BABYLON.Texture(
        "/textures/ground.png",
        scene
      );
      ground.material = groundMaterial;

      const skybox = BABYLON.MeshBuilder.CreateBox(
        "skyBox",
        { size: 1000.0 },
        scene
      );
      const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      skybox.material = skyboxMaterial;
      skybox.infiniteDistance = true;
      let skyBoxLink = "/textures/skybox/skybox";
      let frontTextureExt = "_pz.png";
      let backTextureExt = "_nz.png";
      let leftTextureExt = "_px.png";
      let rightTextureExt = "_nx.png";
      let upTextureExt = "_py.png";
      let downTextureExt = "_ny.png";

      let extensions = [
        leftTextureExt,
        upTextureExt,
        frontTextureExt,
        rightTextureExt,
        downTextureExt,
        backTextureExt,
      ];

      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        skyBoxLink,
        scene,
        extensions,
        false
      );
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE;

      const guiTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

      const panel = new GUI.StackPanel();
      panel.width = "220px";
      panel.fontSize = "14px";
      panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      guiTexture.addControl(panel);
      const models = ["bull.glb", "skull.glb", "jaw.glb"];

      BABYLON.SceneLoader.ImportMesh(
        "",
        "/objects/",
        modelsName,
        scene,
        function (meshes) {
          const model = meshes[0];
          models.scaling = new BABYLON.Vector3(0.05, 0.05, 0.05);
        }
      );

      engine.runRenderLoop(() => {
        scene.render();
      });

      const resize = () => {
        engine.resize();
      };

      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
        scene.dispose();
        engine.dispose();
      };
    }
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />;
};

export default BabylonScene;
