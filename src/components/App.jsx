import { Component } from "react"
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
export class App extends Component {
  state = {
    value: '',
  }

  handleSearch = (searchText) => {
    this.setState({ value:searchText})
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery searchText={this.state.value} />
      </div>
    );
  }
};
