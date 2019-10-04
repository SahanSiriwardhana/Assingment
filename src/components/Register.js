import React, { Component } from 'react'
import { Container,   Form, FormGroup, Label, Input,Col, CardHeader,  CardBody,
     } from 'reactstrap';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

import './style.css'
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import purple from '@material-ui/core/colors/purple';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));
const classes = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 2000,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
            confirmPassword:'',
            showPassword:false,
        }
    }
    handleClickShowPassword=()=>{
      this.setState({
        showPassword:!this.state.showPassword,
      });
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
       
      <div>
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Registration form
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <hr/>
                </Typography>
          <Form>
          <FormGroup>
         
          
          <TextField
                            id="outlined-simple-start-adornment"
                            // className={clsx(classes.margin, classes.textField)}
                            variant="outlined"
                            label="Full Name"
                            fullWidth
                            value={this.state.name}
          onChange={this.onChangeUsername}
                          />
        </FormGroup>
          <FormGroup>
          
             <TextField
                            id="outlined-simple-start-adornment"
                            // className={clsx(classes.margin, classes.textField)}
                            variant="outlined"
                            label="Email"
                            fullWidth
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                          />
        </FormGroup>
        <FormGroup>
          
          <TextField
                              id="outlined-adornment-password"
                              className={clsx(classes.margin, classes.textField)}
                              variant="outlined"
                              type={this.state.showPassword ? 'text' : 'password'}
                              label="Password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              fullWidth
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                      aria-label="toggle password visibility"
                                      onClick={this.handleClickShowPassword}
                                    
                                    >
                                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
        </FormGroup>
        <FormGroup>
         
          <TextField
                              id="outlined-adornment-password"
                              className={clsx(classes.margin, classes.textField)}
                              variant="outlined"
                              type={this.state.showPassword ? 'text' : 'password'}
                              label="Password"
                              value={this.state.confirmPassword}
                              onChange={this.onChangeConfirmPassword}
                              fullWidth
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                      aria-label="toggle password visibility"
                                      onClick={this.handleClickShowPassword}
                                    
                                    >
                                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
        </FormGroup>
       
        <Button variant="contained" color="primary"  fullWidth onClick={this.onSubmit}>
          Register
        </Button>
      </Form>

      
        
        
       
       
       
        </CardContent>
            </Card>
      
              
              </div>
    )
  }
}
export default Register;