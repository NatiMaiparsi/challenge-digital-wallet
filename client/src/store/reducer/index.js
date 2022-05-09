import { GET_PRICES, GET_WALLETS } from "../actions/types"

const inicialState = {
    wallets: [],
    prices: []
}

export default function reducer(state = inicialState, action){
    switch(action.type){
        case GET_WALLETS:
            return{
                ...state,
                wallets: action.payload
            }
        case GET_PRICES:
            return{
                ...state,
                prices: action.payload
            }
        default:
            return state
    }
}