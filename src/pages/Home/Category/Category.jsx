import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import Slide1 from './../../../assets/home/slide1.jpg'
import Slide2 from './../../../assets/home/slide2.jpg'
import Slide3 from './../../../assets/home/slide3.jpg'
import Slide4 from './../../../assets/home/slide4.jpg'
import Slide5 from './../../../assets/home/slide5.jpg'


const Category = () => {
  return (
    <div className='max-w-6xl mx-auto my-12'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
