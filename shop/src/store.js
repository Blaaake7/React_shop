import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {
        changeName(current){
            return 'john' + current
        }
    }
});

export const { changeName } = user.actions; 

const item = createSlice({
    name: 'item',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers: {
        addCount(current, action){
            const num = current.findIndex((a)=> {return a.id===action.payload});
            current[num].count += 1;
        },
        minusCount(current, action){
            const num = current.findIndex((a)=> {return a.id===action.payload});
            current[num].count -= 1;
        },
        addCart(state, action) {
            state.push(action.payload);
            console.log(state);
        }
    }
});

export default configureStore({
    reducer: {
        user: user.reducer,
        item: item.reducer
    }
})

export const { addCount, minusCount, addCart } = item.actions;