import React from 'react';
import { MDBAnimation } from "mdbreact";
import Logo from './images/money.svg'

export const Header = () => {
    return (
        <MDBAnimation type="slideInLeft"  >
            <h1 className="d-flex mt-1 align-items-center justify-content-center">WasteManager2.0 <MDBAnimation type="flipInX" delay="1s" count={2} > <img src={Logo} alt="logo"/></MDBAnimation> </h1>
        </MDBAnimation>
    );
}
