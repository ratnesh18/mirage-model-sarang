import React, { useEffect } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//import GLTFExporter from 'three-gltf-exporter';
import {GLTFExporter} from '../GLTFExporter.js'
import axios from 'axios';

export default function Index(props) {

  const scene = new THREE.Scene();
    useEffect(() => {
      const canvas = document.querySelector(".webgl")
       
        const loader = new GLTFLoader();
        var loader1 = new THREE.TextureLoader();
   
        loader1.setCrossOrigin("*");
      
       var face_texture = loader1.load(props.img);
       face_texture.flipY=false
        
       //torso start
    
        var torso_texture1 = loader1.load("glass/robot 003_Torso_BaseMap.png");
        torso_texture1.flipY=false
        var torso_texture2 = loader1.load("glass/robot 003_Torso_MaskMap.png");
        torso_texture2.flipY=false
        var torso_texture3 = loader1.load("glass/robot 003_Torso_Normal.png");
        torso_texture3.flipY=false
        //torso end
    
        //glass
        var glass_texture1 = loader1.load("glass/robot 003_glass_BaseMap.png");
        glass_texture1.flipY=false
        var glass_texture2 = loader1.load("glass/robot 003_glass_MaskMap.png");
        glass_texture2.flipY=false
        var glass_texture3 = loader1.load("glass/robot 003_glass_Normal.png");
        glass_texture3.flipY=false
        //--
    
        //head
        var head_texture1 = loader1.load("glass/robot 003_head_2_BaseMap.png");
        head_texture1.flipY=false
        var head_texture2 = loader1.load("glass/robot 003_head_2_MaskMap.png");
        head_texture2.flipY=false
        var head_texture3 = loader1.load("glass/robot 003_head_2_Normal.png");
        head_texture3.flipY=false
        
        //-
    
        //leftHand
        var leftHand_texture1 = loader1.load("glass/robot 003_Left_hand_BaseMap.png");
        leftHand_texture1.flipY=false
        var leftHand_texture2 = loader1.load("glass/robot 003_Left_hand_MaskMap.png");
        leftHand_texture2.flipY=false
        var leftHand_texture3 = loader1.load("glass/robot 003_Left_hand_Normal.png");
        leftHand_texture3.flipY=false
    
        //-
        //rightHand
        var rightHand_texture1 = loader1.load("glass/robot 003_right_hand_BaseMap.png");
        rightHand_texture1.flipY=false
        var rightHand_texture2 = loader1.load("glass/robot 003_right_hand_MaskMap.png");
        rightHand_texture2.flipY=false
        var rightHand_texture3 = loader1.load("glass/robot 003_right_hand_Normal.png");
        rightHand_texture3.flipY=false
    
        //-
    
         //rightHand
         var rightLeg_texture1 = loader1.load("glass/robot 003_Right_leg_BaseMap.png");
         rightLeg_texture1.flipY=false
         var rightLeg_texture2 = loader1.load("glass/robot 003_Right_leg_MaskMap.png");
         rightLeg_texture2.flipY=false
         var rightLeg_texture3 = loader1.load("glass/robot 003_Right_leg_Normal.png");
         rightLeg_texture3.flipY=false
     
         //-
         //rightHand
         var leftLeg_texture1 = loader1.load("glass/robot 003_Left_leg_BaseMap.png");
         leftLeg_texture1.flipY=false
         var leftLeg_texture2 = loader1.load("glass/robot 003_Left_leg_MaskMap.png");
         leftLeg_texture2.flipY=false
         var leftLeg_texture3 = loader1.load("glass/robot 003_Left_leg_Normal.png");
         leftLeg_texture3.flipY=false
     
         //-
    
         //rightHand
         var matMr_texture1 = loader1.load("glass/robot 003_robot_mat_mr_BaseMap.png");
         matMr_texture1.flipY=false
         var matMr_texture2 = loader1.load("glass/robot 003_robot_mat_mr_MaskMap.png");
         matMr_texture2.flipY=false
         var matMr_texture3 = loader1.load("glass/robot 003_robot_mat_mr_Normal.png");
         matMr_texture3.flipY=false
     
         //-
    

         const torsoMaterial = new THREE.MeshStandardMaterial( {
          metalnessMap:torso_texture2,normalMap:torso_texture3,map:torso_texture1
      } );
      const headMaterial = new THREE.MeshStandardMaterial( {
          metalnessMap:head_texture2,normalMap:head_texture3,map:head_texture1
      } );
      
      const leftHandMaterial = new THREE.MeshStandardMaterial( {
          metalnessMap:leftHand_texture2,normalMap:leftHand_texture3,map:leftHand_texture1
      } );
      const rightHandMaterial = new THREE.MeshStandardMaterial( {
          metalnessMap:rightHand_texture2,normalMap:rightHand_texture3,map:rightHand_texture1
      } );
      
      const rightLegMaterial = new THREE.MeshStandardMaterial( { 
          metalnessMap:rightLeg_texture2,normalMap:rightLeg_texture3,map:rightLeg_texture1
      } );
      
      const LeftLegMaterial = new THREE.MeshStandardMaterial( {
          metalnessMap:leftLeg_texture2,normalMap:leftLeg_texture3,map:leftLeg_texture1
      } );
      
      const matMrLegMaterial = new THREE.MeshStandardMaterial( {
          metalnessMap: matMr_texture2,normalMap: matMr_texture3,map: matMr_texture1
      } );
      
      const glass1Material =new THREE.MeshBasicMaterial({
          metalnessMap:glass_texture2,normalMap:glass_texture3,map:glass_texture1,
          transparent: true,
          opacity: 0.5
      });
      const faceMaterial = new THREE.MeshStandardMaterial( {
          
          map:face_texture
      } );
      


        loader.load(
          // resource URL
          'glb/modelSquarFace.glb',
          // called when the resource is loaded 
          function ( glb ) {
        
                const root = glb.scene;
            
              // root.scale.set(0.007,0.007,0.007)
               root.scale.set(1.9,1.8,1.9)
               root.position.set( 0, -1.9, 0 );
             //  root.rotation.x = -0.3;
               const metaModel = glb.scene.children[ 0 ];
                
                //	carModel.getObjectByName( 'Body_0' ).material = bodyMaterial;
                        metaModel.getObjectByName( 'Robo_Torso' ).material =torsoMaterial;
                          //  carModel.getObjectByName( 'Robo_Glass' ).material =glassMaterial;
                          metaModel.getObjectByName( 'Robo_Glass' ).material =glass1Material;
                          metaModel.getObjectByName( 'Face_Plane' ).material =faceMaterial;
                          metaModel.getObjectByName( 'head_frame_1' ).material =headMaterial;
                          metaModel.getObjectByName( 'Robo_Left_Hand' ).material =leftHandMaterial;
                          metaModel.getObjectByName( 'Robo_Right_Hand' ).material =rightHandMaterial;
                          metaModel.getObjectByName( 'Robo_Right_Leg' ).material =rightLegMaterial;
                          metaModel.getObjectByName( 'Robo_Left_Leg' ).material =LeftLegMaterial;
                          metaModel.getObjectByName( 'Robo_joints' ).material =matMrLegMaterial;
                           // carModel.getObjectByName( 'Robo_Glass' ).material =faceMaterial;
                           
                           
                           // carModel.getObjectByName( 'Robo_Right_Leg.001' ).material = rightHandMaterial;
                         
                       //  carModel.getObjectByName( 'Glass_low' ).material = faceMaterial;
                       //  carModel.getObjectByName( 'Robo_L_Hand' ).material = leftHandMaterial;
                       //  carModel.getObjectByName( 'Robo_R_Hand' ).material = rightHandMaterial;
            scene.add( root );
        
            // gltf.animations; // Array<THREE.AnimationClip>
            // gltf.scene; // THREE.Group
            // gltf.scenes; // Array<THREE.Group>
            // gltf.cameras; // Array<THREE.Camera>
            // gltf.asset; // Object
        
          },
          // called while loading is progressing
          function ( xhr ) {
        
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
          },
          // called when loading has errors
          function ( error ) {
        
            console.log( 'An error happened' );
        
          }
        );


        const detailsColorInput = document.getElementById( 'body-color' );
				detailsColorInput.addEventListener( 'input', function () {

					torsoMaterial.color.set( this.value );
          headMaterial.color.set( this.value );
          leftHandMaterial.color.set( this.value );
          rightHandMaterial.color.set( this.value );
          rightLegMaterial.color.set( this.value );
          LeftLegMaterial.color.set( this.value );
          matMrLegMaterial.color.set( this.value );

				} );

        const light= new THREE.DirectionalLight(0xffffff,1)
        light.position.set(2,9,19)
        scene.add(light)
       // scene.background = new THREE.Color( 0x000000, 0 );

        var ambient = new THREE.AmbientLight( 0x555555 );
        scene.add( ambient );


        
        const sizes = {
          width : window.innerWidth,
          height : window.innerHeight
      }
      
      const camera = new THREE.PerspectiveCamera(85,sizes.width/sizes.height,0.1,100)
      camera.position.set(0,.5,2)
      
      scene.add(camera);
      
      const renderer = new THREE.WebGL1Renderer({
          canvas:canvas,
          alpha :true
      })
      renderer.setClearColor( 0x000000, 0 );
      renderer.setSize(sizes.width,sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
      renderer.shadowMap.enabled = true
      renderer.gameOutput= true
      
      // controls = new OrbitControls( camera, container );
      // 				controls.enableDamping = true;
      // 				controls.maxDistance = 9;
      // 				controls.target.set( 0, 0.5, 0 );
      // 				controls.update();
      
      const control = new OrbitControls(camera,canvas)
      control.update()
      control.enableDamping=true;
      
      function animate() {
         // console.log("nn")
          requestAnimationFrame(animate)
          renderer.render(scene,camera)
      }
      
      animate()
      
              //     const bodyColorInput = document.getElementById( 'glass-color' );
              // bodyColorInput.addEventListener( 'input', function () { 
      
              //   bodyMaterial.color.set( this.value );
      
              // } );
    
      return () => {
       
      }
    }, [])
    


//     const btn = document.getElementById("download-glb")

// btn.addEventListener("click",download)

function download() {
  console.log("sjv")
    const exporter = new GLTFExporter()
    exporter.parse(
        scene,
        function(result){
           saveArrayBuffer(result,"ThreejsScene.glb")
        },
        {
            binary:true
        }
    )
}

function saveArrayBuffer(buffer,filename) {
    save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
    
}
var link = document.createElement('a')
document.body.appendChild(link)
function save(blob, filename) {
    link.href = URL.createObjectURL(blob);    
    link.download = filename;
   // link.click(); // This step makes sure your glb file gets downloaded
    //sendFileToBackend(blob, filename)
}

function sendFileToBackend(blob, filename){
  const endpoint = "YOUR_BACKEND_URL_HERE";
  const formData = new FormData();

  let sceneFile= new File([blob], "ThreejsScene.glb");
  console.log(sceneFile)
  formData.append("file", sceneFile);
  formData.append("user_id","abc@gmail.com")
  const options = {
      method:'POST',
      mode: 'no-cors',
      body: formData,
  }
  axios.post("https://19qgdzdmqe.execute-api.ap-south-1.amazonaws.com/api/selfie",formData).then((response)=>{
    console.log("Saving selfie",response)
   // window.location.href="/thank-you"
})
.catch((error)=>{
  console.log("error selfie",error)
 // window.location.href="/thank-you"
})

}


  return (
    <div>
      <div className='container'>
      <canvas className="webgl" ></canvas>
      </div>
      <div className='row'>
        <div className='col-4  text-center align-self-center'>
      <a href onClick={()=>props.modelOpener(false)}><img src='img/prev.png' className='img-fluid h50' alt='prev'/></a>
      </div>
      <div className='col-4 text-center align-self-center'>
        {/* <button id="download-glb" onClick={()=>download()}>Download</button> */}
        <span class="colorPicker"><input id="body-color" type="color" value="#ff0000"></input></span>
    </div>

      <div className='col-4  text-center align-self-center'>
      <img src='img/next.png' className='img-fluid  h50' alt='Next'/>
      </div>
      
      </div>
    </div>
  )
}
