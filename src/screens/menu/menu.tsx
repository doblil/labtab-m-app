
import { useNavigate } from 'react-router-dom';
import './menu.scss'

export interface IMenuButton {
  route: string;
  icon: string;
  alt: string;
  style?: object;
}

export const MenuButton = (prop: IMenuButton) => {
  const {route, icon, alt, style} = prop;
  const navigate = useNavigate()
  
  return (
      <div className="menu__item" onClick={() => navigate(route)}>
        <img src={icon} alt={alt} style={style || {}}/>
      </div>
    )
}

export function Menu() {

    return (
      <div className="menu">
        <MenuButton
          alt='info'
          icon='icons/person.svg'
          route='/inf'
        />
        <MenuButton
          alt='draft'
          icon='icons/draft.svg'
          route='/drafts'
          style={{marginLeft:"6px"}}
        />
        <MenuButton
          alt='scan'
          icon='icons/upc-scan.svg'
          route='/desc'

        />
        <MenuButton
          alt='history'
          icon='icons/history.svg'
          route='/history'
        />
        
      </div>
    );
  }
  
  export default Menu;