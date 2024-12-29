import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const PrintCheque = () => {
  const [data, setData] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    Papa.parse("/data/file.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  const handlePrintAndSave = () => {
    window.print();
    const newData = { recipient, bank, amount };

    fetch("/api/saveCheque", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data saved:", result);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div className="printcheque">
      <div className="form-group">
        <label htmlFor="recipient">Recipient Name</label>
        <select
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        >
          <option value="">Select Recipient</option>
          {data.map((item, index) => (
            <option key={index} value={item.recipient}>
              {item.recipient}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="bank">Bank Name</label>
        <select
          id="bank"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        >
          <option value="">Select Bank</option>
          {data.map((item, index) => (
            <option key={index} value={item.bank}>
              {item.bank}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="printpreview">
        <div className="cheque-details"></div>
        <h2>Cheque Details</h2>
        <p>
          <strong>Recipient:</strong> {recipient}
        </p>
        <p>
          <strong>Bank:</strong> {bank}
        </p>
        <p>
          <strong>Amount:</strong> {amount}
        </p>
      </div>
      <button onClick={handlePrintAndSave}>Print Cheque</button>
    </div>
  );
};

export default PrintCheque;
