import { Component } from "react";

export class SearchBar extends Component{
  state = {
    search:''
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.search)
  }
  
  render() {
        return <header className="searchbar">
  <form className="form" onSubmit={this.handleSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      name="search"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
    }
}