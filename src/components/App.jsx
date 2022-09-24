import React, { Component } from "react";
import { Searchbar } from './SearchBar/SearchBar';
import { fetchImages } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    imagesOnPage: 0,
    totalImages: 0,
    isLoading: false,
    images: null,
    error: null,
    currentImageUrl: null,
    currentImageDescription: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    // перший запит 
    if (prevState.query !== query) {
    // лоадинг - тру
      this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

    // запуск фетч
      fetchImages(query)
        .then(({ hits, totalHits }) => {
          // створення масиву зображень
          const imagesArray = hits.map(hit => ({
            // приймаються властивості кожного зображення 
            id: hit.id,
            description: hit.tags,
            smallImage: hit.webformatURL,
            largeImage: hit.largeImageURL,
          }));

          // запис змін в стейт
          return this.setState({
            page: 1,
            images: imagesArray,
            imagesOnPage: imagesArray.length,
            totalImages: totalHits,
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() =>
          // лоадінг - фолс
          this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
        );
    }

    // якщо сторінка 2 і більше
    if (prevState.page !== page && page !== 1) {
      // лоадінг - тру
      this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

      fetchImages(query, page)
        .then(({ hits }) => {
          const imagesArray = hits.map(hit => ({
            id: hit.id,
            description: hit.tags,
            smallImage: hit.webformatURL,
            largeImage: hit.largeImageURL,
          }));

          // зміна стейту
          return this.setState(({ images, imagesOnPage }) => {
            return {
              // додаються нові зображення до вже існуючих
              images: [...images, ...imagesArray],
              imagesOnPage: imagesOnPage + imagesArray.length,
            };
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() =>
          // лоадінг - фолс
          this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
        );
    }
  }

  //пощук запиту при сабміті 
  getQuery = query => {
    this.setState({ query });
  };

  // збільшення сторінки
  onNextFetch = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const {
      images,
      imagesOnPage,
      totalImages,
      isLoading,
    } = this.state;

    const onNextFetch = this.onNextFetch;
  
    return (
      <>
        <Searchbar onSubmit={this.getQuery} />

        {images && <ImageGallery images={images} />}

        {isLoading && <p>Loading</p>}

        {imagesOnPage >= 12 && imagesOnPage < totalImages && (
          <Button onNextFetch={onNextFetch} />
        )}

      </>
    );
  }
}
