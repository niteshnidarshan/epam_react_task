import React from 'react';

export class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.initialQuery || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.query);
    }
  }

  handleKeyPress(event) {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px'
    };

    const inputStyle = {
      width: '70%',
      padding: '12px 16px',
      fontSize: '18px',
      border: '1px solid #ccc',
      borderRadius: '4px 0 0 4px',
      outline: 'none'
    };

    const buttonStyle = {
      backgroundColor: '#C11C84',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      fontSize: '18px',
      borderRadius: '0 4px 4px 0',
      cursor: 'pointer'
    };
    return React.createElement(
      'div',
      { style: containerStyle },
      React.createElement('input', {
        type: 'text',
        value: this.state.query,
        onChange: this.handleInputChange,
        onKeyDown: this.handleKeyPress,
        placeholder: 'Search Movie...',
        style: inputStyle
      }),
      React.createElement(
        'button',
        { onClick: this.handleSearch, style: buttonStyle },
        'Search'
      )
    );
  }
}