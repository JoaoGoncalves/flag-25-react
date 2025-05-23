import { useDispatch, useSelector } from "react-redux";
import MessageInput from "./MessageInput";
import MessageView from "./MessageView";
import { clearAllMessages } from "../messageSlice";


export default function Chat() {

   const {messages} = useSelector(state => state.chat);
   const dispatch = useDispatch()


  return (
    <section className="chat">
        <h1>Chat- {messages.length}</h1> 
        <button onClick={()=> dispatch(clearAllMessages())}>clear all messages</button>
        <MessageView />
        <MessageInput />
    </section>
  );
}
