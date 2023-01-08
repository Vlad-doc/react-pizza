import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "./index.css"
import App from "./App"
import store from "./store/store"

console.log(React)
console.log(ReactDOM)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)