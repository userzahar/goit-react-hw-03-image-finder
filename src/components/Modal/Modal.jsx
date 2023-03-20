
export function Modal ({largeImage}){
     
    return <div className="overlay">
  <div className="modal">
    <img src={largeImage} alt="" />
  </div>
</div>
    
}
