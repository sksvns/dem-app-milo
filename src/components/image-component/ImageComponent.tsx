import React, { useState } from 'react';
import './imageComponent.css';

type ImageCompProps = {
    src: string;
    alt: string;
}

const ImageComp = ({ src, alt }: ImageCompProps) => {
    const [loaded, setLoaded] = useState(false);
    return <div className='imgContainer'>
        <img
            height={150}
            alt={alt} width={150}
            src={src} fetchPriority='low'
            onLoad={() => setLoaded(true)}
        />
        {!loaded && <div className='blurred' aria-label='blurred-overlay'></div>}
    </div>
}

export default ImageComp;