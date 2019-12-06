import React, { Component } from "react";
import { Header } from "semantic-ui-react";

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
    const isSearched = searchTerm => item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      <div className="News">
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
            value={searchTerm}
          />
        </form>
        {list.filter(isSearched(searchTerm)).map(item => {
          return (
            <div key={item.objectID}>
              <Header as="h1">{item.title}</Header>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <div>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
