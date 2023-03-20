import PropTypes from 'prop-types';
import { Button } from "components/Button/Button";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Modal } from "components/Modal/Modal";
import { getImage } from "fetchLink/link"
import { Component } from "react"
import { Triangle } from "react-loader-spinner";

export class ImageGallery extends Component {
    static = {
        searchText:PropTypes.string.isRequired
    }
    state = {
        images: null,
        isLoading: false,
        page: 1,
        isHidden: false,
        modalSrc:null,
    }
        componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e => {
        if (e.code === "Escape") {
            this.setState({ isHidden:false})
        }
            
    }
    componentWillUnmount =()=> {
        window.removeEventListener("keydown", this.handleKeyDown)
    }
    componentDidUpdate(prevProps) {
        const { searchText } = this.props;
        if (prevProps.searchText !== searchText) {
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
    handleOverlay = ({target}) => {
        if(target.tagName !=="IMG") this.setState({isHidden:false})
    }
    handleImage = ({ target }) => {
        if(target.tagName === "IMG") 
        {this.setState({
            isHidden: true,
            modalSrc:target.lowsrc,
        })
        } else {
            this.setState({
            isHidden: false,
        })
        }
    }
    render() {
        const { images,isLoading,isHidden } = this.state;
        return <div >
            {isLoading&&<Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />}
            <ul className="gallery" onClick={this.handleImage}>
                {images && images.map(img => {
            return <ImageGalleryItem
                        key={img.id}
                        link={img.webformatURL}
                        altTitle={img.tags}
                        largeImage={img.largeImageURL}
                    />
        })}
        </ul>
            {images && <Button hendleButton={this.heandleLoadMore} />}
            {isHidden && <Modal
                overlayClick={this.handleOverlay}
                largeImage={this.state.modalSrc} />}
        </div>
    }
} 