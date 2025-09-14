import Header2 from '../../Components/Header2/Header2.jsx'
import Footer from '../../Components/Footer.jsx'
import Author from '../../assets/Author.png'
import Vector from '../../assets/Vector.png'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'
import fourth from '../../assets/fourth.png'
import collage2 from '../../assets/442.png'
import collage3 from '../../assets/443.png'
import one from '../../assets/two-one.png'
import two from '../../assets/two-two.png'
import './About.css'


const About = () => {
  return (
    <>
      <Header2/>

      {/* first section */}
      <div className='about-heading'>
        <p className='para1'>ABOUT</p>
        <p className='para2'>MY STORY</p>
      </div>
       <div className="about-author">
        <div className="author-img">
        <img src={Author} alt="author" />
        </div>

        <div className="author-content">
          <p>Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium. Donec odio faucibus consectetur feugiat varius.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus</p>
          <p>Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium</p>
          <div className='img-btn'>
          <img src={Vector} />
          <button>View Portfolio</button>
          </div>
        </div>

       </div>

       {/* second section */}
    <div className="img-container">
      <img className='img' src={first} />
      <img className='img' src={second} />
      <img className='img' src={third} />
      <img className='img' src={fourth} />
    </div>

        {/* third section */}
      <div className="third-section-about">
      
      <div className="heading">
      <p className='para1'>GET TO KNOW</p>
      <p className='para2'>A Few Facts About Myself</p>
      </div>

      <div className="collage">
        <div className="row1">
          <img src={third} />
          <div className='collage-content'>
          <h2 className='collage-head'>1</h2>
          <p className='collage-para'>Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.</p>
          </div>
          <img src={collage2}  />
        </div>

        <div className="row2">
           <div className='collage-content'>
          <h2 className='collage-head'>2</h2>
          <p className='collage-para'>Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.</p>
          </div>
          <img src={collage3} />
           <div className='collage-content'>
          <h2 className='collage-head'>3</h2>
          <p className='collage-para'>Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.</p>
          </div>

        </div>


      </div>

      </div>

      {/* fourth section */}
      <div className="fourth-section">
      
      <div className="head-para-btn">
        <p className='para1'>CRAFTING MEMORIES</p>
      <p className='para2'>Your Story, My Lens</p>
      <p className='full-para'>Your wedding day is a once-in-a-lifetime event, and choosing the right photographer is essential to preserving its magic for years to come. I would be honored to be a part of your special day.</p>
      <button>Book Now</button>
      </div>
      <div className="two-img">
        <img  className='img1' src={one} />
        <img className='img2' src={two} />
      </div>

      </div>
      <Footer/>
    
    </>
  )
}

export default About
