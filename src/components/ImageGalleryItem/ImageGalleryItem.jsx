
export function ImageGalleryItem({link, altTitle}) {
    return <li className="gallery-item">
  <img src={link} alt={altTitle} />
</li>
}