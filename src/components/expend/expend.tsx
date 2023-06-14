import { useState } from 'react';
import './expend.scss'

function Expend() {

    const [date, setDate] = useState(new Date())
    
    return (
        <div className="expend">
            <div className="title" style={{textAlign:"center"}}>Оформить расход</div>

            <div className="subtitle">Статья списания</div>
            <input type="text" />

            <div className="subtitle">Вид испытания</div>
            <input type="text" />
            
            <div className="expend__wrap">
                <div className="expend__inner">
                    <div className="subtitle">Количество</div>
                    <input type="text"/>
                </div>

                <div className="expend__inner" >
                    <div className="subtitle">Дата</div>
                    <input 
                        type="datetime-local" 
                        value={date.toISOString()}
                        onChange={e => setDate(new Date(e.target.value))}
                    />
                </div>

            </div>
            <div className="expend__wrap" style={{marginTop:"5px"}}>
                <div className="btn btn__orange">В черновик</div>
                <div className="btn">Списать</div>
            </div>

        </div>
    );
  }
  
  export default Expend;