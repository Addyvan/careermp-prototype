import React from "react";

import {
  Input,
  Label,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";

class SmartInput extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.state = {
      query: ``,
      results: [],
      dropdownOpen: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
  }

  getSearchResults(query) {
    if (query.length > 0) {
      
      return this.props.searchIndex.search(`${query}^100 ${query}*^10 ${query}~2`);
      
    } else {
      return null;
    }

  }

  search = event => {
    const query = event.target.value;
    const results = this.getSearchResults(query);

    this.handleChange(query);

    if (results) {
      this.setState({
        results: results.slice(0, 5),
        query,
        dropdownOpen: true,
      })
    } else {
      this.setState({
        results: [],
        query,
        dropdownOpen: true,
      })
    }
  }

  handleChange(text) {
    this.props.onChange(Object.keys(this.props.searchValues).find(key => this.props.searchValues[key] === text));
  }

  render() {
    return(
      <Dropdown onBlur={this.onBlur} toggle={this.toggle} isOpen={this.state.dropdownOpen} style={{width: "100%", marginTop: "15px", marginBottom: "15px"}}>
        <DropdownToggle color="" style={{width: "100%"}}>
          <Label for={"search-" + this.props.section} className="sr-only">
            {this.props.placeholder}
          </Label>
          <Input
            tag={Input}
            type="text"
            id={"search-" + this.props.section}
            value={this.state.query}
            onChange={this.search}
            placeholder={this.props.placeholder}
            aria-owns={"results-" + this.props.section}
          />
        </DropdownToggle>

        {(this.state.results.length !== 0) ?
          <DropdownMenu id={"results-" + this.props.section} className="container-fluid aurora-search-results">
            <span aria-live="assertive" className="sr-only">
              {
                "Showing " + this.state.results.length + " results."
              }
            </span>
            {this.state.results.map(result =>
              <DropdownItem key={result.ref} onClick={() => {
                this.handleChange(this.props.searchValues[result.ref]);
                this.setState({query: this.props.searchValues[result.ref]});
              }}>
                {this.props.searchValues[result.ref]}
              </DropdownItem>
            )}
          </DropdownMenu>
          :
          (this.state.query.length > 0) &&
            <div id={"results-" + this.props.section} className={"container-fluid " + (this.state.dropdownOpen ? "show" : "")}>
              <div className="list-group-item" aria-live="assertive" style={{"position":"relative", "display":"block", "padding":"0.75rem 1.25rem"}}>
                No matching results
              </div>
            </div>
        }
      </Dropdown>
    );
  }
}

export default SmartInput;