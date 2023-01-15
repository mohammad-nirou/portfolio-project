import React from 'react'

const Contacts = () => {
  return (
    <div className="contacts">
    <div className="text-center">
    <h1>contact me</h1>
    <p>Please fill out the form and describe your project and your project needs and I will contact you as soon as possible.</p>
    </div>

    <div className="container">
    <div className="row">
    <div className="col-md-6 col-xs-12">
 {/* NAME INPUT */}

 <div className="text-center">
 <input  type='text' name='name' className="form-control" placeholder="Name" />
 <div className="line"></div>
 </div>
 {/* PHONE NUMBER */}
 <div className="text-center">
 <input  type='text' phone='phone' className="form-control" placeholder="Phone Number" />
 <div className="line"></div>
 </div>
 {/* EMAIL INPUT */}
 <div className="text-center">
 <input  type='email' email='email' className="form-control" placeholder="Email" />
 <div className="line"></div>
 </div>
 {/* SUBJECT INPUT */}
 <div className="text-center">
 <input  type='text' subject='subject' className="form-control" placeholder="Subject" />
 <div className="line"></div>
 </div>


    </div>

    <div className="col-md-6 col-xs-12">
    {/* DESCRIPTION INPUT */}
    <div className="text-center">
 <textarea id='description' type='text' subject='textarea' className="form-control" placeholder="Please describe your project"></textarea> 
 <div className="line"></div>
 </div>
    <button className='button btn-main-offer contact-btn' type='submit'>contact me</button>
    </div>
    
    
    </div>
    
    
    </div>
    </div>
  )
}

export default Contacts