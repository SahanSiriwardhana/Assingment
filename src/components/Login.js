import React, { Component } from 'react'
import { Container,  Button, Form, FormGroup, Label, Input,Col,Card, CardHeader,  CardBody,
     } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './style.css'
 class Login extends Component {
  
    constructor(props){
        super(props);

        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
       
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state  ={
          
            email :'',
            password:'',
          
        }
    }
  
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
  
  
    handleSubmit(e){
        e.preventDefault();
       const obj={
            email:this.state.email,
            password:this.state.password
       };
       axios.post('http://localhost:8080/users/login',obj).then(res=>{
         if(res){
           localStorage.setItem('usertoken',res.data.token);
           this.props.history.push(`/`);
          
         }
       });

       this.setState({
        
        email :'',
        password:'',
      
       });
    }

    
  
    render() {
    return (
        <Container className="logContiner">
          <Col md={5}>
            <Card>
             <CardHeader>Login form</CardHeader>
             <CardBody>
                <Form onSubmit={this.handleSubmit}>
              
                  <FormGroup>
                    <Label for="exampleAddress">Email</Label>
                    <Input type="email" name="email" id="exampleAddress" placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleAddress">Password</Label>
                    <Input type="password" name="password" id="exampleAddress" placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
                  </FormGroup>
                      <Button type="submit">Login</Button>
                      <Link to='/register'>Register</Link>
                </Form>

              </CardBody>
            </Card>
          </Col>
        </Container>
    )
  }
}
export default Login;