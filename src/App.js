import React, {useState} from "react";
import { ToastContainer } from 'react-toastify';
import { Navigation } from "./routes"
import LanguageContext from "./LanguageContext";

import './app.scss'




export default function App() {

  const [language, setLanguage] = useState('en');

  return (
    <div className="app">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Navigation />
        <ToastContainer 
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            
          />
        </LanguageContext.Provider>

    </div>
  );
}

