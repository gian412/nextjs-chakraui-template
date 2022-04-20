import { Center, Heading, Link, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    useEffect(() => {
        const controller = new AbortController();

        fetch('/api/api-template?name=John Doe', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                if (err.name !== 'AbortError' && err.status !== 401) {
                    console.error(err);
                }
            });

        return () => {
            controller.abort();
        };
    }, []);

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
