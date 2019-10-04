import React, { Component } from 'react'
import { Container,   Form, FormGroup, Label, Input,Col,Card, CardHeader,  CardBody,
     } from 'reactstrap';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

 class Register extends Component {
   
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeConfirmPassword=this.onChangeConfirmPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state  ={
            name: '',
            email :'',
            password:'',
            confirmPassword:''
            
        }
    }
    onChangeUsername(e){
        this.setState({
            name:e.target.value
        });
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
  
    onChangeConfirmPassword(e){
        this.setState({
            confirmPassword:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
       const obj={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
       };
       axios.post('http://localhost:8080/users/signup',obj)
       .then((res)=>{alert(res.data.message)})
       .catch(err=>console.log(err));

       this.setState({
        name: '',
        email :'',
        password:'',
        confirmPassword:'' 
       });
    }
  
    render() {
     
    return (
        <Container className="regContiner">
             <Col md={5} >

             <Paper>
                
                <Typography component="p">
                
                

             <Card>
             <CardHeader>Registration form</CardHeader>

             <CardBody>
          <Form>
          <FormGroup>
          <Label for="exampleAddress">Username</Label>
          <Input type="text" name="username" id="exampleAddress" placeholder="Enter Username"
          value={this.state.name}
          onChange={this.onChangeUsername}
          />
        </FormGroup>
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
        <FormGroup>
          <Label for="exampleAddress2">Confirm Passowrd</Label>
          <Input type="password" name="cpassword" id="exampleAddress2" placeholder="Enter Confirm Password"
          value={this.state.confirmPassword}
          onChange={this.onChangeConfirmPassword}
          />
        </FormGroup>
       
        <Button variant="contained" color="primary" onClick={this.onSubmit}>
          Submit
        </Button>
      </Form>

      
        
        
       
        </CardBody>
       
      </Card>
      </Typography>
              </Paper>
      </Col>
      </Container>
    )
  }
}
export default Register;