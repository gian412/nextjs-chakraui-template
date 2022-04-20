import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

export interface IPrimaryLayout {
    children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Primary Layout Example</title>
            </Head>
            <Flex as='main' height='calc(100vh - 64px)' bg='white'>
                {children}
            </Flex>
        </>
    );
};

export default PrimaryLayout;
