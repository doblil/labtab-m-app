import Detail from '../../components/detail/detail';
import Expend from '../../components/expend/expend';
import { useTransitionElement } from '../../hooks/transitionElement';
import './desc.scss'

function Desc() {

    const showClass = useTransitionElement()

    return (
      <div className={showClass}>
        <div className="title title__white title__header">ID 22813</div>
        <div className="desc">
            <div className="desc__wrap">
                <div style={{width:"70%"}}>                
                
                    <div className="title  title__white">Аммоний уксуснокислый 98,50%</div>
                    <div className="subtitle">Нева Реактив | ГОСТ 3117-83</div>
                </div>
                <div style={{width:"30%"}}>                
                    <div className="desc__jar">
                        <img src="icons/jar.svg" alt="jar" />
                        <div className="desc__jar-scale">
                            <div className="desc__jar-inner"></div>
                            <div className="desc__jar-text">
                                50% <br />123g
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Detail/>
            <Expend/>
        </div>
      </div>
    );
  }
  
  export default Desc;