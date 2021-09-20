import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.stocks.map((stock) => (
          <Stock
            stock={stock}
            key={stock.id}
            name={stock.name}
            ticker={stock.ticker}
            price={stock.price}
            sellHandle={this.props.sellHandle}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
