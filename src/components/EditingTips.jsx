import React from 'react';

const EditingTips = ({ tips }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Editing Tips</h3>
      <ul className="list-disc pl-5 space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-sm">{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default EditingTips;