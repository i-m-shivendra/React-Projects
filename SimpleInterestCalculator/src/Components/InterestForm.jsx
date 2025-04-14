import React from 'react';

const InterestForm = ({ principal, rate, time, setPrincipal, setRate, setTime, calculateInterest }) => {
  return (
    <form className="card p-4 shadow-sm">
      <div className="mb-3">
        <label htmlFor="principal" className="form-label">Principal Amount (₹)</label>
        <input
          type="number"
          className="form-control"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter principal amount"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rate" className="form-label">Rate of Interest (%)</label>
        <input
          type="number"
          className="form-control"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter rate of interest"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">Time (years)</label>
        <input
          type="number"
          className="form-control"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time in years"
        />
      </div>
      <button type="button" className="btn btn-primary w-100" onClick={calculateInterest}>
        Calculate Interest
      </button>
    </form>
  );
};

export default InterestForm;
