import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";

interface SimpleGalleryProps {
  galleryID: string;
  images: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
  }[];
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({ galleryID, images }) => {
  useEffect(() => {
    let lightbox: any;

    const initLightbox = () => {
      lightbox = new PhotoSwipeLightbox({
        gallery: `#${galleryID}`,
        children: 'a',
        pswpModule: () => import("photoswipe"),
      });
      lightbox.init();
    };

    initLightbox();

    return () => {
      if (lightbox) {
        lightbox.destroy();
        lightbox = null;
      }
    };
  }, [galleryID]);

  return (
    <Box className="pswp-gallery" id={galleryID}>
      {images?.map((image, index) => (
        <Link
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={`${galleryID}-${index}`}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={image.thumbnailURL}
            alt={`Image ${index + 1}`}
            width={image.width}
            height={image.height}
            priority
            onLoadingComplete={(result) => {
              if (result.naturalWidth === 0) {
                console.log('Failed to load image', image.thumbnailURL);
              }
            }}
            onError={() => console.log('Error loading image', image.thumbnailURL)}
          />
        </Link>
      ))}
    </Box>
  );
};

export default SimpleGallery;
