##create a redux store for manage complex state management 

## step -1 
- create a one js file the name is cartSlice.js 
- we can organise our store data in small pieces 
- it easy maintain & complexsity low

## step 2 
- initialize the initialstate = [] as empty 
- define variable [cartslice] where createSlice method it contain the object  
- give the name of object [cart]
- inside reducer [it is just a function] function we create two function add() and remove ()

## step 3 
- add function contain two parameter state[initial_state] and action use for perform the action  
- export the both function 

## step 4 
- create store.js file 
- at reducer function add cart file [cart_file] 
- ex -> product : proReducer, add another file like that   

## step 5 
- just because of provider we inject the our store to app 
- perfome the action we use the useDispatch hook in redux toolkit 
- inside the dispatch function we add our action 
- for getting this data we use useSelector hook in react 


## summery 
- create a slice for data  
- name , initialstate reducers , function , export , export .reducers
-  create a store file 
- import cartreducer from cartslice 
- wrap app.js in provider add store={store}