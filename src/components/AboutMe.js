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
                I'm passionate about Web Development, and Artifitial Intelligence. I enjoy providing AI-based solutions to a wide range of issues, developing websites, and working with new technologies that facilitate communication, access to data, and help people. I am a self-motivated, hard-working, and a quick learner. I am always looking for new opportunities to learn and grow. I am a team player and I am always open to new ideas and suggestions. I am a fast learner and I am always looking for new opportunities to learn and grow. I have an M.Sc. in Computer Science and I am actively learning new skills and working on the ones already acquired. 


                </p>

            </div>


        
        </div>
            
    
    </div>
  )
}

export default AboutMe