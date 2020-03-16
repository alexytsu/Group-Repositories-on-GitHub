/** @jsx jsx */
import { jsx } from "@emotion/core";

export default function RepositoryLine(props) {
  const repo = props.repo;

  return (
    <div
      css={{
        borderRadius: 3,
        border: "1px solid #d1d5da",
        padding: 16
      }}
    >
      <a
        css={{
          color: "#0366d6",
          fontWeight: "bolder",
          "&:visited": {
            color: "#0366d6",
            fontWeight: "bolder"
          }
        }}
        href={repo.html_url}
      >
        {repo.name}
      </a>
      <div css={{ fontSize: 13, color: "#4a4a4a", marginTop: 8 }}>
        {repo.description}
      </div>
    </div>
  );
}
