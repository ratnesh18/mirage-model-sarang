import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import ImageCropper from './ImageCroper';
import ModelCreater from './3DModel/ModelCreater';
import Selfie from './Selfie';

export default function ImageEditor() {

    useEffect(()=>{
        $("input[type='image']").click(function() {
            $("input[id='upload-pic']").click();
            });
    },[])

    const [openModel,setOpenModel]=useState(0)
    const [imageToCrop, setImageToCrop] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const onUploadFile = (event) => {

    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const image = reader.result;
       //
        setImageToCrop(image);
      });
  
      reader.readAsDataURL(event.target.files[0]);
    }
  };

   const modelOpener=(e)=>{
    setOpenModel(e)
   }

 function setImageFromWeb(e){
   setCroppedImage(e)
   setOpenModel(1)
   }

  return (
    <div>
        <div className="navhdr">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div className=""><img src="img/logo.png" className="img-fluid" alt="Mirage Logo"/></div>
            <div className=""><span>Ratnesh Pandey</span> <span><img src="img/log-out.png" className="img-fluid" alt="Log Out Button"/></span></div>
           </div>
           
        </div>
         </div>

    <div className="container">
     
      <div className="col-sm-12">
        {openModel==1?(<ModelCreater img={croppedImage} modelOpener={modelOpener}/>):openModel==2?(<Selfie img={setImageFromWeb} />):
        <div className="row formbg text-center">

          <div className="col-7 align-self-center text-center">
            <h3  className="mt-4">Let's select your profile picture</h3>
            <h4 className="mt-5">This image will be tied to your character in Mirage virtual world. Others will be able to properly indentify you when they see it. So let's make it a good one!</h4>
            <div className="row mt-5">
                <div className="col-6">
                    
                    <input type="image" src="img/file-upload.png" alt='' for="exampleFormControlFile1" onChange={onUploadFile}/>
                        
                        <input type="file" className="form-control-file d-none" id="upload-pic" onChange={onUploadFile} />
                      
                    <h6 className="mt-3">Click this button to upload a picture from your computer</h6>
                </div>
                <div className="col-6">
                   <button onClick={()=>setOpenModel(2)}> <img src="img/video-cam.png" className="img-fluid" alt="File Upload" /></button>
                    <h6 className="mt-3" >Click this button to take a picture with your webcam</h6>
                </div>
            </div>

        </div>
          <div className="col-5 text-center">
            <h5 className="mt-4">Position your face inside the circle</h5>
            <div className="canvasdiv">
            <div>
          
          <ImageCropper
            imageToCrop={imageToCrop}
            onImageCropped={(croppedImage) =>{
              console.log("sdbv",croppedImage)
              setCroppedImage(croppedImage)
            } }
          />
        </div>

            </div>
            <div className="d-flex justify-content-between mt-2">
               {croppedImage?(<div className="m-auto"> <button  className="btn btn-mirage w-100" onClick={()=>setOpenModel(1)}>Save Picture</button></div>):
               (<div className="m-auto"> <button  className="btn btn-mirage w-100" onClick={()=>setOpenModel(1)} disabled>Save Picture</button></div>)}
                
            </div>
        </div>
         </div>
         }
       </div>

       
    </div>      
    </div>
  )
}
