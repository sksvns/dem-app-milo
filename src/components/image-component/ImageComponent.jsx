import React, { useState } from 'react';
import './imageComponent.css';

const ImageComp = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    return <div className='imgContainer'>
        <img
            height={150}
            alt={alt} width={150}
            src={src} fetchPriority='low'
            onLoad={() => setLoaded(true)}
        />
        {!loaded && <div className='blurred'></div>}
    </div>
}

export default ImageComp;