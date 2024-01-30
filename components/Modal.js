import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

const Modal = ({ imageUrl, setSlide }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setSlide(2);
    //setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div>
      <img
        loading="lazy"
        src={imageUrl}
        alt="Obrazek projektu"
        onClick={openModal}
        className="cursor-pointer"
      />
      {/* <div className="relative h-64 w-full bg-slate-200 " onClick={openModal}>
        <CldImage
          src={imageUrl} // Cloudinary URL
          layout="fill"
          objectFit="cover"
          alt="Obrazek projektu"
        />
      </div> */}
    </div>
  );
};

export default Modal;
