import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getUserRepositories } from "./api/repositories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const data = await getUserRepositories("alexytsu");

    data.forEach(function(item, index, theArray) {
      console.log(item);
      theArray[index].tag = item.topics ? item.topics[0] : "null";
    });

    this.setState({ data });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <ul>
          {this.state.data.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url}>
                {repo.tag} {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
