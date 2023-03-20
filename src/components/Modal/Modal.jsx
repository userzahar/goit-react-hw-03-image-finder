import { ModalStyled, Overlay } from "./StyledModal"

export function Modal ({largeImage,overlayClick}){
     
    return <Overlay onClick={overlayClick}>
  <ModalStyled >
    <img src={largeImage} alt="" />
  </ModalStyled>
</Overlay>
    
}

