import React from "react";

const Stock = ({ name, ticker, price, buyHandle, sellHandle, stock }) => {
  const handleOnclick = () => {
    if (buyHandle) {
      console.log("stock: ", stock);
      buyHandle(stock);
    } else {
      sellHandle(stock);
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleOnclick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: {price}{" "}
            {console.log("buyhandle: ", buyHandle, " sellhandle: ", sellHandle)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
