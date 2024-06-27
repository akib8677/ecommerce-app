import React from "react";

type RemoveItemModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const RemoveItemModal: React.FC<RemoveItemModalProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 ">
      <div className="bg-white rounded-lg p-6 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-2xl">&times;</button>
        <h2 className="text-lg font-bold mb-4">Remove Item</h2>
        <p>Are you sure you want to remove this item?</p>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveItemModal;
