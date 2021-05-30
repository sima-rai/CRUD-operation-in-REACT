import React, { Component } from 'react';
import {Button, Modal, Form} from 'semantic-ui-react'
import {uuid} from 'uuidv4'

class componentName extends Component {
    state={
        id:uuid(),
        name:"",
        username:""

    }
    onInputChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })
        console.log(event.target.name);

    };

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({name:"", username:""})


    };

    render() {
        const {name, username} = this.state;
        return (
            <Modal trigger={<Button>Add New User</Button>}>
                <Modal.Header>Add New User</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Input name="name" onChange={this.onInputChange} label="Full Name" placeholder="enter name" value={name}></Form.Input>
                        <Form.Input name="username" onChange={this.onInputChange} label="User Name" placeholder="enter username" value={username}></Form.Input>
                        <Button content="Submit" type="submit"></Button>


                    </Form>

                </Modal.Content>

            </Modal>
        )
        
    }
}

export default componentName;