import { Center, Heading, Link, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <Center as='section'>
            <VStack justifyContent='center' alignContent='center' h='100vh'>
                <Heading as='h1'>
                    Welcome to <Link href='https://nextjs.org'>Next.js!</Link>
                </Heading>
            </VStack>
        </Center>
    );
};

export default Home;

Home.getLayout = page => (
    <PrimaryLayout>
        <SidebarLayout />
        {page}
    </PrimaryLayout>
);
