import React, { useEffect, useState } from 'react'
import './photoContainer.css';
import { Link, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';
import { ImageData } from '../../types';

const PhotoContainer = () => {
    const { id } = useParams();
    const [data, error, loading] = useApi(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)

    useEffect(() => {
    }, [data])
    return (
        <div className='photo-conatiner'>
            <LoadingSpinner loading={loading} />
            <span style={{ float: "right" }}><Link to="/">X</Link></span><h1>Photos</h1><hr />
            <div className='photo-wrapper'>
                {data && data.map((item: ImageData) => <img src={item.thumbnailUrl} key={item.id} alt="img" />)}
            </div>
        </div>
    )
}

export default PhotoContainer;