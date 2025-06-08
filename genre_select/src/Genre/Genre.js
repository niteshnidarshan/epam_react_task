import React from 'react';
import { GenreSelector } from './GenreSelector';

export class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'Action'
    };
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
  }

  handleGenreSelect(genre) {
    console.log('Selected genre:', genre);
    this.setState({ selectedGenre: genre });
  }

  render() {
    const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

    return React.createElement(GenreSelector, {
      genres: genres,
      selectedGenre: this.state.selectedGenre,
      onSelect: this.handleGenreSelect
    });
  }
}