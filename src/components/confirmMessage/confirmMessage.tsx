import './confirmMessage.scss'

function ConfirmMessage() {


    return (
        <div className="confirm">
            <div className="confirm__window">
                <div className="confirm__text">Удалить?</div>
                <div className="confirm__btns">
                    <div className="btn">Подтвердить</div>
                    <div className="btn btn__white">Отменить</div>
                </div>
            </div>

        </div>
    );
  }
  
  export default ConfirmMessage;