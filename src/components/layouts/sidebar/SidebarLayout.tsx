import { Flex, Input, Link } from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import React from 'react';

export interface ISidebarLayout {}

const menuElements = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const SidebarLayout: React.FC<ISidebarLayout> = () => {
    return (
        <Flex as='nav' h='100%' direction='column' w='250px' bg='#fafafa' p='32px' borderRight='1px solid #eaeaea'>
            <Input
                type='text'
                placeholder='Search...'
                my='32px'
                mx='0'
                textDecoration='none'
                bg='white'
                borderRadius='4px'
                border='1px solid #eaeaea'
                fontSize='14px'
                py='8px'
                px='16px'
                h='28px'
            />
            {menuElements.map(elem => (
                <NextLink key={elem.label} href={elem.href} passHref>
                    <Link
                        my='8px'
                        mx={0}
                        textDecoration='none'
                        bg='white'
                        borderRadius='4px'
                        fontSize='14px'
                        py='12px'
                        px='16px'
                        textTransform='uppercase'
                        fontWeight='semibold'
                        letterSpacing='0.025em'
                        color='#333'
                        border='1px solid #eaeaea'
                        transition='all 0.125s ease'
                        _hover={{
                            bgColor: '#eaeaea',
                        }}
                    >
                        {elem.label}
                    </Link>
                </NextLink>
            ))}
        </Flex>
    );
};

export default SidebarLayout;
