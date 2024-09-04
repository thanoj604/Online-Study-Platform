import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards";
import axios from "axios";
import { useState, useEffect } from "react";

function Freebook() {

    const [book, setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try{
              const res =  await axios.get("http://localhost:4001/book");
              console.log(res.data)
              setBook(res.data.filter((data) => data.Category === "Free"));
            }catch(error){
                console.log(error);
            }
        };
        getBook();
    }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <h1 className="font-semobold text-xl pb-2">Free Courses Offered.</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae alias
          modi eius ullam dolore enim mollitia porro esse! Quia inventore unde
          dignissimos iure totam laboriosam nobis nisi minus enim aperiam?
        </p>
      </div>
      <div className="w-screen p-5">
        <Slider {...settings}>
          {book.map((item)=>(
            <Cards item = {item} key = {item.id}/>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
