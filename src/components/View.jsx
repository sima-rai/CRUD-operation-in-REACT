import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Edit from './Edit'

class componentName extends Component {

    render() {
        const {data} = this.props;
        console.log(data)

        return (
            <div>
            <Edit></Edit>
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Full Name</Table.HeaderCell>
                    <Table.HeaderCell>username</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                    <Table.Body>
                        {
                            data.map((user)=>(
                                <Table.Row>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.username}</Table.Cell>
                                    <Table.Cell>
                                        <Button content="Edit"></Button>
                                        <Button content="Delete"></Button>

                                    </Table.Cell>


                                </Table.Row>

                            )
                                
                            )
                        }
                        

                    </Table.Body>



            </Table>
            </div>
        );
    }
}

export default componentName;