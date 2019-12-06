import React, { Component } from "react";
import { Header } from "semantic-ui-react";
class Table extends Component {
  state = {};
  isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(this.isSearched(pattern)).map(item => {
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
                <button onClick={() => onDismiss(item.objectID)} type="button">
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

export default Table;
