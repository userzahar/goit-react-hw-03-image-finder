import { ButtonStyled } from "components/Button/StyledButton";
import { Component } from "react";
import { SearchBarStyled } from "./StyledForm";
import PropTypes from 'prop-types';
export class SearchBar extends Component{
  static = {
    onSubmit:PropTypes.func.isRequired
  }
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
        return <SearchBarStyled>
  <form className="form" onSubmit={this.handleSubmit}>
    <ButtonStyled type="submit" className="button">
      <span className="button-label">Search</span>
    </ButtonStyled>

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
</SearchBarStyled>
    }
}
