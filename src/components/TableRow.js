import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const classes = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default class TableRows extends Component {
  constructor(props){
    super(props);
    this.state={
      number:1,
      setOpen:false,
    };
    this.clickMe=this.clickMe.bind(this);
    
  }

  open=()=>{
    
  }

   handleClickOpen = () => {
    this.setState({
      setOpen:true,
    });
  };

   handleClose = () => {
    this.setState({
      setOpen:false,
    });
    console.log(this.state.setOpen);
  };
  clickMe(){
    this.setState({
      number:(this.state.number+1),
    })
    // let des= confirm("Are you sure ?");
    // if(des){
    //   console.log(des);
    // }else{
    //   console.log(des);
    // }
    // console.log(this.state.number)
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <TableRow >
          <TableCell component="th" scope="row">
            {this.props.object+1}
          </TableCell>
          <TableCell align="left">{this.props.obj.name}</TableCell>
          <TableCell align="left">{this.props.obj.email}</TableCell>
          <TableCell align="left">
            <IconButton className={classes.button} aria-label="delete" color="secondary" 
            onClick={this.clickMe}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
          {/* <Dialog
            open={this.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog> */}
      </TableRow>
      
    );
  }
}