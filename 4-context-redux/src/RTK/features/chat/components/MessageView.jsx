import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../messageSlice";


export default function MessageView() {

   const {messages} = useSelector( state => state.chat);
   const dispatch = useDispatch();


  return (
    <section className="message-view">
        <h1>Message View</h1>
       {
        messages.map( (msg, i) => <p key={i} onClick={()=> dispatch(deleteMessage(i))}> {msg} </p>)
       }
    </section>
  );
}
