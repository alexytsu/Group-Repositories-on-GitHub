import React, { Component } from "react";
import "./App.css";
import CategoryGrouping from "./components/CategoryGrouping/CategoryGrouping";
import { getUserRepositories } from "./api/repositories";

var _ = require("lodash");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categories: null
    };
  }

  /* 
    return all the GitHub topics that are being used as tags
    topics that are tags are formatted: cat-{tag}
  */
  getValidCategories(topics) {
    var tag = topics.filter(topic => topic.startsWith("cat-"));
    return tag.map(t => t.substr(4));
  }

  async componentDidMount() {
    // get a list of every repositories for the current user
    const data = await getUserRepositories("alexytsu");
    for (let repo of data) {
      repo.tag = this.getValidCategories(repo.topics);
    }

    // group by tag
    const categories = _.groupBy(data, repo => repo.tag);

    this.setState({ data });
    this.setState({ categories });
  }

  render() {
    const categories = this.state.categories;
    var rendered_categories = [];
    for (let category_name in categories) {
      var repos = categories[category_name];
      rendered_categories.push(
        <CategoryGrouping name={category_name} repos={repos} />
      );
    }

    return (
      <div className="App">
        <div className="header">
          <h1>Group Repos on GitHub</h1>
        </div>
        <div className="skinny">
          <div className="intro">
            <p>
              GitHub doesn't support grouping of repositories but I like to keep
              things organised. Uses data pulled from the GitHub API. Repos are
              "categorised" by adding a <em>tag</em> on GitHub in the format
              "cat-
              <em>category</em>"
            </p>
          </div>
          {rendered_categories}
        </div>
      </div>
    );
  }
}

export default App;
