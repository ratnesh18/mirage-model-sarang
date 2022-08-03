import React from 'react'

export default function Registration() {

    

  return (
   <div className="container">
  <div className="col-sm-12 col-md-6 col-lg-4 m-auto">
    <div className="formbg text-center">
<img src="img/logo.png" className="img-fluid" alt="Mirage Logo"/>
<p className="mt-3">Register your Mirage account</p>
<div className="mb-3">
  <input type="email" className="form-control" placeholder="Email" />
</div>
<div className="row">
<div className="col-sm-12 col-md-6"><div className="mb-3">
  <input type="text" className="form-control" placeholder="First Name" />
</div></div>
<div className="col-sm-12 col-md-6"><div className="mb-3">
  <input type="text" className="form-control" placeholder="Last Name" />
</div></div>
</div>
<div className="mb-3">
  <input type="number" className="form-control" placeholder="Phone Number" />
</div>
<div className="mb-3">
  <input type="text" className="form-control" placeholder="Location" />
</div>
<div className="mb-3">
  <input type="text" className="form-control" placeholder="Company" /> 
</div>
<div className="row">
<div className="col-sm-7"><p className="frm-text  text-start">Share business information with other participants?</p></div>
<div className="col-sm-5">
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="option1" />
    <label className="form-check-label frm-text" htmlFor="yes">Yes</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="option2" />
    <label className="form-check-label frm-text" htmlFor="no">No</label>
  </div>
</div>
</div>
<div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="termscondition" />
  <label className="form-check-label  text-start frm-text" htmlFor="termscondition">
    I accept the Mirage Terms and Condition and adhere to the privacy policy.
  </label>
</div>
<div className="mb-3 mt-3">
<button type="button" className="btn btn-mirage w-100">Get OTP</button>
</div>
<p className="frm-text text-decoration-none">Already have an account?<button  className="text-white  text-decoration-none"> Sign In</button></p>
    </div>
    </div>
  </div>
  )
}
