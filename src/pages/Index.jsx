import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageUploader from '../components/ImageUploader';
import ImageComparison from '../components/ImageComparison';
import EditingTips from '../components/EditingTips';

const Index = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [comparisonResult, setComparisonResult] = useState(null);

  const handleCompare = async () => {
    if (image1 && image2) {
      // Simulated API call for image comparison
      const result = await simulateImageComparison(image1, image2);
      setComparisonResult(result);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Comparison App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ImageUploader label="Upload Image 1" onImageUpload={setImage1} />
        <ImageUploader label="Upload Image 2" onImageUpload={setImage2} />
      </div>
      <div className="text-center mb-6">
        <Button onClick={handleCompare} disabled={!image1 || !image2}>
          Compare Images
        </Button>
      </div>
      {comparisonResult && (
        <div className="space-y-6">
          <ImageComparison image1={image1} image2={image2} />
          <EditingTips tips={comparisonResult.tips} />
        </div>
      )}
    </div>
  );
};

// Simulated image comparison function
const simulateImageComparison = async (image1, image2) => {
  // In a real app, this would be an API call to a backend service
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
  return {
    differences: "The images differ in lighting, composition, and subject pose.",
    tips: [
      "Adjust the lighting in the second image to match the first one's brightness and contrast.",
      "Try to align the subject's pose more closely with the reference image.",
      "Consider cropping the second image to match the composition of the first one.",
      "Pay attention to color balance and try to match the overall tone between the two images.",
    ]
  };
};

export default Index;