import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Application from './application';
import {FormProvider} from './components/contexts/FormContext'

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


