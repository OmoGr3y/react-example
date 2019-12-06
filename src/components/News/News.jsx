import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import Search from "../Search/Search";
import Table from "../Table/Table";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { list, searchTerm: "" };
  }

  onDismiss = id => {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  };

  onSearchChange = ({ target: { value } }) => {
    this.setState({
      searchTerm: value
    });
  };

  render() {
    const { list, searchTerm } = this.state;

    return (
      <div className="News">
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default News;
