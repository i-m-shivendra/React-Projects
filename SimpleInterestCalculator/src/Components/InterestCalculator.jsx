import React, { useState } from 'react';
import Header from './Header';
import InterestForm from './InterestForm';
import InterestResult from './InterestResult';

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    if (P <= 0 || R <= 0 || T <= 0) {
      alert('Please enter positive values for all fields.');
      return;
    }

    const calculatedInterest = (P * R * T) / 100;
    setInterest(calculatedInterest.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Header />
          <InterestForm
            principal={principal}
            rate={rate}
            time={time}
            setPrincipal={setPrincipal}
            setRate={setRate}
            setTime={setTime}
            calculateInterest={calculateInterest}
          />
          <InterestResult interest={interest} />
        </div>
      </div>
    </div>
  );
};

export default InterestCalculator;
