import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component{
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
		//creér un nouvel utilisateur
        var perso = JSON.stringify({
			id : 4, 
            first_name : document.getElementById("name").value, 
            last_name : document.getElementById("lastname").value, 
            email : document.getElementById("email").value, 
            password : document.getElementById("password").value, 
            is_admin : false });
        localStorage.setItem('newPerso', perso ); //stockage mémoire des comptes non connectés
        event.preventDefault();
    }
    render(){
		return(
			<Form>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label for="exampleName">First Name</Label>
						<Input type="name" name="name" id="name" placeholder="Your first name" />
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label for="exampleLastName">Last Name</Label>
						<Input type="lastname" name="lastname" id="lastname" placeholder="Your last name" />
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input type="email" name="email" id="email" placeholder="Your email@adress" />
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input type="password" name="password" id="password" placeholder="password placeholder" />
					</FormGroup>
				</Col>
			</Row>
			<Button onClick={this.handleSubmit}>Sign in</Button>
			</Form>
		);
    }
}
export default Register;