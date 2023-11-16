import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonals = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-16">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center">
                <Rating
                  style={{ maxWidth: 130 }}
                  value={review.rating}
                  readOnly
                />
                </div>
                <p className="text-center py-2">{review.details}</p>
                <h3 className="text-2xl text-yellow-400 text-center">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonals;
