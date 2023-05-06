import PlaceData from '../JsonData/DataPlace'


const Places = () => {
    return (
        <div className='places__card'>
             <ul className="places-list">
                <li className="places-item">Restaurant</li>
                <li className="places-item">Cottage</li>
                <li className="places-item">Castle</li>
                <li className="places-item">Fantast city</li>
                <li className="places-item">Beach</li>
                <li className="places-item">Cabins</li>
                <li className="places-item">Off-grid</li>
                <li className="places-item">Farm</li>
                <li className="places-item">Location</li>
            </ul>

            <div className="cards">
                {
                    PlaceData.map((cardData) => {
                        return(
                        <div key={cardData.key} className="card">
                            <img src={cardData.image} alt="" className="card__frame" />
                            <div className="card_label">
                                <span>{cardData.span1}</span>
                                <span>{cardData.span2}</span>
                                <span>{cardData.span3}</span>
                                <span>{cardData.span4}</span>
                            </div>
                            <div>
                                <img src={cardData.star} alt="" className="card__star" />
                                <img src={cardData.star} alt="" className="card__star" />
                                <img src={cardData.star} alt="" className="card__star" />
                                <img src={cardData.star} alt="" className="card__star" />
                                <img src={cardData.star} alt="" className="card__star" />
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Places