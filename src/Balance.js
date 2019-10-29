import React, { Component } from 'react';


class Balance extends Component{

    constructor(props){
        super(props)
        var curWallet = JSON.parse(localStorage.getItem("wallet"));
        var curBalance = curWallet["balance"];
        this.state = { currentBalance : curBalance};
    }
    
    render(){
        return(
            <div>{this.state.currentBalance} Wtm</div>
        );
    }
}
export default Balance;