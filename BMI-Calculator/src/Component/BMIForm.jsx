import React from 'react';

const BMIForm = ({ weight, setWeight, height, setHeight, onCalculate }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          className="form-control"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="height" className="form-label">Height (cm)</label>
        <input
          type="number"
          id="height"
          className="form-control"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>

      <button className="btn btn-primary w-100" onClick={onCalculate}>
        Calculate BMI
      </button>
    </>
  );
};

export default BMIForm;
