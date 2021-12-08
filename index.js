import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD:src/index.js
import { Provider } from 'react-redux'
=======
>>>>>>> 7a459fefb16525eac670b266b5aa129d14cc9e39:index.js
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import * as serviceWorker from './serviceWorker'
import theme from './themes'
<<<<<<< HEAD:src/index.js
=======
// eslint-disable-next-line
import '@fontsource/atma/400.css'
>>>>>>> 7a459fefb16525eac670b266b5aa129d14cc9e39:index.js

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
<<<<<<< HEAD:src/index.js
      <Provider store={store}>
        <App />
      </Provider>
=======
      <App />
>>>>>>> 7a459fefb16525eac670b266b5aa129d14cc9e39:index.js
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
