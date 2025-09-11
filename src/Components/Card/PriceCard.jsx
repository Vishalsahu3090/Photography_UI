import './PriceCard.css'
const PriceCard = ({img,venue,price}) => {
  return (
    <div>
            <div className="price-card">
                <img src={img} /><br /><br />
                <p className="venue">{venue}</p><br />
                <p className="session">Per Session</p>
                <p className="price">{price}</p><br /><br />
                <button className="btn-more">More Details</button>
            </div>
      
    </div>
  )
}

export default PriceCard
