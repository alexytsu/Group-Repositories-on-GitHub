import React from "react";
import "./Repository.css";

export default function RepositoryLine(props) {
  const repo = props.repo;

  return (
    <div className="repository_row">
      <div className="repository_name">
        <a href={repo.html_url}> {repo.name}</a>
      </div>
      <div className="repository_description">
        <a href={repo.html_url}>{repo.description}</a>
      </div>
      <div className="repository_link">
        <a href={repo.html_url}>Link</a>
      </div>
    </div>
  );
}
