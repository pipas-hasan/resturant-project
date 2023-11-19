/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";

const Cover = ({ img, title, para }) => {
  return (
    <Parallax
      className="mb-10"
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[450px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-xl">{para}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
