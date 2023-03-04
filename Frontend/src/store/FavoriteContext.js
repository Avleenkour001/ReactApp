import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritebook) => {},
  removeFavorite: (bookId) => {},
  itemIsFavorite: (bookId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritebook) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritebook);
    });
  }

  function removeFavoriteHandler(bookId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(book => book.id !== bookId);
    });
  }

  function itemIsFavoriteHandler(bookId) {
    console.log('HIII',userFavorites)
    return userFavorites.some(book => book.id === bookId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;