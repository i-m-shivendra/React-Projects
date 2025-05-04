import { useState, useEffect } from "react";
import axios from "axios";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Result from "./Result";

function Convertor() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const API_KEY = "afce7235400d352ce0f15c6d";

  // Fetch available currencies
  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
      .then((response) => {
        const currencyCodes = response.data.supported_codes.map(
          ([code]) => code
        );
        setCurrencies(currencyCodes);
      })
      .catch((error) => {
        console.error("Error fetching currency codes:", error);
      });
  }, []);

  // Fetch conversion rate
  useEffect(() => {
    if (fromCurrency && toCurrency && amount) {
      axios
        .get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`
        )
        .then((response) => {
          setConvertedAmount(response.data.conversion_result);
        })
        .catch((error) => {
          console.error("Error fetching conversion rate:", error);
        });
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="col-md-6">
        <InputField
          label="Amount"
          value={amount}
          onChange={(value) => setAmount(value)}
        />
      </div>
      <div className="col-md-6">
        <Dropdown
          label="From Currency:"
          options={currencies}
          selected={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <Dropdown
          label="To Currency:"
          options={currencies}
          selected={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
      </div>

      {convertedAmount !== null && <Result amount={convertedAmount} />}
    </div>
  );
}

export default Convertor;
