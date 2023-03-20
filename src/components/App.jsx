import { Component } from "react"
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { AppStyled } from "./StyledApp";
export class App extends Component {
  state = {
    value: '',
  }

  handleSearch = (searchText) => {
    this.setState({ value:searchText})
  }
  render() {
    return (
      <AppStyled>
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery searchText={this.state.value} />
      </AppStyled>
    );
  }
};

