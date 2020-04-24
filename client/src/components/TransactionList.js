import React, {useContext, useEffect} from 'react';
import { Transaction } from './Transaction';
import SpinnerPage from './SpinnerPage'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import Bg from './images/bg.jpg'

import {GlobalContext} from '../context/GlobalState'

export const TransactionList = () => {
    const { transactions, loading , getTransactions } = useContext(GlobalContext);


    useEffect(()=>{
        getTransactions();
        // eslint-disable-next-line  
    }, [])

    return (
        <>
        <MDBContainer>
        <MDBAnimation type="slideInRight" >
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ padding: 0 , width:"70%", margin:"0 auto"}}>
                        <MDBCol className="text-center  pt-2" style={{ backgroundImage: `url(${Bg})`, backgroundSize: "1200px 800px", minHeight: "100px"}}>
                            <MDBCol>
                                <MDBCardTitle className=" "><p id="subtitle">Summary</p></MDBCardTitle>
                                
                                    {loading || transactions.length === 0 ? <SpinnerPage /> : 
                                        <ul className="list d-flex flex-column">
                                        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
                                        </ul>
                                        
                                }


                            </MDBCol>
                        </MDBCol>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBAnimation>
        </MDBContainer>
        
        </>
    )
}
