import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { MongoClient } from "mongodb";

const PrintCheque = () => {
  const [data, setData] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const client = new MongoClient('mongodb+srv://admin:admin@cluster0.sbw1w.mongodb.net/?retryWrites=true&w=majority');
      try {
        await client.connect();
        const database = client.db("Cluster0");
        const collection = database.collection("database"); // Replace with your collection name
        const data = await collection.find({}).toArray();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        await client.close();
      }
    };

    fetchData();
  }, []);

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
    </div>
  );
};

export default PrintCheque;