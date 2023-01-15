import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Avatars import
import avatar1 from '../images/avatar-1.png';
import avatar2 from '../images/avatar-2.png';
import avatar3 from '../images/avatar-3.png';
import avatar4 from '../images/avatar-4.png';

const TestimonialsCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={2000}
    >
    <>
    <img src={avatar1} alt="Mohamad Nirou" />
    <div className="myCarousel">
    <h3>Mohamad Nirou</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut eligendi esse itaque deleniti consectetur dolore odio molestias dolorem repellendus error?</p>
    </div>
    
    
    </>
    

    <>
    <img src={avatar2} alt="Parvaneh Sadeghi" />
    <div className="myCarousel">
    <h3>Parvaneh Sadeghi</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut eligendi esse itaque deleniti consectetur dolore odio molestias dolorem repellendus error?</p>
    </div>
    
    
    </>


    <>
    <img src={avatar3} alt="Reza Sadeghi" />
    <div className="myCarousel">
    <h3>Reza Sadeghi</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut eligendi esse itaque deleniti consectetur dolore odio molestias dolorem repellendus error?</p>
    </div>
    
    
    </>


    <>
    <img src={avatar4} alt="Ali Karimi" />
    <div className="myCarousel">
    <h3>Ali Karimi</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut eligendi esse itaque deleniti consectetur dolore odio molestias dolorem repellendus error?</p>
    </div>
    
    
    </>
    
    </Carousel>
  )
}

export default TestimonialsCarousel