import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

const Modal = ({ imageUrl, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
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
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <div className="modal-container">
            <div className="modal-content max-h-full h-screen p-10">
              <div
                className="absolute top-0 right-0 cursor-pointer m-4 text-6xl bg-slate-200 w-16 h-16 flex justify-center items-center"
                onClick={closeModal}
              >
                &times;
              </div>
              <img
                src={imageUrl}
                alt="Image"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
