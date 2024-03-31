import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers";
import { ThemeProvider, styled } from "styled-components";
import { GlobalStyles, Theme, googleFontsUrl } from "./Theme";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import { Login } from "./components/Auth/Login";

const Container = styled.div`
  margin: 0 80px;
  padding: 0px;

`;
export const worker = setupWorker(...handlers);
worker.start();
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <React.StrictMode>
      <Container>
      <link rel="stylesheet" href={googleFontsUrl} />
        <BrowserRouter>
          <AuthContextProvider>
          <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<App/>} />

        </Routes>
            {/* <App /> */}
          </AuthContextProvider>
        </BrowserRouter>
      </Container>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
