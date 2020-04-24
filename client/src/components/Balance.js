import React, {useContext} from 'react';
import { MDBAnimation } from "mdbreact";

import {GlobalContext} from '../context/GlobalState';

import { numberWithCommas} from '../utils/format';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        
        <>
        <MDBAnimation type="slideInRight">
            <h4 className="font-size-balance text-center">Your Balance</h4>
            <h1 className= "text-center font-size-balance-number" >{numberWithCommas(total)}€</h1>
        </MDBAnimation>
        </>

    )
}

