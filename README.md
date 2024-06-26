---

# Moviezueq

Moviezueq is a web application built with React that serves as a simple movie information platform. It utilizes Zustand for state management, React Query (Tanstack) for efficient data fetching, Axios for API interactions, TypeScript for type safety, and React Hook Form + Yup for form validation. The application interacts with the MoviesAPI provided by [moviesapi.ir](https://moviesapi.ir/).<br>
The name Moviezueq is derived from combining 'movie' with 'zustand' and 'reactquery', reflecting its focus on movies and the technologies used in its development.

## Pages Included

- **Login Page**: Includes login and registration forms with validation using Yup + React Hook Form. Users can register by entering their name, email, and password.
- **Home**: Provides an overview of user information upon login, including name and email. And includes genre filtering for movies and an infinite scroll component for movies listing using React Infinite Scroll Component.
- **Movies Page**: Displays detailed information about each movie, including IMDb ratings, directors, actors, release year, and so on. Also includes a simple breadcrumb navigation.

## Additional Features

- **Search**: Allows users to search for movies by name using an input search feature.
- **Multilingual**: Supports both Persian (RTL) and English (LTR) languages.

## Deployment

This project is deployed and can be accessed at [Moviezueq](https://moviezueq.vercel.app/).

## Development Setup

To run the project locally:

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies using:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
To build the project for production, use:
```bash
npm run build
```

## Dependencies

### Main Dependencies

- **@hookform/resolvers**: ^3.6.0
- **@tanstack/react-query**: ^5.45.0
- **axios**: ^1.7.2
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-hook-form**: ^7.51.5
- **react-infinite-scroll-component**: ^6.1.0
- **react-router-dom**: ^6.23.1
- **yup**: ^1.4.0
- **zustand**: ^4.5.2

### Development Dependencies

- **@types/react**: ^18.2.14
- **@types/react-dom**: ^18.2.6
- **@typescript-eslint/eslint-plugin**: ^5.61.0
- **@typescript-eslint/parser**: ^5.61.0
- **@vitejs/plugin-react**: ^4.0.1
- **autoprefixer**: ^10.4.19
- **eslint**: ^8.44.0
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.1
- **postcss**: ^8.4.38
- **tailwindcss**: ^3.4.4
- **typescript**: ^5.0.2
- **vite**: ^4.4.0

For detailed package versions, refer to `package.json`.

---
