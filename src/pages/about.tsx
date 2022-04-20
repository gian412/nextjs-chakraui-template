import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
    return (
        <Box as='section'>
            <Heading as='h2'>Layout Example (About)</Heading>
            <Text>
                This example adds a property <code>getLayout</code> to your page, allowing you to return a React
                component for the layout. This allows you to define the layout on a per-page basis. Since we&apos;re
                returning a function, we can have complex nested layouts if desired.
            </Text>
            <Text>
                When navigating between pages, we want to persist page state (input values, scroll position, etc.) for a
                Single-Page Application (SPA) experience.
            </Text>
            <Text>
                This layout pattern will allow for state persistence because the React component tree is persisted
                between page transitions. To preserve state, we need to prevent the React component tree from being
                discarded between page transitions.
            </Text>
            <Heading as='h3'>Try It Out</Heading>
            <Text>
                To visualize this, try tying in the search input in the <code>Sidebar</code> and then changing routes.
                You&apos;ll notice the input state is persisted.
            </Text>
        </Box>
    );
};

export default About;

About.getLayout = page => (
    <PrimaryLayout>
        <SidebarLayout />
        {page}
    </PrimaryLayout>
);
