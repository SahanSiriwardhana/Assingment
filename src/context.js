import React, { Component } from 'react'
import axios from 'axios';
const LandContext=React.createContext();

class LandProvider extends Component {

    constructor(props){
        super(props);
        this.state={
            lands:[],
            landsDatails:[]
        };
      }

      

      componentDidMount(){
        axios.get('http://localhost:8080/lands')
        .then(response=>{
          this.setState({lands:response.data});
        })
        .catch(function(error){
          console.log(error);
    
        })

        // const id
       
      }

      getItem=id=>{
        const land=this.state.lands.find(item =>item._id ===id);
        return land;
      }

    handleDetails=(id)=>{
      axios.get(`http://localhost:8080/lands/${id}`)
      .then(response=>{
        this.setState({landsDatails:response.data});
      })
      .catch(function(error){
        console.log(error);
  
      })
    }

    render() {
        return (
            <LandContext.Provider value={{
                ...this.state,
                handleDetails:this.handleDetails
            }}>
                {this.props.children}
            </LandContext.Provider>
        )
    }
}

const LandConsumer=LandContext.Consumer;

export {LandProvider,LandConsumer};
