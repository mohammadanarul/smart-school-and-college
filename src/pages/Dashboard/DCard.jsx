import React from "react";

const DCard = () => {
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded">
        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
          <img
            src="http://localhost:5173/images/car/car.png"
            alt=""
            className="w-12 h-10"
          />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          <span className="text-xl font-bold">$8,430</span>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">All Vehicle</span>
            <span className="text-green-500 text-sm font-semibold ml-2">
              +12.6%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DCard;
