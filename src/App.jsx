/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Navber } from './components/Navber'
import Page from './components/Page.jsX'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {


  return (
    <Provider store={store}>
     <Navber/>
     <Page />
    </Provider>
  )
}

export default App
