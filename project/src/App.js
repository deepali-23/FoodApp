import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faQuestionCircle,
  faBuilding,
  faPercentage,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// const result = React.createElement("h1", { id: "result" }, [
//   React.createElement("h1", {}, "I am an h1 tag"),
//   React.createElement("h1", {}, "I am an h2 tag"),
//   [React.createElement("h6", {}, "I am h6 tag")],
// ]);
library.add(faSearch);
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png"
        />
      </div>{" "}
      <div className="nav-items">
        <ul>
          <li className="icons">
            <FontAwesomeIcon icon={faBuilding} />
            &nbsp; Swiggy Corporate
          </li>
          <li className="icons">
            <FontAwesomeIcon icon={faSearch} />
            &nbsp; Search
          </li>
          <li className="icons">
            <FontAwesomeIcon icon={faPercentage} />
            &nbsp; Offers
          </li>
          <li className="icons">
            <FontAwesomeIcon icon={faQuestionCircle} />
            &nbsp; Help
          </li>
          <li className="icons">
            {" "}
            <FontAwesomeIcon icon={faUser} />
            &nbsp; User
          </li>
          <li className="icons">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp; Cart
          </li>
        </ul>
      </div>
    </div>
  );
};
const images = [
  {
    id: "1",
    alt: "Image1",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
  },
  {
    id: "2",
    alt: "Image2",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
  },
  {
    id: "3",
    alt: "Image3",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
  },
  {
    id: "4",
    alt: "Image4",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
  },
  {
    id: "5",
    alt: "Image5",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
  },
  {
    id: "6",
    alt: "Image6",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
  },
  {
    id: "7",
    alt: "Image7",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
  },
  {
    id: "8",
    alt: "Image8",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
  },
  {
    id: "9",
    alt: "Image9",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
  },
  {
    id: "10",
    alt: "Image10",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
  },
  {
    id: "11",
    alt: "Image11",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
  },
  {
    id: "11",
    alt: "Image11",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
  },
];
const ReactCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {" "}
      <h2 class="heading">Deepali, what's on your mind?</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image) => (
          <div>
            <img className="logocarousel" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </>
  );
};
const cardData = [
  {
    id: "1",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc",
    alt: "Image1",
  },
  {
    id: "2",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666",
    alt: "Image2",
  },
  {
    id: "3",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e",
    alt: "Image3",
  },
  {
    id: "4",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    alt: "Image4",
  },
  {
    id: "5",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_411450.JPG",
    alt: "Image5",
  },
  {
    id: "6",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/80ca62f0de020f8cbe39fd034d3325d5",
    alt: "Image6",
  },
  {
    id: "7",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/972a37599772cdc7df93a0855ad87591",
    alt: "Image7",
  },
  {
    id: "8",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ttl0azfrovxbrheica7z",
    alt: "Image8",
  },
  {
    id: "9",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ttl0azfrovxbrheica7z",
    alt: "Image9",
  },
  {
    id: "10",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vxtmj260dgp7kpjakhzz",
    alt: "Image10",
  },
  {
    id: "11",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dr5aflzisbsyi4ntu6th",
    alt: "Image11",
  },
  {
    id: "12",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/txldrpaeeclgzdhillms",
    alt: "Image12",
  },
];
const RestaurantCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <h2 class="heading">Top restaurant chains in Delhi</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {cardData.map((item) => {
          return (
            <div>
              <img src={item.src} alt={item.alt} className="res-logo" />
              <h3>{resObj.card.card.title}</h3>
              <h4>{resObj.card.card.description}</h4>
              <h4>{resObj.card.card.count}</h4>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
const resObj = {
  card: {
    card: {
      "@type":
        "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
      collectionId: "83637",
      title: "Burger",
      description:
        "Satisfy your cravings with these fresh and flavoursome burgers.",
      imageId:
        "COLLECTIONS/IMAGES/MERCH/2024/5/3/d206399f-54fd-497d-9fec-7d34848ac974_pic",
      aspectRatio: "3.44",
      cta: {
        link: "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger,burger,layout_Burger,ads_pc_burger",
        type: "collectionv2",
      },
      type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
      count: "19 restaurants",
    },
  },
};

const Body = () => {
  return (
    <div className="body">
      {" "}
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ReactCarousel />
        <RestaurantCard />
        <Body />
      </div>
    </div>
  );
};

export default AppLayout;
