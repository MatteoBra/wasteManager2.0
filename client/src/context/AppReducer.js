//how state changes

export default (state,action) =>{
    switch(action.type){
        case 'GET_TRANSACTIONS': //backend action
            return{
                ...state,
                loading: false,
                transactions:action.payload
            }
        case 'DELETE_TRANSACTION':
            return{
                ...state, //current state and add 
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload )
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
        }
        case 'TRANSACTION_ERROR': //backend action
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}