
export function ImageGalleryItem({ link, altTitle, largeImage }) {
  return <li className="gallery-item">
    <img src={link} alt={altTitle} lowsrc={largeImage}  />
</li>
}