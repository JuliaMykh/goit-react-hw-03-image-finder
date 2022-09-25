import React, { Component } from "react";
import { Searchbar } from './SearchBar/SearchBar';
import { fetchImages } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { AppDiv } from './App.styled';

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
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    // перший запит 
    if (prevState.query !== query) {
    // лоадинг - тру
      this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

    //   this.setState({
    //   query:'',
    //   page: 1,
    //   images: null,
    // });

    // запуск фетч --- !!!! не працює
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
          console.log(imagesArray);

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

    // якщо підгрузити сторінки 2 і більше 
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

  //зміна квері в стейті при сабміті 
  getQuery = query => {
    // console.log(query);
    this.setState({ query });
  };

  // збільшення сторінки
  onNextFetch = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  //  кнопка модалки
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };


   // відкриття модалки і відображення поточного зображення 
  openModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      // console.log(e.target.nodeName);
      this.setState(({ showModal, }) => ({
        showModal: !showModal,
        currentImageUrl: currentImageUrl,
        currentImageDescription: currentImageDescription,
      }));
    }
  };

  render() {
    const {
      images,
      imagesOnPage,
      totalImages,
      isLoading,
      showModal,
      currentImageUrl,
      currentImageDescription,
    } = this.state;

    const onNextFetch = this.onNextFetch;
  
    return (
      <AppDiv>
        <Searchbar onSubmit={this.getQuery} />

        {images && <ImageGallery images={images} openModal={this.openModal} />}

        {isLoading && <p>Loading</p>}

        {imagesOnPage >= 12 && imagesOnPage < totalImages && (
          <Button onNextFetch={onNextFetch} />
        )}

         {showModal && (
          <Modal
            currentImageUrl={currentImageUrl}
            currentImageDescription={currentImageDescription}
            onClose={this.toggleModal}
          />
        )}

      </AppDiv>
    );
  }
}
