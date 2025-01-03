import React, { useEffect, useState } from "react";

const PrintCheque = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      if (data.items) {
        setItems(data.items);
      }

    };
    fetchdata();
  }, []);

  return (
    <>
      {items.map(i => (
        <p>{i.name}, {i.description}</p>
      ))}
    </>
  );
}
export default PrintCheque;