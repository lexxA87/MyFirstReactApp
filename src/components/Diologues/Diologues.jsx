
import s from './Diologues.module.css';
import DiologItem from './DiologItem/DiologItem';
import Message from './Message/Message';




const Diologues = (props) =>{
    
    

    let diologsElements = props.state.diologs.map( d => <DiologItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages.map( m => <Message message={m.message} />)
    
    return (
        <div className={s.diologs}>
            <div className={s.diologsItems}>

                { diologsElements }

                
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Diologues;