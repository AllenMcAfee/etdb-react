
import React, {Component} from 'react';

class InputSearchFor extends Component {
  constructor(props){
    super(props);

    this.switchFor = this.switchFor.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleAdvancedSearchChange(e){
    this.props.onHandleAdvancedSearchChange(e)
  }

  handleTextChange(e) {
    this.props.onHandleTextChange(e);
  }

  switchFor(searchType) {

    const defaultSearchFor = (
      <div className="row">
        <input value={this.props.textValue} className="input-field1-text" type="text" name="searchFor" onChange={this.handleTextChange} onBlur={this.handleAdvancedSearchChange}  />
      </div>
    );

    switch (searchType) {
      case "":
      case "contains":
      case "isExact":
      case "startsWith":
      case "above":
      case "below":
        return defaultSearchFor;
      case "between":
      default:
        return null;
    }
  }

  render() {
    return (
      <div>{this.switchFor(this.props.params.searchType)}</div>
    )
  }
}


export default InputSearchFor