import * as NextImage from 'next/image';
import '../src/styles/globals.css';

const BREAKPOINTS_INT = {
    sm: 300,
    md: 480,
    lg: 620,
    xl: 800,
    '2xl': 960,
};

const customViewports = Object.fromEntries(
    Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
        console.log(val);
        return [
            key,
            {
                name: key,
                styles: {
                    width: `${val}px`,
                    height: `${(idx + 5) * 10}vh`,
                },
            },
        ];
    })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: customViewports,
    },
};
