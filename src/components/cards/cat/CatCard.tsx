import { Box, chakra, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export interface ICatCard {
    tag: string;
    title: string;
    body: string;
    author: string;
    time: string;
}

const ChakraImage = chakra(Image, {
    shouldForwardProp: prop => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
    return (
        <Box m='1rem'>
            <Flex
                direction='column'
                width='clamp(20rem, calc(20rem + 2vw), 22rem)'
                overflow='hidden'
                boxShadow='lg'
                borderRadius='1em'
                bg='#ece9e6'
                bgGradient='linear-gradient(to right, #ffffff, #ece9e6)'
            >
                <Box>
                    <ChakraImage
                        src='/time-cat.jpg'
                        alt='card__image'
                        width='600'
                        height='400'
                        maxW='100%'
                        display='block'
                        objectFit='cover'
                    />
                </Box>
                <Flex p='1rem' direction='column' gap='0.5rem'>
                    <Text
                        alignSelf='flex-start'
                        py='0.5.25em'
                        px='0.5.75em'
                        borderRadius='1em'
                        fontSize='0.75rem'
                        bg='#56ccf2'
                        bgGradient='linear-gradient(to bottom, #2f80ed, #56ccf2)'
                        color='#fafafa'
                    >
                        {tag}
                    </Text>
                    <Heading as='h4' fontSize='1.5rem' textTransform='capitalize'>
                        {title}
                    </Heading>
                    <p>{body}</p>
                </Flex>
                <Flex p='1rem' mt='auto'>
                    <Flex gap='0.5rem'>
                        <ChakraImage src='/avatar.jpg' alt='user__image' width='40' height='40' borderRadius='50%' />
                        <Box>
                            <h5>{author}</h5>
                            <small color='#666'>{time}</small>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default CatCard;
