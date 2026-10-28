# 📸 Photo Gallery Web App

A responsive Photo Gallery Web Application built using React, Vite, and Tailwind CSS as part of the Celebrare Frontend React Internship Pre-Screening Assignment.

The application fetches photos from the Picsum Photos API and allows users to search by author name and manage their favourite photos.

## ✨ Features

* **Photo Gallery:** Fetches and displays 30 photos from the Picsum Photos API.
* **Responsive Design:** Displays photos in a responsive grid for desktop, tablet, and mobile devices.
* **Search Photos:** Filters photos by author name in real time without additional API requests.
* **Favourites:** Add or remove photos from favourites using the heart icon.
* **Persistent Storage:** Saves favourite photos in localStorage, preserving them after page refreshes.
* **Loading & Error Handling:** Displays a loading indicator while fetching photos and an error message if the request fails.
* **Custom Hook:** Uses `useFetchPhotos` to separate API logic from the UI.
* **State Management:** Uses `useReducer` to manage favourite photos.
* **Performance Optimization:** Uses `useCallback` and `useMemo` for search handling and filtering.

## 🛠️ Technologies Used

* React
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* Picsum Photos API
* React Hooks
* Browser localStorage

## 🌐 API Reference

**Picsum Photos API**

`https://picsum.photos/v2/list?limit=30`

This API provides the photo URLs, author names, and other details used to display the gallery.

## 🚀 Getting Started


### Installation

1. Clone this repository:

   ```bash
   git clone adarshadarsh6305-a11y
   ```

2. Navigate to the project folder:

   ```bash
   cd celebrare-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## 📂 Key Implementation Details

* **`useFetchPhotos`:** Fetches photos from the API and returns `photos`, `loading`, and `error`.
* **`useReducer`:** Handles adding and removing favourite photos.
* **`localStorage`:** Persists favourite selections across page refreshes.
* **`useCallback`:** Memoizes the search handler function.
* **`useMemo`:** Computes the filtered photo list when its dependencies change.

## 🎯 Assignment Objective

This project demonstrates practical knowledge of React functional components, Hooks, API integration, state management, localStorage, and responsive UI development.

## 👨‍💻 Author

**M. Adarsh**

GitHub: https://github.com/adarshadarsh6305-a11y
