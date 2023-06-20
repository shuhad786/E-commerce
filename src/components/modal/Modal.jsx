import React from "react";

function Modal({ selectedItem, closeModal }) {
  if (!selectedItem) {
    return null; // Don't render the modal if no item is selected
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent backdrop-blur">
      <div className="bg-neutral-100 w-11/12 p-4 rounded-lg shadow-xl shadow-neutral-400 flex relative">
        <img className="rounded-xl w-60 h-56" src={selectedItem.image} />
        <div className="ml-8">
          <h2 className="text-xl font-bold mb-4">{selectedItem.title}</h2>
          <p className="text-md font-bold">
            Price: <span className="bg-white p-1 rounded-lg shadow-inner shadow-slate-400 text-sm font-semibold text-black">${selectedItem.price}</span>
          </p>
          <p className="text-md font-bold mt-4 bg-white p-1 rounded-lg shadow-inner shadow-slate-400 text-sm font-semibold text-black">
            <span className="text-sm font-semibold text-slate-500">{selectedItem.description}</span>
          </p>
          {/* Display other item details as needed */}
        </div>
        <button
          className="text-emerald-400 bg-tranparent text-3xl mr-3 mt-1 absolute top-2 right-2 "
          type="button"
          onClick={closeModal}
        >
          <i className="fa-regular fa-circle-xmark transistion-all duration:500 ease-out hover:ease-in hover:text-red-400"></i>
        </button>
      </div>
    </div>
  );
}

export default Modal;

