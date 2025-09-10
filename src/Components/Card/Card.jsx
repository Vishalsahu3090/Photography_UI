import './Card.css'

const Card = ({img,name,venue}) => {
  return (
    <>
      <div className="card-container">
      
              <div className="card">
                  <div className="card-img"><img src={img} /></div>
                  <div className="card-heading">
                  <p className="name">{name}</p>
                  <p className="port">{venue}</p>
                  </div>
              </div>
      
          </div>
    </>
  )
}

export default Card
