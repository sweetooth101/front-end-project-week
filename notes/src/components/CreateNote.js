import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display:flex;
    flex-direction: column;
    width:80%;
`;

const Input = styled.input`
    width:30%;
    padding:10px;
    font-size: 15px;
    margin:10px;
`;

const BodyInput = styled(Input)`
    width:60%;
    height:200px;
    
`;

const Button = styled.button`
    width:15%;
    background-color:aqua;
    margin-left:10px
    `

class CreateNote extends Component {
    constructor(props){
    super(props);
    this.state ={
        title: '',
        text: ''
    }    
    }
    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }


    //Set path back to default
    submitHandler = e=>{
        e.preventDefault();
        
        this.props.addNote({
            title: this.state.title,
            textBody: this.state.text
        })
        this.props.history.push("/");
}
    
    render(){
        return(
            <div className='createNote'>
                <h2>Create New Note:</h2>
                <Form onSubmit={this.submitHandler}>
                    <Input type='text' name='title' value={this.state.title} placeholder='Note Title' onChange={this.inputHandler}/>
                    <BodyInput type='text' name='text' value={this.state.text} placeholder='Text' onChange={this.inputHandler}/>
                    <Button type='submit'> Save</Button>
                </Form>
            </div>
        )
    }
}

export default CreateNote;