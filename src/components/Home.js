import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { homedata } from "./Data/AllData";



function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const displayItems = homedata.map((item) => {
        return(<>
                  <div className='itemContent d-flex'>
                    <div className='left'>
                      <h1>{item.name}</h1>
                      <p>{item.desc}</p>
                      <img src={item.signature} alt={item.name} />
                    </div>
                    <div className='right'>
                      <img src={item.cover} alt='' />
                    </div>
                  </div>
                </>
              )
    })
    return (
      <section className="home">
        <div className="container">
          <Slider {...settings}>
    {displayItems}
          </Slider>
        </div>
      </section>
    );
}
export default Home;