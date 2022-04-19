import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
    return (
        <Center>
            <VStack justifyContent='center' alignContent='center' h='100vh'>
                <Heading as='h1'>Home</Heading>
                <Text>Home</Text>
            </VStack>
        </Center>
    );
};

export default Home;
