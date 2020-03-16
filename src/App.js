/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import CategoryGrouping from "./components/CategoryGrouping/CategoryGrouping";
import { getUserRepositories } from "./api/repositories";
import CSSReset from "./components/css-reset";

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
      <div>
        <CSSReset></CSSReset>
        <div
          css={{
            fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`,
            padding: 16,
            maxWidth: 1024,
            marginRight: "auto",
            marginLeft: "auto"
          }}
        >
          {rendered_categories}
        </div>
      </div>
    );
  }
}

export default App;
