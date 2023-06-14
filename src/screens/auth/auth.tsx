
import './auth.scss'

function Auth() {

    return (

      <div className="auth">

        <img src="icons/logo.svg" alt="logo" style={{margin:"0 auto"}} />

        <div className="auth__form">
            
            <div className="title auth__title">Логин</div>
            <input type="text" />

            <div className="title auth__title">Пароль</div>
            <input type="text" />

            <div className="btn btn__white auth__btn">Войти</div>
        </div>
      </div>

    );
  }
  
  export default Auth;