import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';


class Manage extends Component{

    constructor(props){
        super(props)
        var userCard = JSON.parse(localStorage.getItem("newCard"));
        var userBrand = userCard["brand"];
        var userName = userCard["first_name"];
        var userLastName = userCard["last_name"];
        var userFourDigit = userCard["four_digit"];
        var userCcv = userCard["ccv"];
        var userExpdate = userCard["exp_date"];

        this.state = { usBrand : userBrand,
                       usName : userName,
                       usLastName: userLastName,
                       usFourDigit : userFourDigit,
                       usCcv : userCcv,
                       usExpdate: userExpdate};
    }
    
    render(){
        return(


        <Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>{this.state.usBrand}</CardTitle>
              <CardSubtitle>{this.state.usName} </CardSubtitle>
              <CardSubtitle>{this.state.usLastName} </CardSubtitle>
              <CardSubtitle>{this.state.usFourDigit} </CardSubtitle>
              <CardSubtitle>{this.state.userCcv} </CardSubtitle>
              <CardSubtitle>{this.state.usExpdate} </CardSubtitle>
            </Card>
        </Card>
        );
    }
}
export default Manage;