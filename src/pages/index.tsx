import { Center, Heading, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
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
                <CatCard {...mockCatCardProps.base} />
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
