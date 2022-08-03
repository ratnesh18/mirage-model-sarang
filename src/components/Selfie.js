import React, { useEffect, useState } from 'react'

export default function Selfie(props) {

    const[openCamera,setOpenCamera]=useState(true)

    useEffect(()=>{
       
        
        startCamera()
        
         
      },[])
     
      function startCamera() {
        setOpenCamera(true)
        const canvas = window.canvas = document.querySelector('canvas');
       
          const context = canvas.getContext('2d');

          context.clearRect(0, 0, canvas.width, canvas.height);
          canvas.width=0
          canvas.height=0
        setTimeout(() => {
          const video = document.querySelector('video');
        const constraints = {
          audio: false,
          video: true
        };
        navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
          window.stream = stream; // make stream available to browser console
          video.srcObject = stream;
          
        }).catch((error)=>{
          console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
        });
        }, 100);

        
      }

      
      function getImage(params) {
        const video = document.querySelector('video');
        const canvas = window.canvas = document.querySelector('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
       
          console.log("hsdbv")
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          var ctx =canvas.getContext('2d');
          console.log(canvas.width,canvas.height)
         // ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(video, 180, 100, 250, 300, 0, 0, 620, 500);
         
          
         
          // now get the steam 
          var  stream = video.srcObject;
          // now get all tracks
          var tracks = stream.getTracks();
          // now close each track by having forEach loop
          tracks.forEach(function(track) {
            // stopping every track
            track.stop();
          });
          // assign null to srcObject of video
          video.srcObject = null;

          setOpenCamera(false)
        
          ctx.fillStyle="#FF0000";
        ctx.fillRect(10,10,30,30);
        var url = canvas.toDataURL();
          props.img(url);
        

        
      }

      
      
      function takeImage() {
        const canvas = window.canvas = document.querySelector('canvas');
        var ctx=canvas.getContext("2d");
        //draw a red box
        ctx.fillStyle="#FF0000";
        ctx.fillRect(10,10,30,30);
        var url = canvas.toDataURL();
          props.img(url);
        }

      return (
        <div className="App">
         <div className="container">
   <div className='col-sm-5 m-auto'>
   
    {openCamera?(<> 
    <div className='vidarea'>
    <video playsInline autoPlay className='mt-5'>
            <track src="" kind="captions" srclang="en" label="english_captions"/>
        </video>
    </div>
        <div className='mt-5 selficover'>
        <img src='img/videof.png' alt='' className='img-fluid'/>

        </div>
       
        <div className='col-6 m-auto'> <button id="snapshot" className="btn btn-mirage w-100 mt-4" onClick={()=>getImage()}>Take snapshot</button></div></>
        ): ""
        }
        <canvas className='customheight mt-5'></canvas>
        {
          !openCamera?(<>
          <div className='d-flex justify-content-between mt-4 row'>
            <div className='col-4'><button id="next" className="btn btn-mirage w-100" onClick={()=>startCamera()}>Retake</button></div>
            <div className='col-4'> <button id="next" className="btn btn-mirage  w-100" onClick={()=>takeImage()}>Next</button></div>
          </div>
          
         
          </>):""
        }
        </div>
  </div>
        </div>
      );

  
}
