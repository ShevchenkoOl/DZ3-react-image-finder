import { Image, GalleryItem } from "./ImmageGalleryItem.styled";


export const ImageGalleryItem = ({ url, tag, openModal, largeImageURL }) => {
    return (
      <GalleryItem>
        <Image
          src={url}
          alt={tag}
          onClick={() => openModal(largeImageURL, tag)}
        />
      </GalleryItem>
    );
  };