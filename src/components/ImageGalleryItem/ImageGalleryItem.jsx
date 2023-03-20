import PropTypes from 'prop-types';
export function ImageGalleryItem({ link, altTitle, largeImage }) {
  return <li className="gallery-item">
    <img src={link} alt={altTitle} lowsrc={largeImage}  />
</li>
}

ImageGalleryItem.propTypes = {
  link:PropTypes.string.isRequired,
  altTitle:PropTypes.string.isRequired,
  largeImage:PropTypes.string.isRequired
}