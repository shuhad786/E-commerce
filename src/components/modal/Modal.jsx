import React from "react";

function Modal({ selectedItem, closeModal }) {
  if (!selectedItem) {
    return null; // Don't render the modal if no item is selected
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent backdrop-blur">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Name: {selectedItem.name}</h2>
        <p>Price: {selectedItem.price}</p>
        <p>Description: {selectedItem.description}</p>
        {/* Display other item details as needed */}
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
