import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      tempStocks: [],
      portfolios: [],
      sortAlphabet: false,
      sortPrice: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState(
          {
            stocks: data,
            tempStocks: data,
          },
          () => console.log(this.state)
        );
      })
      .catch((e) => console.log(e));
  }
  buyHandle = (stock) => {
    this.setState({
      portfolios: [...this.state.portfolios, stock],
    });
  };

  sellHandle = (stock) => {
    this.setState({
      portfolios: this.state.portfolios.filter(
        (portfolio) => portfolio !== stock
      ),
    });
  };

  filterByType = (type) => {
    const result = this.state.tempStocks.filter((stock) => stock.type === type);
    this.setState({
      stocks: result,
    });
  };

  sortAlphabet = () => {
    this.state.stocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
  };

  sortPrice = () => {
    this.state.stocks.sort((a, b) => a.price - b.price);
  };

  handleSort = (e) => {
    if (e.target.value === "Alphabetically") {
      this.setState({
        sortAlphabet: true,
        sortPrice: false,
      });
      this.sortAlphabet();
    } else if (e.target.value === "Price") {
      this.setState({
        sortPrice: true,
        sortAlphabet: false,
      });
      this.sortPrice();
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          filterByType={this.filterByType}
          sortAlphabet={this.state.sortAlphabet}
          sortPrice={this.state.sortPrice}
          handleSort={this.handleSort}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              buyHandle={this.buyHandle}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              sellHandle={this.sellHandle}
              stocks={this.state.portfolios}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
