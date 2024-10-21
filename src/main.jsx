import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/Share/ScrollToTop";
import App from './App.jsx'
import './index.css'

import store from "./store/index";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <HashRouter>
            <ScrollToTop />
            <App />
        </HashRouter>
    </Provider>
)
