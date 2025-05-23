

import {configureStore} from '@reduxjs/toolkit';
import messageSlice from '../features/chat/messageSlice';



export default configureStore({
    reducer:{
        chat: messageSlice,
    }
})
