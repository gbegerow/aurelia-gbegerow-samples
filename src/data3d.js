import {inject} from 'aurelia-framework';

// jspm install handjs=github:deltakosh/handjs
import handjs from 'handjs';

//jspm install babylonjs=github:BabylonJS/babylon.js
import  BABYLON  from "babylonjs/dist/babylon.2.2.js";
//import BABYLON  from 'babylonjs';

export class Data3D { 
	canvas;
	
	
	constructor() {
		//this.canvas = element;
		// we are a template so element will be body :-(
		// use a ref="canvas" attribute in template to init property
	}
	
	attached() {
        //debugger;
		this.startBabylonJS(BABYLON);

	}
	
	startBabylonJS(BABYLON) { 
		//debugger;
		if (BABYLON.Engine.isSupported()) {
			var engine = new BABYLON.Engine(this.canvas, true)
			
			var scene = new BABYLON.Scene(engine);
			
			var cam = new BABYLON.FreeCamera("freecam", new BABYLON.Vector3(0, 2, -10), scene);
			cam.setTarget(BABYLON.Vector3.Zero());
			cam.attachControl(this.canvas);
			
			var cube = BABYLON.Mesh.CreateBox("cube", 3, scene);
			
			var material = new BABYLON.StandardMaterial("mat", scene);
			cube.material = material;
			
			//material.diffuseColor = BABYLON.Color3.Red();
			material.diffuseTexture = new BABYLON.Texture("images/main-logo.png", scene);
			
			var pLight = new BABYLON.PointLight("pLight", new BABYLON.Vector3(5, 10, -5), scene);
			//pLight.diffuse = BABYLON.Color3.Red();
			
			var hLight = new BABYLON.HemisphericLight("hLight", BABYLON.Vector3.Zero(), scene);
			
			// Lesson learned: let would not be visible inside lambda function, var is (of course) 
			engine.runRenderLoop(() => {
				// TODO bind fps and Color and Rotation via aurelia 
				
				engine.clear(new BABYLON.Color3(0.35, 0.2, 0.8), true);
				
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				
				scene.render();
			});
		}
	}
}