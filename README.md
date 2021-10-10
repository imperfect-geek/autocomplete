# autocomplete
A Search functionality where a user can search the movies or tv show by name. It also gives Autocomplete suggestions as the user types the search query.

## How to Use
- run **npm install**
- create a **.env** file
- set variables
- i)  **PORT**: for port address
- ii) **DB_URI**: for MongoDb Atlas URL (with the autocompletion tweeks)
- run **npm run start**

## About Routes
- __/movieSearch/:movie__ : access this route to get relevant movies from the database
- __/autocomplete/:movie__ : access this route to get autocompletion suggestions
