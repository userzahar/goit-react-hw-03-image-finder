import { Button } from "components/Button/Button";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImage } from "fetchLink/link"
import { Component } from "react"
import { Triangle } from "react-loader-spinner";
import * as basicLightbox from 'basiclightbox';
export class ImageGallery extends Component {
    state = {
        images: null,
        isLoading: false,
        page: 1,
    }
    componentDidUpdate(prevProps) {
        const { page } = this.state;
        const { searchText } = this.props;
        console.log("обнова")
        if (prevProps.searchText !== searchText) {
            console.log("page: ", page)
            this.setState({ page: 1 })
            this.setState({ isLoading:true})
            getImage(searchText)
                .then(res => res.json())
                .then(img => {
                    if (img.hits.length !== 0)
                        {this.setState((perState) => {
                        return { page: perState.page + 1 }
                        })
                        return this.setState({ images: img.hits })}
                }).catch(error=>console.log(error)).finally(item => this.setState({ isLoading: false }));
        }  
        return;
    }
    heandleLoadMore = (e) => {
        e.preventDefault();
        const { page } = this.state;
        console.log("🧨 ~ page:", page)
        this.setState((perState) => {
                return { page: perState.page + 1 }
            })
        const { searchText } = this.props;
        this.setState({ isLoading: true })
        getImage(searchText, page)
            .then(res => res.json())
            .then(img => {
                    if (img.hits.length !== 0) this.setState(prev =>  {return {images: [...prev.images, ...img.hits]}} )
                }).catch(error=>console.log(error)).finally(item => this.setState({ isLoading: false }))
        
    }
    render() {
        const { images,isLoading } = this.state;
        return <>
            {isLoading&&<Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />}
            <ul className="gallery">
        {images && images.map(img => {
            return <ImageGalleryItem
                key={img.id}
                link={img.webformatURL}
                largeImage={img.largeImageURL}
                altTitle={img.tags} />
        })}
        </ul>
            {images&& <Button hendleButton={this.heandleLoadMore}/>}
        </>
    }
} 