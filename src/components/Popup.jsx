import React from 'react';
import chargui from '../assets/chargui.png';
const Popup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed top-8 right-8 bg-yellow-100 border border-gray-200 shadow-lg rounded-lg p-4 pt-8 z-50">
      <button className="absolute top-2 right-2 bg-gray-100 border border-gray-300 p-1 rounded-full" onClick={onClose}>
        <span className="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="flex items-center gap-4">
        <img
          alt=""
          src={chargui}
          className="w-12 h-12 rounded-lg object-cover"
        />

        <div>
          <p className="font-medium text-gray-900">Marwane hargui</p>
          <p className="text-sm text-gray-500">
          Explorez la Physique à votre rythme, quand vous le souhaitez.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
