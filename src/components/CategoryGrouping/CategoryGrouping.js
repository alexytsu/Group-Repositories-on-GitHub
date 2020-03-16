/** @jsx jsx */
import { jsx } from "@emotion/core";
import Repository from "../Repository/Repository";

export default function CategoryGrouping(props) {
  var category_rows = [];
  console.log("Props.repos", props.repos);
  for (let i = 0; i < props.repos.length; i++) {
    var repo = props.repos[i];
    category_rows.push(<Repository repo={repo} />);
  }

  return (
    <div css={{ marginTop: 24 }}>
      <h2
        css={{
          fontSize: 20,
          marginBottom: 8,
          fontWeight: "bolder",
          color: "#4a4a4a"
        }}
      >
        {props.name ? `# ${props.name}` : "Uncategorised"}
      </h2>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 8,
          "@media (min-width: 480px)": {
            gridTemplateColumns: "1fr 1fr"
          }
        }}
      >
        {category_rows}
      </div>
    </div>
  );
}
