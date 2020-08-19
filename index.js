const redux = require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger');
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAMS = 'BUY_ICECREAMS';

const buyCake = ()=>{
    return{
        type: BUY_CAKE,
        info: 'Cakes in Store'
    }

}
const buyIceCreams = ()=>{
    return {
        type:BUY_ICECREAMS
    }
}
const initialCakeState = {
    numOfCakes: 10
}
const cakesReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state, numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamsReducer = (state = initialIceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAMS:
            return{
                ...state, numOfIceCreams: state.numOfIceCreams - 1
            }
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    cakes:cakesReducer,
      iceCreams:iceCreamsReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initialState', store.getState());
unsubsribe = store.subscribe(()=>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
unsubsribe();

