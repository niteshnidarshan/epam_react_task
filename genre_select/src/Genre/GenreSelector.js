import React from 'react';

export class GenreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  handleGenreClick(genre) {
    if (this.props.onSelect) {
      this.props.onSelect(genre);
    }
  }

  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '30px'
    };

    const buttonBaseStyle = {
      margin: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      border: '1px solid #C11C84',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: 'white',
      color: '#007BFF'
    };

    const selectedStyle = {
      backgroundColor: '#C11C84',
      color: 'white'
    };

    const buttons = this.props.genres.map((genre) => {
      const isSelected = genre === this.props.selectedGenre;
      const style = isSelected
        ? { ...buttonBaseStyle, ...selectedStyle }
        : buttonBaseStyle;

      return React.createElement(
        'button',
        {
          key: genre,
          style,
          onClick: () => this.handleGenreClick(genre)
        },
        genre
      );
    });

    return React.createElement('div', { style: containerStyle }, ...buttons);
  }
}
