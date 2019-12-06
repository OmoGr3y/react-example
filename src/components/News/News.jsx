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
    this.state = { list };
  }
  render() {
    return (
      <div className="News">
        {list.map(item => {
          return (
            <div key={item.objectID}>
              <Header as="h1">{item.title}</Header>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
