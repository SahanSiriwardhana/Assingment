import React, { Component } from 'react'
import { Container,   Form, FormGroup, Col, Row
     } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './style.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import Register from './Register';
const secondary=purple[500];
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
 class Login extends Component {
  
    constructor(props){
        super(props);

        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
       
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state  ={
          
            email :'',
            password:'',
            showPassword:false,
        }
    }

    handleClickShowPassword=()=>{
      this.setState({
        showPassword:!this.state.showPassword,
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
        <Container >
          <Row className="RowAuth">
          <Col md={6}>
          <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                   Login
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <hr/>
                </Typography>
                <Form>
                    
                        <FormGroup>
                          {/* <Label for="exampleAddress">Email</Label>
                          <Input type="email" name="email" id="exampleAddress" placeholder="Enter Email"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          /> */}
                          <TextField
                            id="outlined-simple-start-adornment"
                            // className={clsx(classes.margin, classes.textField)}
                            variant="outlined"
                            label="Username"
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
                        <Button variant="contained" size="medium" fullWidth color="primary" className={classes.margin} onClick={this.handleSubmit}>
                          Login
                        </Button>
                       
                        
                            {/* <Button type="submit">Login</Button> */}
                            {/* <Link to='/register'>Register</Link> */}
                      </Form>
              </CardContent>
            </Card>
          </Col>
          <Col md={6}>
            <Register/>
          </Col>
          </Row>
        </Container>
    )
  }
}
export default Login;