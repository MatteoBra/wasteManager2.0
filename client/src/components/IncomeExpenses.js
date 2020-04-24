import React, {useContext} from 'react';
import { MDBAnimation } from "mdbreact";


import {GlobalContext} from '../context/GlobalState';

import { numberWithCommas} from '../utils/format';


export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <MDBAnimation type="slideInLeft">
        <div className="inc-exp-container d-flex ">
            <div className="mr-2 pr-3">
                <h4 className= "text-black">Income</h4>
                <p className="money plus">{numberWithCommas(income)}€</p>
            </div>
            <div className="ml-2">
                <h4 className= "text-black">Expense</h4>
                <p  className="money minus">{numberWithCommas(expense)} €</p>
            </div>
        </div>
    </MDBAnimation>
    )
}
