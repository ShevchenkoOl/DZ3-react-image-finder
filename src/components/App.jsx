import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ImmageGallery } from "./ImmageGallery/ImmageGallery";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {

  state = {
    textSearch: ''
  }

handleSubmit= (textSearch) => {
  this.setState({textSearch})
}

  render(){
  return (
    <div>
      <Searchbar onSearch={this.handleSubmit} />
      <ImmageGallery value={this.state.textSearch}/>
      <GlobalStyle />
    </div>
  );
}
};
