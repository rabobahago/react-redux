const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'Cakes in Store'
    }
    
}
const initialState = {
    numberOfCakes: 10
}
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE: 
            return{
                ...state, numberOfCakes: state.numberOfCakes - 1
            }
        default: return state
    }
}

const store = createStore(reducer);
console.log('Current ', store.getState());
unsubsribe = store.subscribe(()=>{console.log('Update state', store.getState())});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubsribe();

