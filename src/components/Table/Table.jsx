import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import Button from "../Button/Button";

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const Table = ({ list, pattern, onDismiss }) => {
  return (
    <div>
      {list.filter(isSearched(pattern)).map(item => {
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
              <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
