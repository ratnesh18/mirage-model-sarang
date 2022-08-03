import React, { useState } from "react";

import ImageCropper from "./ImageCroper/index.js";
import ModelCreater from './3DModel/ModelCreater';
import Selfie from "./Selfie.js";

export default function CropImage() {
    const [openModel,setOpenModel]=useState(false)
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

  return (
    <div className="app">
      
      {
        openModel?(<ModelCreater img={croppedImage} modelOpener={modelOpener}/>):(<>
        
        <input type="file" accept="image/*" onChange={onUploadFile} />
        
        <div>
          <ImageCropper
            imageToCrop={imageToCrop}
            onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
          />
        </div>
        {console.log("Imagecropped")}
        {croppedImage && (
          <div>
            <h2>Cropped Image</h2>
            <img alt="Cropped Img" src={croppedImage}   />
          </div>
        )}
        <button onClick={()=>modelOpener(true)}>Next</button>
        {/* <Selfie/> */}
        </>)
      }
    </div>
  );

}
