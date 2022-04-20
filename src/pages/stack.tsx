import { Box, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

export interface IStackPage {
    stack: string[];
}

const Stack: NextPageWithLayout<IStackPage> = ({ stack }: IStackPage) => {
    return (
        <Flex as='section' justifyContent='center'>
            <Box>
                <Heading as='h1'>My Favorites Stack</Heading>
                <UnorderedList>
                    {stack.map(favorite => {
                        return <ListItem key={favorite}>{favorite}</ListItem>;
                    })}
                </UnorderedList>
            </Box>
        </Flex>
    );
};

export default Stack;

export const getStaticProps: GetStaticProps = async _context => {
    const favoriteStack = [
        'Javascript',
        'TypeScript',
        'React.js',
        'Next.js',
        'GraphQL',
        'Amazon Web Services',
        'Firebase',
    ];

    return {
        props: {
            stack: favoriteStack,
        },
    };
};

Stack.getLayout = page => (
    <PrimaryLayout>
        <SidebarLayout />
        {page}
    </PrimaryLayout>
);
