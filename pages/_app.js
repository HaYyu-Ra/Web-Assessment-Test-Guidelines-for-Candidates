import '../styles/globals.css'; // Import global styles
import Head from 'next/head';  // Import Head for setting meta tags
import { ThemeProvider } from 'styled-components'; // Import styled-components' ThemeProvider
import { useEffect } from 'react'; // Import useEffect for side effects like adding custom scripts

// Global theme for styled-components
const theme = {
  colors: {
    primary: '#ff6347', // Tomato red for primary color
    secondary: '#4caf50', // Green for secondary color
    background: '#f4f4f4', // Light background color
    text: '#333', // Dark text color for readability
  },
  font: 'Arial, sans-serif', // Font family for the app
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // This will run once when the app is loaded
    console.log('App is loaded');
  }, []);

  return (
    <>
      <Head>
        <title>Food Delivery App</title>
        <meta name="description" content="Food Delivery App UI Kit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Wrapping the app with ThemeProvider for styled-components */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
