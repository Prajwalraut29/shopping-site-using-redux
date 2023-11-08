const { createSlice } = require("@reduxjs/toolkit");
// intial state 

//just becouse of creatSlice method we can directly mutate the state  
const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add(state , action ){
            // redux  
            state.push(action.payload);
        },
        remove(state , action){
          return  state.filter((item) => item.id !== action.payload);
        }, 
    }
})

export const {add,remove}  = cartSlice.actions;   // export the add and remove from cartSlice 
                                 
export default cartSlice.reducer;              