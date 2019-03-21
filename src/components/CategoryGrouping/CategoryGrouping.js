import React from "react";
import RepositoryLine from "../Repository/RepositoryLine";
import "./CategoryGrouping.css"

export default function CategoryGrouping(props) {
  var category_rows = [];
  console.log("Props.repos", props.repos);
  for (let i = 0; i < props.repos.length; i++) {
    var repo = props.repos[i];
    category_rows.push(<RepositoryLine repo={repo} />);
  }

  return (
    <div className="card">
      <h2># {props.name}</h2>
      {category_rows}
    </div>
  );
}
