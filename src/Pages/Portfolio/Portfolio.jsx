import Header2 from "../../Components/Header2/Header2";
import './Portfolio.css'
import Card from '../../Components/Card/Card'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import card5 from '../../assets/card5.png'
import card6 from '../../assets/card6.png'
import card7 from '../../assets/card7.png'
import card8 from '../../assets/card8.png'
import card9 from '../../assets/card9.png'

function Portfolio(){
    return(
    <>
    <Header2/>
    {/* first section */}
    <div className="heading-section">
        <p className="port">PORTFOLIO</p>
        <p className="high">HIGHLIGHTED WORKS</p>
    </div>
    <div className="card-section">
        <div className="row">
        <Card img={card1} name={'Sarah & Luke'} venue={'WEDDING'}/>
        <Card img={card2} name={'Richard & Jane'} venue={'WEDDING'}/>
        <Card img={card3} name={'Gareth & Eva'} venue={'WEDDING'}/>
        </div>
        <div className="row">
        <Card img={card4} name={'Sarah & Luke'} venue={'WEDDING'}/>
        <Card img={card5} name={'Richard & Jane'} venue={'WEDDING'}/>
        <Card img={card6} name={'Gareth & Eva'} venue={'WEDDING'}/>
        </div>
        <div className="row">
        <Card img={card7} name={'Sarah'} venue={'PORTRAIT'}/>
        <Card img={card8} name={'Jane'} venue={'PORTRAIT'}/>
        <Card img={card9} name={'Angelina'} venue={'PORTRAIT'}/>
        </div>

        <div className="card-btn"><button>GET IN TOUCH</button></div>
    </div>

    {/* second section */}

        <div className="second-background">
        <div className="main-back-content">
            <div className="back-content">
                <h2>My Promise</h2>
                <p>I guarantee breathtaking wedding photos that perfectly capture the <br /> magic of your special day, or your money back</p>
            </div>
        </div>
        </div>
        
    </>
);
}

export default Portfolio;