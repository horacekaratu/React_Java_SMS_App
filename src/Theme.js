import { createGlobalStyle } from "styled-components"

export const Theme={

    // spacing
    
// Typography

// fonts 

fonts:{
    heading:'Roboto, sans-serif',
    body:'Montserrat, sans-serif'
},

// heading

// type styles


// colors

colors:{
    contextual: {
        error: "#B33B3B",
        success: "#3DB33B",
        warning: "#B1B33B",
        info:'#3D3BB3',
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
        base:'#3D3BB3',
        dark: "#232266",
        desaturated:"#6C6BB3"
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
  
}

// sizes


// margins


// paddings



}
// Global  Styles
export const GlobalStyles=createGlobalStyle`

::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary.base};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary.saturated};
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: ${(props) => props.theme.colors.primary.dark}; /* Color of the scrollbar thumb when active (clicked) */
  }
  ::-webkit-scrollbar-track {
    border-radius: 60px; /* Border radius of the scrollbar track */
  }

:root{
    --base-point:8px;
}

html{
    font-size: 16px;
    font-family: 'Roboto', 'sans-serif';
}

body{
    /* font-family: 'Roboto', 'sans-serif'; */
}

/* heading typogaphy */
h1 , h2 , h3 , h4 , h5 , h6 {
    color: ${props=>props.theme.colors.primary.base}

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
body{
    font-family: 'Roboto', 'sans-serif';
}

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




`





