import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupWorker } from 'msw';
import { handlers } from './mocks/handlers';
import { ThemeProvider, styled } from 'styled-components';
import { GlobalStyles, Theme} from './Theme';
const Container=styled.div`
margin: 0 80px;
padding: 0px;
`
const worker= setupWorker(...handlers)
worker.start()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
  <GlobalStyles/>
  <React.StrictMode>
  <Container>
    <App />
    </Container>
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
