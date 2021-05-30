//class based component
import React, { Component } from 'react';
import {Container, Input} from 'semantic-ui-react'
import Add from './components/Add'
import View from './components/View'

class componentName extends Component {
  state={
    users:[
      {id:1, name:'Ram Thapa', username:"ramthapa"},
      {id:2, name:'Shyam Thapa', username:"shyamthapa"},
      {id:3, name:'Sita Thapa', username:"sitathapa"},

    ]
  }
  onSearchChange=(event)=>{
    console.log(event.target.value);

  };

  onFormSubmit=(user)=>{
    console.log(user)
    const {users} = this.state;
    this.setState({users:[...users, user]})

  };

  render() {
    const { users }=this.state; //state lai bolako

    return (
      <Container>
        <Add onSubmit={this.onFormSubmit}> </Add>
        <Input icon="search" placeholder="search" onChange={this.onSearchChange}></Input>
        <View data={users}></View> 
        {/* mathi ko chai aba view ma props pass gareko cause data ta aisakyo aba pathaune */}
      </Container>

    
    
    );
  }
}

export default componentName;