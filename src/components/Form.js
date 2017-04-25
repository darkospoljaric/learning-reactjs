import React, { Component, PropTypes } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      authorValue : '',
      priceValue : ''
    };
  }

  static propTypes = {
    addBookAction: PropTypes.func.isRequired
  };

  handleButtonClick = (event) => {
    event.preventDefault();

    this.props.addBookAction(
      this.state.titleValue,
      this.state.authorValue,
      this.state.priceValue
    );

    this.setState({ titleValue: '' });
  };

  handleTitleChange = (event) => {
    this.setState({ titleValue: event.target.value });
  };

  handleAuthorChange = (event) => {
    this.setState({ authorValue: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ priceValue: event.target.value });
  };

  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="Book title"
               value={this.state.titleValue}
               onChange={this.handleTitleChange}
        />
        <input type="text" placeholder="Book author"
               value={this.state.authorValue}
               onChange={this.handleAuthorChange}
        />
        <input type="text" placeholder="Book price"
               value={this.state.priceValue}
               onChange={this.handlePriceChange}
        />
        <button onClick={this.handleButtonClick}>
          Add Book
        </button>
      </div>
    );
  }
}

export default Form;
