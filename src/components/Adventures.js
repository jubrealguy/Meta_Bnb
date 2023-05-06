import DataAdv from '../JsonData/DataAdv'

const Adventure = () => {
    return (
        <div className="card_section">
            <h2 className="cards__head">Inspiration for your next adventure</h2>
            <div className="cards">
                {
                    DataAdv.map((cardData) => {
                        return(
                        <div key={cardData.key} className="card">
                            <img src={cardData.image} alt="" className="card__frame" />
                            <div className="card_label">
                                <span>{cardData.span1}</span>
                                <span>{cardData.span2}</span>
                                <span>{cardData.span3}</span>
                                <span>{cardData.span4}</span>
                            </div>
                            <div className="card__star">
                                <img src={cardData.star} alt="" />
                                <img src={cardData.star} alt="" />
                                <img src={cardData.star} alt="" />
                                <img src={cardData.star} alt="" />
                                <img src={cardData.star} alt="" />
                            </div>
                        </div>
                        )
                    })
                }
            </div>  
        </div>
    )
}

export default Adventure