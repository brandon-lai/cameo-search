# Cameo Search

Cameo Search is a full-stack application to search and view Cameo talent extracted from a mock api and database. The backend is made with Express and the frontend is made with React. 

## Functionality
### Backend
- Implemented an endpoint `HTTP GET /search` that accepts a query, and returns a filtered list of talent based on that query. The user is able to search by `username`, `name`, or `category`.

### Frontend
- Implemented a search bar where a user can type a query and calls the `/search` endpoint when the user presses `Enter` or the `Submit` button. The results of the query are then rendered in a table. 
- Implemented sorting of the results on the client-side. The user is able to sort by `price`, `score`, and `lastActiveAt`.
- Implemented filtering of the results on the client-side. The user is able to filter by `isAvailableForDirectMessage` and `isAvailableForBusinessRequests`.

## Initial setup
### Mac
- Install [Homebrew](https://brew.sh/), an open-source package manager for macOS.
  - If you already have Homebrew installed, run `brew update` and `brew upgrade` to make sure things are up-to-date.
- Install Node by running `brew install node`.

### Windows
- Install Node from [nodejs.org](https://nodejs.org/en/download/), you may need to restart your terminal.

### Linux
- Install Node via your distribution's package manager.

### Next steps after initial setup
#### Frontend
```
$ cd frontend
$ npm i
$ npm run start
// visit localhost:8080 in your browser
```

#### Backend
```
$ cd backend
$ npm i
$ node --experimental-json-modules src/index.js
// web server listening on local port 9090
```
