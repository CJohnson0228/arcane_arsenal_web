import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store.tsx'
import 'the-new-css-reset'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
)
