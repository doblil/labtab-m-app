
import ConfirmMessage from '../../components/confirmMessage/confirmMessage';
import { useTransitionElement } from '../../hooks/transitionElement';
import './inf.scss'

function Inf() {

  const showClass = useTransitionElement()

    return (
      <>
      {/* <ConfirmMessage/> */}
      <div className={showClass}>
        <div className="inf">
            <div className="title  title__white">Илья Федорко</div>
            <div className="subtitle">Уравление по новым продуктам IT</div>
            <div className="subtitle">Ваши права: Разработчик</div>
            <div className="inf__contact">
                <img src="icons/phone.svg" alt="phone" />
                <div className="subtitle">+79524346863</div>
            </div>
            <div className="inf__contact">
                <img src="icons/envelope.svg" alt="envelope" />
                <div className="subtitle">3@mail.ru</div>
            </div>
            <div className="btn btn__white" style={{margin:"0 auto"}}>Выйти</div>
        </div>
      </div>
      </>

    );
  }
  
  export default Inf;