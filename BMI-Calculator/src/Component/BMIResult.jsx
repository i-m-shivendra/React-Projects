import React from 'react';

const BMIResult = ({ bmi, category }) => {
  if (bmi === null) return null;

  return (
    <div className="text-center mt-4">
      <h4>Your BMI: <span className="badge bg-secondary">{bmi}</span></h4>
      <p className="fw-semibold mt-2">Category: <span className="text-info">{category}</span></p>
    </div>
  );
};

export default BMIResult;
