import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageComp from './ImageComponent';

describe('ImageComp component', () => {
    test('renders image with correct src and alt text', () => {
        const src = 'test-image.jpg';
        const alt = 'Test Image';
        render(<ImageComp src={src} alt={alt} />);
        const image = screen.getByAltText(alt) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).toContain(src);
    });

    test('renders blurred overlay while image is loading', () => {
        const src = 'test-image.jpg';
        const alt = 'Test Image';
        render(<ImageComp src={src} alt={alt} />);
        const blurredOverlay = screen.getByLabelText('blurred-overlay');
        expect(blurredOverlay).toBeInTheDocument();
    });

    test('removes blurred overlay once image is loaded', () => {
        const src = 'test-image.jpg';
        const alt = 'Test Image';
        render(<ImageComp src={src} alt={alt} />);
        const image = screen.getByAltText(alt) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(screen.queryByTestId('blurred-overlay')).not.toBeInTheDocument();
    });
});
