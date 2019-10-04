import React, { Component } from 'react'
import { Link} from "react-router-dom";

import jwt_decode from 'jwt-decode';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


// const classes = useStyles();
const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


class AppNavbar extends Component {
  
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loginStatus:false,
            isLocalStorage:false
        };
        this.logOut=this.logOut.bind(this);
    }

    logOut(e){
      e.preventDefault();
      localStorage.removeItem('usertoken');
      console.log("Logout successfully");
    }

    componentDidMount(){
     if(localStorage.getItem('usertoken')){
       this.setState({
         isLocalStorage:!this.state.isLocalStorage
       });
      const usertoken=localStorage.usertoken;
      const decode=jwt_decode(usertoken);
     
     }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
      
      const loginRegLink=(
        
        <div>
            <Button color="inherit" >
              <Link to="/">
                land
              </Link>
            </Button>
            <Button color="inherit">
            <Link to="/login">
              Login
            </Link>
            </Button>
           
        </div>
      )
      const userLink=(
        

          <div>
            <Button color="inherit" > <Link to="/">land</Link></Button>
            <Button color="inherit" > <Link to="/userList">Users</Link></Button>
            <Button color="inherit" tag={Link} to="/">My Bid</Button>
            
            <IconButton color="inherit" className={classes.button} aria-label="ExitToAppIcon" onClick={this.logOut}>
              <ExitToAppIcon />
            </IconButton>
          </div>
      )
     
        return (
          
          <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
            <Grid
                justify="space-between" // Add it here :)
                container 
                spacing={24}
              >
              <Typography variant="h6" className={classes.title}  >
                ABC Company
              </Typography>
              {this.state.isLocalStorage? userLink:loginRegLink}
            </Grid>
            </Toolbar>
          </AppBar>
        </div>
           
        );
    }
}
export default AppNavbar;