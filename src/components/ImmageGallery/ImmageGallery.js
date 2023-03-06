import { FetchData } from "API/FetchData";
import { ImmageGalleryItem } from "components/ImmageGalleryItem/ImmageGalleryItem.styled";
import { Component } from "react";
//import { List } from "./ImageGallery.styled";

export class ImmageGallery extends Component(){

    const ={
            images: null,
          }

componentDidUpdate(prevProps, prevState){
    if (prevProps.value !== this.props.value){
        FetchData(this.props.value)
        .then((response) => response.JSON())
        .then((images) => {
            console.log('image:>>', images)
        //this.setState({images})
        })
    }

}
    render(){
        return(
            this.state.images &&
            this.state.images.hits.map( (el)=>{
             return <ImmageGalleryItem>{this.images.tags}</ImmageGalleryItem>
            })
//             <List>
//                 {this.state.images.map(image => {
//                     return(
//                         <ImmageGalleryItem
//             key={image.id}
//             webformatURL={image.webformatURL}
//             tags={image.tags}
//             largeImageURL={image.largeImageURL}
//             //showModal={showModal}
//           />
//                     )
//                 })}
// </List>
        )
    }
}