import React from 'react';

const ImageComparison = ({ image1, image2 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Image 1</h3>
        <img src={image1} alt="Image 1" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Image 2</h3>
        <img src={image2} alt="Image 2" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ImageComparison;