import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

const Testimonals = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
    },[]);

  return (
    <div>
       <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
       <div>
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
       </div>
    </div>
  );
}

export default Testimonals;
