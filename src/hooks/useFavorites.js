import { useEffect, useReducer } from 'react';

const STORAGE_KEY = 'celebrare-favorites';

// Load saved favourites from localStorage
function getSavedFavorites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// Reducer handles adding and removing favourites
function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE': {
      const photoId = action.id;

      if (state.includes(photoId)) {
        return state.filter((id) => id !== photoId);
      }

      return [...state, photoId];
    }

    default:
      return state;
  }
}

function useFavorites() {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    getSavedFavorites
  );

  // Save favourites whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Toggle a photo's favourite status
  function toggleFavorite(photoId) {
    dispatch({ type: 'TOGGLE', id: photoId });
  }

  return { favorites, toggleFavorite };
}

export default useFavorites;