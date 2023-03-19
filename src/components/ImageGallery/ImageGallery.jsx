import { Button } from "components/Button/Button";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImage } from "fetchLink/link"
import { Component } from "react"

export class ImageGallery extends Component {
    state = {
        images: null,
    }
    componentDidUpdate(prevProps) {
        if (prevProps.searchText !== this.props.searchText) {
            getImage(this.props.searchText)
                .then(res => res.json())
                .then(img => this.setState({ images: img.hits }));
        }
        return;
    }
    render() {
        const { images } = this.state;
        console.log("🧮", images)
        
        return<> <ul className="gallery">
        {images && images.map(img => {
            return <ImageGalleryItem key={img.id} link={img.webformatURL} altTitle={img.tags} />
        })}
        </ul>
            {images&&<Button />}
        </>
    }
} 