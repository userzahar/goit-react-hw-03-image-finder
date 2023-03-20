import { ButtonStyled } from "./StyledButton"
import PropTypes from 'prop-types';
export function Button({hendleButton}) {
    return <ButtonStyled onClick={hendleButton}>Load More</ButtonStyled>
}

Button.propTypes = {
    hendleButton:PropTypes.func.isRequired
}