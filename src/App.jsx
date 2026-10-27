import { useState, useCallback, useMemo } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import useFavorites from './hooks/useFavorites';

function App() {
  const {photos, loading, error} = useFetchPhotos();

  const {favorites, toggleFavorite} = useFavorites();

  const [searchQuery, setSearchQuery]= useState('');

  // Handle search input
  const handleSearch = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  // Filter photos by author
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [photos, searchQuery]);

if (loading) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
        role="status"
        aria-label="Loading photos"
      />
      <p className="text-lg text-gray-600">Loading photos...</p>
    </div>
  );
}

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Celebrare Photo Gallery
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Explore photos from talented photographers
        </p>

        {/* Search */}
        <div className="mx-auto mb-8 max-w-md">
          <input
            type="text"
            placeholder="Search by author name..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Photo grid */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPhotos.map((photo) => {
              const isFavorite = favorites.includes(photo.id);

              return (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <img
                    src={photo.download_url}
                    alt={`Photo by ${photo.author}`}
                    className="h-56 w-full object-cover"
                  />

                  <div className="flex items-center justify-between p-4">
                    <p className="font-medium text-gray-800">
                      {photo.author}
                    </p>

                    <button
                      type="button"
                      onClick={() => toggleFavorite(photo.id)}
                      aria-label={
                        isFavorite
                          ? `Remove ${photo.author} from favorites`
                          : `Add ${photo.author} to favorites`
                      }
                      aria-pressed={isFavorite}
                      className={`text-2xl transition-colors ${
                        isFavorite
                          ? 'text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      {isFavorite ? '♥' : '♡'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="py-10 text-center text-gray-500">
            No photos found for "{searchQuery}".
          </p>
        )}
      </div>
    </div>
  );
}

export default App;