const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
// import { fetchProducts } from './productsSlice';
// intial state 
export  const STATUSES  = Object.freeze({
    IDLE : 'idle ',
    ERROR : 'error',
    LOADING : 'loading ',
})
//just becouse of creatSlice method we can directly mutate the state  
const productsSlice = createSlice({
    name : "product",
    initialState : {
        data : [],
        status : STATUSES.IDLE, 
    },
    reducers : {
        // setProducts(state , action ){
        //     // redux  
        //     state.data = action.payload;
        // },
        // setStatus(state , action){
        // state.status = action.payload
        },
        extraReducers : (builder) => {
            builder 
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });

    },
})

export const {setProducts,setStatus}  = productsSlice.actions;   // export the add and remove from cartSlice 
                                 
export default productsSlice.reducer;              

// thunks 


export const fetchProducts = createAsyncThunk('products/fetch', async () =>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;

})

// export function fetchProducts (){
//     return async function fetchProductThunk(dispatch, getState){
//          dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const data = await res.json();
//             dispatch(setProducts(data));
//          dispatch(setStatus(STATUSES.IDLE));

            
//         } catch (error) {
//             console.log(error);
//          dispatch(setStatus(STATUSES.ERROR));

            
//         }
//     }
// }