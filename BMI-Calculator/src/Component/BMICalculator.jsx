import React, { useState } from 'react';
import BMIForm from './BMIForm';
import BMIResult from './BMIResult';

const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setbmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height <= 0 || weight <= 0) {
      alert('Please enter valid weight and height');
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setbmi(calculatedBMI.toFixed(2));

    if (calculatedBMI < 18.5) setCategory('Underweight');
    else if (calculatedBMI < 24.9) setCategory('Normal weight');
    else if (calculatedBMI < 29.9) setCategory('Overweight');
    else if (calculatedBMI < 34.9) setCategory('Obesity Class 1');
    else if (calculatedBMI < 39.9) setCategory('Obesity Class 2');
    else setCategory('Obesity Class 3');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h1 className="card-title text-center text-primary mb-4">BMI Calculator</h1>
        <BMIForm
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          onCalculate={calculateBMI}
        />
        <BMIResult bmi={bmi} category={category} />
      </div>
    </div>
  );
};

export default BMICalculator;
