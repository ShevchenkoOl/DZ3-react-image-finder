//import { AiFillAlert } from 'react-icons/ai';
import { Component } from 'react';
import { Form, Button, Input, Conteiner } from './Searchbar.styled';

export class Searchbar extends Component {
 
    state = {
              value: ''
           }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSumit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <Conteiner>
        <Form onSubmit={this.handleSubmit}>         
          <Button type='submit'/>
          <Input
              type="search"
              name="name"
              //id="name"
              value={value}
              onChange={this.handleChange}
              placeholder="Search..."
            />
          </Form>
      </Conteiner>
    );
  }
}
