import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';


const ImageCarousel = () => {
  const banners = [
    {
      id: 1,
      imageUrl: banner1,
      altText: "Banner 1",
    },
    {
      id: 2,
      imageUrl: banner2,
      altText: "Banner 2",
    },
    {
        id: 3,
        imageUrl: banner3,
        altText: "Banner 3",
      },

  ];

  return (
    <Carousel>
      {banners.map((banner) => (
        <Paper key={banner.id}>
          <img
            src={banner.imageUrl}
            alt={banner.altText}
            style={{ width: "100%", height: "500px" }}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
