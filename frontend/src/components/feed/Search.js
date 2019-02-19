import React from "react";

import {
  Input
} from "reactstrap";

class Search extends React.Component {
  render() {
    return(
      <div>
        <Input type="text" id="search-box" placeholder="Search for at level positions..." />
      </div>
    );
  }
}

export default Search;