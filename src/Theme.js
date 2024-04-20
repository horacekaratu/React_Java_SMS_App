import { createGlobalStyle } from "styled-components";
export const googleFontsUrl =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;700&display=swap";

export const Theme = {
  // spacing

  // Typography

  // fonts

  fonts: {
    heading: "Roboto, sans-serif",
    body: "Montserrat, sans-serif",
  },

  // heading

  // type styles

  // colors
  icons: {
    sizes: {
      medium: "16px",
      large: "32px",
      extraLarge: "96px",
    },
  },
  colors: {
    neutrals: {
      white: "#FFFFFF",
      lightGrey: "#CCCCCC",
      mediumGrey: "#999999",
      darkGrey: "#333333",
      black: "#000000",
    },
    contextual: {
      error: "#B33B3B",
      success: "#3DB33B",
      warning: "#B1B33B",
      info: "#3D3BB3",
    },
    lightNeutral: {
      light: "#FFFFFF",
    },
    darkNeutral: {
      dark: "#000000",
    },
    primary: {
      background: "#C3C3EB",
      saturated: "#1D1BB3",
      light: "#4E4CE6",
      base: "#3D3BB3",
      dark: "#232266",
      desaturated: "#6C6BB3",
    },
    // secondary: {
    //     lightest: "blue",
    //     lighter: "blue",
    //     light: "blue",
    //     base: "blue",
    //     dark: "blue",
    //     darker: "blue",
    //     darkest: "blue"
    // },
    // accent: {
    //     lightest: "blue",
    //     lighter: "blue",
    //     light: "blue",
    //     base: "blue",
    //     dark: "blue",
    //     darker: "blue",
    //     darkest: "blue"

    // },
  },

  // sizes
  sizes: {
    borderRadius: {
      small: "2px",
      normal: "5px",
      large: "8px",
      xlarge: "10px",
    },
  },

  // margins

  // paddings
};
// Global  Styles
export const GlobalStyles = createGlobalStyle`



:root{
    --base-point:8px;
    height: 100vh;
    /* background-color: blue; */
}

html{
    font-size: 16px;
    /* font-family: 'Roboto', 'sans-serif'; */
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* body{
    font-family: 'Roboto', 'sans-serif';
} */

/* heading typogaphy */
h1 , h2 , h3 , h4 , h5 , h6 {
    color: ${(props) => props.theme.colors.neutrals.black}

}
h1{
    font-size: 2.488rem;
    font-weight: 700;
    line-height: 2.5rem;
    margin-bottom: 1.25rem;
}

h2{
    font-size: 1.728rem;
    font-weight: 600;
    line-height: 2rem;
    margin-bottom: 1rem;
}

h3{
    font-size: 1.44rem;
    font-weight: 600;
    line-height: 1.75rem;
    margin-bottom: 0.75rem;
}

h4{
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5rem;
    margin-bottom: 0.25rem;
}

h5{
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    margin-bottom: 0.25rem;
}


h6{
    font-size: 0.833rem;
    font-weight: 600;
    line-height: 1.rem;
    margin-bottom: 0.25rem;
}


/* body typography */
/* body{
    font-family: 'monospace',;
} */

legend{
    font-size: 1.125rem;
    line-height: 1.25rem;
    margin-bottom: 0.75rem;

}

p,li{
   
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    
}

label{
   
   font-size: 0.875rem;
   line-height: 1rem;
   margin-bottom: 0.5rem;
   font-weight: 600;
   /* a good value to play around with for space */
}

footer{
   
   font-size: 0.875rem;
   line-height: 1rem;
   margin-bottom: 1rem;
   /* a good value to play around with for space */
}
figcaption{
   
   font-size: 0.75rem;
   line-height: 1rem;
   margin-bottom: 0.5rem;
   /* a good value to play around with for space */
}

/* Web Kit Styling  */
::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutrals.lightGrey};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.neutrals.darkGrey};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary.saturated};
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: ${(props) =>
      props.theme.colors.primary
        .dark}; /* Color of the scrollbar thumb when active (clicked) */
  }
  ::-webkit-scrollbar-track {
    border-radius: 60px; /* Border radius of the scrollbar track */
  }
  .threads{
position:absolute;
z-index: 0;
  left: 8px;
  top:32px;
  font-size:18px;
  @media (min-width: 768px ) ,(max-width:1023px) {
  top:64px;
  left:8px;
  }
  @media (min-width: 1024px ) {
 display: none;
  }
}


.plus{
    width: 100%;
    text-align: end;
    margin-bottom: var(--base-point);
}
.title{


 @media (min-width: 768px)  {
    text-align: center;
 }
}


.show{
    position:absolute;
  right:8px;
  top:0px;
  transform: translatey(-50px);
  font-size:24px;
  font-weight: 700;
    display: block;
    
    @media (min-width: 767px),(max-width:1023px) {
        top: 64px;
    }
    @media (min-width: 1024px) {
       display: none;
    }
}
.dont-show{
    display: none;
}
.open{
    display: block;
}
.hide{
    display: none;
}


`;
