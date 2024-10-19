
import React, {useEffect,useState} from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FrontCards from './FrontCards';
import axios from "axios"


function Freebook() {
  const [fashion,setFashion]=useState([])
  useEffect(()=>{
      const getFashion=async()=>{
          try{
          const response=await axios.get("http://localhost:4001/fashion")
          console.log(response.data)
          const data=response.data.filter((data) => data.catagory==="Most popular");
          setFashion(data)

          }catch(error){
              console.log(error)
              

          }
      }
      getFashion()

  },[])

  
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 '>
    <div>
    <br/>
    <br/>
    <h1 className='font-semibold text-2xl pb-2'>Tara-Special</h1>
    <p>Step into effortless style with our store's most popular dress item: the classic wrap dress. Renowned for its versatility and timeless appeal, this dress has become a staple in every wardrobe.
    Elevate your wardrobe with the dress that’s captured the hearts of our customers. Visit our store today and find out why the wrap dress is a must-have for fashion enthusiasts everywhere.


    </p>
    
    </div>
   <div>
   <Slider {...settings}>
   {fashion.map((item)=>(
     <FrontCards item={item} key={item.id}/>
                ))}
      </Slider>

      </div>
   </div>
    
    
    </>
  )
}

export default Freebook;
