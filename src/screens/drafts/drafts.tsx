import { useTransitionElement } from '../../hooks/transitionElement';
import './drafts.scss'

function Drafts() {

    const showClass = useTransitionElement()

    return (
      <div className={showClass}>
        <div className="title title__white title__header">Ваши черновики (5)</div>
        <div className="drafts">     
            <div className="drafts__item">
                <div className="drafts__text">2023.06.06 15:40</div>
                <div className="subtitle" style={{color:"#005e68"}}>ID67890 Марганец сернокислый (II) 5/в 98,00%</div>
                <div className="text">Статья списания: Тербинафина гидрохлорид</div><br />
                <div className="text">Вид испытания: Определение примесей в остатке</div><br />
                <div className="drafts__wrap">
                    <div className="drafts__text" style={{marginRight:"5px", marginBottom:"0"}}>Количество:</div>
                    <input type="text" />
                    <div className="drafts__text" style={{marginLeft:"5px", marginBottom:"0"}}>g</div>
                </div>
                <div className="drafts__wrap" style={{marginTop:"18px", justifyContent:"space-between"}}>
                    <div className="btn"> <img src="icons/check.svg" alt="check"/> Списать </div>
                    <div className="btn btn__white"> <img src="icons/trash.svg" alt="trash" style={{marginRight:"5px"}}/> Удалить</div>
                </div>
            </div>
            
            <div className="drafts__item">
                <div className="drafts__text">2023.06.06 15:40</div>
                <div className="subtitle" style={{color:"#005e68"}}>ID9876 Марганец сернокислый (II) 5/в 98,00%</div>
                <div className="text">Статья списания: Тербинафина гидрохлорид</div><br />
                <div className="text">Вид испытания: Определение примесей в остатке</div><br />
                <div className="drafts__wrap">
                    <div className="drafts__text" style={{marginRight:"5px", marginBottom:"0"}}>Количество:</div>
                    <input type="text" />
                    <div className="drafts__text" style={{marginLeft:"5px", marginBottom:"0"}}>g</div>
                </div>
                <div className="drafts__wrap" style={{marginTop:"18px", justifyContent:"space-between"}}>
                    <div className="btn"> <img src="icons/check.svg" alt="check"/> Списать </div>
                    <div className="btn btn__white"> <img src="icons/trash.svg" alt="trash" style={{marginRight:"5px"}}/> Удалить</div>
                </div>
            </div>

            <div className="drafts__item">
                <div className="drafts__text">2023.06.06 15:40</div>
                <div className="subtitle" style={{color:"#005e68"}}>ID9876 Марганец сернокислый (II) 5/в 98,00%</div>
                <div className="text">Статья списания: Тербинафина гидрохлорид</div><br />
                <div className="text">Вид испытания: Определение примесей в остатке</div><br />
                <div className="drafts__wrap">
                    <div className="drafts__text" style={{marginRight:"5px", marginBottom:"0"}}>Количество:</div>
                    <input type="text" />
                    <div className="drafts__text" style={{marginLeft:"5px", marginBottom:"0"}}>g</div>
                </div>
                <div className="drafts__wrap" style={{marginTop:"18px", justifyContent:"space-between"}}>
                    <div className="btn"> <img src="icons/check.svg" alt="check"/> Списать </div>
                    <div className="btn btn__white"> <img src="icons/trash.svg" alt="trash" style={{marginRight:"5px"}}/> Удалить</div>
                </div>
            </div>

        </div>
      </div>
    );
  }
  
  export default Drafts;