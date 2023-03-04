import { useContext } from 'react';

import FavoritesContext from '../store/FavoriteContext';
import BooksList from '../components/Books/BooksList';
function Favouritebookspage(){
    const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <BooksList books={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );

}
export default Favouritebookspage;


