import { GET_PRICES, GET_WALLETS } from "./types"
import axios from 'axios'

export function getWallets() {
    return async function (dispatch) {
        const wallets = await axios('http://localhost:3001/wallets')
        console.log("wallet", wallets)
        return dispatch({
            type: GET_WALLETS,
            payload: wallets.data
        })
    }
}

export function getPrices() {
    return async function (dispatch) {
        const prices = await axios('http://localhost:3001/wallets/prices')
        return dispatch({
            type: GET_PRICES,
            payload: prices.data
        })
    }
}

export function addFavorite(id){
    return async function () {
        await axios.put('http://localhost:3001/wallets/favorite/'+id)
    }
}

export function deleteFavorite(id){
    return async function () {
        await axios.put('http://localhost:3001/wallets/favorite/'+id)
    }
}