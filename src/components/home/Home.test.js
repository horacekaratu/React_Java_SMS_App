import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import { Home } from "./Home";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../Theme";
import { Features, GetStartedData, Testimonials } from "../../App";
const render = (ui, options) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    ),
    ...options,
  });
};

describe("Home Component", () => {
  it("should render App title", async () => {
    render(<Home />);
    const appTitle = await screen.findByRole("heading", {
      name: "Online Messages",
    });
    expect(appTitle).toBeInTheDocument();
  });
  it("should render App subtitle", async () => {
    render(<Home />);
    const appTitle = await screen.findByTestId("sub-heading");
    expect(appTitle).toBeInTheDocument();
  });
  describe("Get started section", () => {
    it("should render get started section", async () => {
      render(<Home />);
      const appTitle = await screen.findByRole("heading", {
        name: "Getting Started",
      });
      expect(appTitle).toBeInTheDocument();
    });
    it("should render get started section with subtitle", async () => {
      render(<Home />);
      const appSubTitle = await screen.findByText(
        "Explore the various features in the application"
      );
      expect(appSubTitle).toBeInTheDocument();
    });
    it("should render get started section with links", async () => {
      render(<Home />);

      await Promise.all(Object.entries(GetStartedData).map((getStartedItem)=>{
        return screen.findByRole("button", { name: "Send SMS", })
        .then(async sendSMSButton=>{
          expect(sendSMSButton).toBeInTheDocument();
        })
      }))
     
    });
  });
  describe("Features Section", () => {
    it("should render Features subtitle", async () => {
      render(<Home />);
      const testimonialsHeading = await screen.findByRole("heading", {
        name: "Features",
      });
      expect(testimonialsHeading).toBeInTheDocument();
    });
    it("should render Features paragaph", async () => {
      render(<Home />);
      const testimonialsText = await screen.findByText(
        "key features about our app"
      );
      expect(testimonialsText).toBeInTheDocument();
    });
    it("should render feature contaienr", async () => {
      render(<Home />);

      const FeatureContainer = await screen.findByTestId("feature-container");
      expect(FeatureContainer).toBeInTheDocument();
    });
    it("should render feature ", async () => {
      render(<Home />);
      // Features
      await Promise.all(

        Object.entries(Features).map((element, index) => {
          return screen.findByText(element[1].name).then(async fastName=>{
            
            const fastMessage = await screen.findByText(element[1].message);
            const fastIcon = await screen.findByTestId(`feature-icon-${index}`);
    
            await waitFor(() => {
              expect(fastName).toBeInTheDocument();
              expect(fastMessage).toBeInTheDocument();
              expect(fastIcon).toBeInTheDocument();
            });
  
          })
          
        })
      )
    
    });
  });
  describe("About Section", () => {
    it("should render About subtitle", async () => {
      render(<Home />);
      const testimonialsHeading = await screen.findByRole("heading", {
        name: "About The Product",
      });
      expect(testimonialsHeading).toBeInTheDocument();
    });
    it("should render about us paragaph", async () => {
      render(<Home />);
      const testimonialsText = await screen.findByText(
        "Get to know our product"
      );
      expect(testimonialsText).toBeInTheDocument();
    });
    
  });
  describe("Testimonials Section", () => {
    it("should render Testimonials subtitle", async () => {
      render(<Home />);
      const testimonialsHeading = await screen.findByRole("heading", {
        name: "Testimonials",
      });
      expect(testimonialsHeading).toBeInTheDocument();
    });
    it("should render Testimonials paragaph", async () => {
      render(<Home />);
      const testimonialsText = await screen.findByText(
        "What our clients say about us"
      );
      expect(testimonialsText).toBeInTheDocument();
    });
    it("should render testimonial container", async () => {
      render(<Home />);
      const testimonials = await screen.findByTestId("testimonials");
      expect(testimonials).toBeInTheDocument();
    });
    it("should render testimonial data", async () => {
      render(<Home />);

      await Promise.all(Object.entries(Testimonials).map((async testimonial=>{
        return screen.findByText(Testimonials[0].name).then(async personName=>{
          {
           
          const personPosition = await screen.findByText(testimonial[1].position);
          const personMessage = await screen.findByText(testimonial[1].message);
  
          await waitFor(() => {
            expect(personName).toBeInTheDocument();
            expect(personMessage).toBeInTheDocument();
            expect(personPosition).toBeInTheDocument();
          }
          )
        }}
        
        )

      })))
     
    });
  });
});
