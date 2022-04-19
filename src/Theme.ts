import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const Theme = extendTheme({
    styles: {
        colors: {
            brand: {
                darker: baseTheme.colors.teal[600],
                dark: baseTheme.colors.teal[500],
                primary: baseTheme.colors.teal[400],
                light: baseTheme.colors.teal[300],
                lighter: baseTheme.colors.teal[200],
            },
            accent: {
                darker: baseTheme.colors.orange[600],
                dark: baseTheme.colors.orange[500],
                primary: baseTheme.colors.orange[400],
                light: baseTheme.colors.orange[300],
                lighter: baseTheme.colors.orange[200],
            },
        },
        fonts: {
            body: 'Asap, sans-serif',
            heading: 'Open Sans, sans-serif',
        },
    },
});

export default Theme;
