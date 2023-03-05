import { AiFillAlert } from 'react-icons/ai';
import {Form, Label, Button, Input, Conteiner} from './Searchbar.styled';
export const Searchbar=()=>{
   
    return (
        <Conteiner>
        <Form>
            <Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  // value={name}
                  // onChange={this.handleChange}
                  placeholder="Search..."
                />
            </Label>
            <Button>{AiFillAlert}</Button>
        
            </Form>
        </Conteiner>
    );
  }