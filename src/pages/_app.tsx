import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import theme from '../Theme';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || (page => page);

    return <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
};

export default MyApp;
