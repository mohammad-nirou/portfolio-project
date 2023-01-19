import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
        <div className='row'>
        
            <div className='col-lg-6 col-xm-12'>
                <div className='photo-wrap mb-5'>
            <img className='profile-img' src={author} alt='author...' />
                </div>

            </div>

            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading'>About me</h1>
                <p >
                I'm a  passionate developer. I'm a computer science graduate. Web development and artificial intelligence are two topics that strongly interest me. I enjoy creating websites, offering AI-based solutions to a variety of problems, and working on cutting-edge technologies that improve accessibility and human communication. I am a person who is self-motivated, diligent, and quick to pick things up. I'm constantly searching for new possibilities to develop my technical and interpersonal abilities as well as learn new ones.

                </p>

            </div>


        
        </div>
            
    
    </div>
  )
}

export default AboutMe