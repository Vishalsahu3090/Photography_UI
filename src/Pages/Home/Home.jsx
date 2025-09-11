import Header from "../../Components/Header/Header";
import PriceCard from "../../Components/Card/PriceCard";
import leaf from '../../assets/horizontal-leave.png';
import Bigleaf from '../../assets/big-leaf.png'
import AuthorBio from '../../assets/author-bio-photo.png'
import group1 from '../../assets/group1.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'
import env from '../../assets/env.png'
import './Home.css'

function Home(){
    return(
    <>
    <Header/>

    {/* first section */}

    <div className="leaf-section">
        <img src={leaf}  />
        <p className="port">AWARD WINING PHOTOGRAPHY</p>
        <p className="leaf-para">Showcasing your big day in a memorable and unforgettable way.</p>
    </div>

    {/* second section */}

    <div className="about-author">
            <div className="author-img">
            <img src={AuthorBio} alt="author" />
            </div>
    
            <div className="author-content">
              <p style={{textAlign:"center"}}>Hello, My Name is Tessa</p>
              <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.</p>
              <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat.</p>
              <div className='img-btn'>
              <img src={Bigleaf} />
              <p className="author-name-para">Tessa.M</p>
              <button>Learn More</button>
              </div>
            </div>
    
           </div>

    {/* third section */}

    <div className="heading">
        <div className="port">SERVICES</div>
        <div className="high">What I Offer</div>
    </div>

    <div className="price-card-container">
        <PriceCard img={group1} venue="Wedding" price="$2999"/>
        <PriceCard img={group2} venue="Portrait" price="$399"/>
        <PriceCard img={group3} venue="Engagement" price="$1999"/>
    </div>

    {/* fourth section */}

        <div className="fourth-section">
            <div className="envolpe-border">
            <div className="envolpe-div">
                <img src={env} />
                <p className="env-head" style={{color:"#686868",textAlign:"center"}}>Creative, Passionate, Artistic</p>
                <p className="env-para">Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan </p>
            </div>
            </div>
        </div>

    </>
    );
}

export default Home;