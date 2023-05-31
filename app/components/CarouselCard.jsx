"use client";
import { useState } from "react";
import Image from "next/image";

const CarouselCard = ({ image, title, language, description }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="flip-box m-auto cursor-pointer" onClick={openPopup}>
        <div className="flip-box-inner m-auto">
          <div className="flip-box-front">
            <Image src={image} alt="Paris" width={1200} height={800} />
          </div>
          <div className="flip-box-back">
            <h2 className="pt-5 text-2xl underline underline-offset-8">
              {title}
            </h2>
            <div className="pt-3">
              {language.map((lang, index) => (
                <p key={index}>{lang}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closePopup}
        >
          <div className="max-w-screen-xl p-6 bg-white rounded-lg">
            <Image src={image} alt="Paris" width={1200} height={800} />
            <h2 className="text-xl font-bold my-4">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselCard;
