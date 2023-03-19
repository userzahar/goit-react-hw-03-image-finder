import { Component } from "react"
import { SearchBar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    value:''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value:e.target.elements.search.value})
  }
  render() {
    console.log("🎉",this.state.value)
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
};
