import React,{useState, useContext} from 'react';
import { MDBInput } from 'mdbreact';
import { MDBAnimation } from "mdbreact";

import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const[text, setText] = useState('');
    const[amount, setAmount] = useState(0);

    const{ addTransaction } = useContext(GlobalContext); //import function addTransaction

    const refresh = () =>{
        setText("");
        setAmount("");
    }

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random()*10000000),
            text, //text:text
            amount: +amount // convert in number
        }

        addTransaction(newTransaction);
        refresh()
    }
    
    return (
        <>
        <MDBAnimation type="slideInUp" >
            <h3 className="text-center mt-3">Add new transaction</h3>
                <form onSubmit={onSubmit} className="form" >
                    <MDBInput   label="Text"
                                labelClass="labelCustomClass" 
                                size="lg"
                                type="text" 
                                value={text}
                                onChange={(e)=> setText(e.target.value)} 
                                placeholder="Enter text..."  
                                className="form-control form-control-md " 
                    />
                    <MDBInput   type="number"
                                size="lg"
                                label="Amount"
                                labelClass="labelCustomClass"
                                value={amount} 
                                onChange={(e)=> setAmount(e.target.value)} 
                                placeholder="Enter amount..." 
                                className="myNumber "
                    />
                    <button className="btn mb-3 frozen-dreams-gradient " >Add</button>
                </form> 
        </MDBAnimation>           
        </>
    )
}
