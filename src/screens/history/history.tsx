import HistoryItem from '../../components/historyItem/historyItem';
import { useTransitionElement } from '../../hooks/transitionElement';
import './history.scss'

function History() {
   const showClass = useTransitionElement()
    return (
      <div className={showClass}>
        <div className="title title__white title__header">Ваши действия</div>

        <div className="history">    
            <HistoryItem/>
            <HistoryItem/>
            <HistoryItem/>
            <HistoryItem/>
            <HistoryItem/>
            <HistoryItem/>
            <HistoryItem/>
            <HistoryItem/>

        </div>
      </div>
    );
  }
  
  export default History;