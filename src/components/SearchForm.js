import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class SearchForm extends React.Component{

    constructor(props) {
        super(props);
    
        this.textInput = React.createRef();
      }
      getInput = (event) => {
        event.preventDefault();
        this.props.handleSearch(this.textInput.current.value);
      }

    render(){
        return(
            <Form onSubmit={this.getInput}>
                <Form.Group >
                    <Form.Label>Search for City</Form.Label>
                    <Form.Control type="text" placeholder="City Name" ref={this.textInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default SearchForm