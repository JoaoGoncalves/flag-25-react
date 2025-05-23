import {createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
    name: "[chat] messages", // identificador do slice
    initialState: {  // state inicial deste slice, desta feature da app
        messages: [],
    },
    reducers:{ // action creaators, definir actions, e de que forma o state deste slice é atualizado
        addMessage: (state, action) => {
            state.messages.push(action.payload); // RTK, foi acrescentado uma biblioteca chamada IMMER, que me garante a imutabilidade do state
        },
        deleteMessage: (state, action) => {
            state.messages = state.messages.filter ( (msg, i) => i !== action.payload );
        },
        clearAllMessages: (state) => {
            state.messages = [];
        }

    }
});

export const {addMessage, deleteMessage, clearAllMessages} = messageSlice.actions;
export default messageSlice.reducer;