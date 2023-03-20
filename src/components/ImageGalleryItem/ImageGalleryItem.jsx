
export function ImageGalleryItem({link, altTitle, largeImage}) {
  return <li className="gallery-item">
      <a href={largeImage}>
      <img src={link} alt={altTitle} />
      </a>
</li>
}