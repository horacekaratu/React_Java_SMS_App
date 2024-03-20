import { render as rtlRender, screen } from "@testing-library/react"
import { Footer } from "./Footer"
import { ThemeProvider } from "styled-components";
import { Theme } from "../../Theme";
const render = (ui, options) => {
    return rtlRender(ui, {
      wrapper: ({ children }) => (
          <ThemeProvider theme={Theme}>{children}</ThemeProvider>
      ),
      ...options,
    });
  };
  
describe("Footer Component",()=>{
    it("should render brand section",()=>{
        render(<Footer/>)
        expect(screen.getByTestId("footer-section")).toBeInTheDocument()
    })

    it("should render brand",()=>{
        render(<Footer/>)
        expect(screen.getByAltText("brand-image")).toBeInTheDocument()
    })

    it("should render slogan",()=>{
        render(<Footer/>)
        expect(screen.getByText("Simple solutions for simpler life")).toBeInTheDocument()
    })

    it("should render contact information",()=>{
        render(<Footer/>)
        expect(screen.getByText("NY City")).toBeInTheDocument()
        expect(screen.getByText("Kaukaza Street")).toBeInTheDocument()
        expect(screen.getByText("Miar Building, 18th Floor")).toBeInTheDocument()
        expect(screen.getByText("onlinemessages@faInfo.com")).toBeInTheDocument()
    })

    it("should render social media hhandles",()=>{
        render(<Footer/>)
        expect(screen.getByTestId("facebookicon")).toBeInTheDocument()
        expect(screen.getByTestId("instagramicon")).toBeInTheDocument()
        expect(screen.getByTestId("twittericon")).toBeInTheDocument()
        expect(screen.getByText("facebook.com")).toBeInTheDocument()
        expect(screen.getByText("instagram.com")).toBeInTheDocument()
        expect(screen.getByText("twitter.com")).toBeInTheDocument()
    })
    it("should render copywrite",()=>{
        render(<Footer/>)
        expect(screen.getByText("©Copyright 2024. All Rights Reserved.")).toBeInTheDocument()
    })

})