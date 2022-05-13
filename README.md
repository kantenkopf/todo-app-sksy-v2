# TODO-APP-SKSY-V2

## How to use from project root directory (recommended)

This is recommended. Every component can be set up and launched from the projects root folder without the need to switch directories.

### 1. Install dependencies & create .env files

```
npm run installAll
```

After running this script, copy the contents from `.env.example` into the newly created `.env` files. 

Change the `PORT` to your desired port (default value is 3000):

inside `.env`

```
PORT = <PORT>
```
IMPORTANT: Changing the port in `.env` requires a change of the proxy in `vue.config.js` in order for client-devmode to work correctly.

inside `client/vs.config.js`

```
configureWebpack: {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:<PORT>",
      },
    },
  },
},
```

Change the value of `DB_URI` to point to a remote or local MongoDB instance.

```
//e.g. connection URI for MongoDB Atlas

DB_URI = mongodb+srv://<username>:<password>@<path>.<to>.mongodb.net/<database>?retryWrites=true&w=majority
```

Upon the first server start a new collection will be automatically created in the target database.


### 2. Start server:
```
npm run server
```

### 3. Navigate to Website

Open http://localhost:3000 inside your browser or http://localhost:PORT, if you changed the value of `PORT` inside of `.env`.

## Dev options inside root directory

### Start client in dev mode (Compiles and hot-reloads for development)
```
npm run client
```

### Start client (dev mode) & server simultaneously
```
npm run dev
```
### Compiles and minifies client for production
```
npm run build
```

## Individually (not recommended)

To set up client and server individually, use the following commands from the root directory of this project.

### 1. Install dependencies and create .env

### Root dependencies:
```
npm install
```
Note: This can be skipped, if you do not want to launch the client or server from the root directory using the provided scripts.
### Client:
```
cd client && npm install
```
### Server:
```
cd server && npm install
```

In the server-directory: Create a `.env` file. Copy contents from `.env.example` and paste inside your newly created `.env`. See step 1 in previous section for further details on how to set your individual port and connect your MongoDB instance.

If you want to use the scripts of the project root, do the same as above inside the projects root folder.

### 2. Start server

Navigate to the server folder, then run:
```
npm run client
```

### 3. Navigate to Website

Open http://localhost:3000 inside your browser or http://localhost:PORT, if you changed the value of `PORT` inside of `.env`.


## Dev options inside individual directories

### Client directory
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration (VUE CLI)
See [Configuration Reference](https://cli.vuejs.org/config/).
