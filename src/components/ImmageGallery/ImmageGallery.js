import { FetchData, needValues } from "API/FetchData";
import { ImageGalleryItem } from "../ImmageGalleryItem/ImmageGalleryItem";
import { Component } from "react";
import { toast } from 'react-hot-toast'
import { List } from "./ImageGallery.styled";

export class ImmageGallery extends Component {

    state ={
            images: [],
            textSearch: '',
            page: 1
          }

componentDidUpdate(prevProps, prevState){
    if (prevState.textSearch !== this.state.textSearch){
        this.renderGallery();
    }
}

renderGallery = async () => {
    const { textSearch, page } = this.state;
    //this.setState({ isLoading: true });

    try {
      const { hits, totalHits } = await FetchData(textSearch, page);

      if (totalHits === 0) {
        toast.warn(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      const newImages = needValues(hits);

      this.setState(({ images }) => ({
        images: [...images, ...newImages],
        totalHits,
      }));
    } catch (error) {
      this.setState({ error });
      toast.error('Oops... Something went wrong');
    } finally {
      this.setState({ isLoading: false });
    }
  };

    render(){
        return(
           <List>
                {this.state.images.map(image => {
                    return(
            <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            largeImageURL={image.largeImageURL}
            //showModal={showModal}
          />
                    )
                })}
           </List>
        )
    }
}