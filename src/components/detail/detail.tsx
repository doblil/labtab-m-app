import { useState } from 'react';
import './detail.scss'

function Detail() {
 
    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(!showDetails)
    }

    const handleStyle = () => {
        if(!showDetails) return 'detail__wrap'
        return 'detail__wrap detail__wrap_active'
    }

    return (
        <div className="detail">
            <div 
                className="detail__btn"
                style={{textAlign:"center"}}
                onClick={handleShowDetails}>
                Подробная информация ▼
            </div>

            <div className={handleStyle()}>
            
                <div className="detail__label"> Партия</div>
                <div className="detail__mean">3/Е6</div>

                <div className="detail__label"> Упаковка</div>
                <div className="detail__mean">3101 g</div>

                <div className="detail__label"> Дата производства - годен до</div>
                <div className="detail__mean">2020.11.16 - 2022.11.16</div>

                <div className="detail__label"> Расположение</div>
                <div className="detail__mean">2 шкаф</div>

                <div className="detail__label">Последний пользователь</div>
                <div className="detail__mean">Добровольская Лилия Анатольевна <br /> 2023.02.08 01:51</div>

                <div className="detail__warn">
                    <img src="icons/danger/corrosive.png" alt="corrosive" />
                    <img src="icons/danger/flammable.png" alt="flammable" />
                    <img src="icons/danger/oxidizing.png" alt="oxidizing" />
                    <img src="icons/danger/flammable.png" alt="flammable" />
                    <img src="icons/danger/oxidizing.png" alt="oxidizing" />
                </div>
            </div>
            

        </div>
    );
  }
  
  export default Detail;