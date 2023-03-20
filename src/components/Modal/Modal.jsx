import { ModalStyled, Overlay } from "./StyledModal"
import PropTypes from 'prop-types';
export function Modal ({largeImage,overlayClick}){
     
    return <Overlay onClick={overlayClick}>
  <ModalStyled >
    <img src={largeImage} alt="" />
  </ModalStyled>
</Overlay>
}

Modal.propTypes = {
  largeImage:PropTypes.string.isRequired,
  overlayClick:PropTypes.func.isRequired
}


