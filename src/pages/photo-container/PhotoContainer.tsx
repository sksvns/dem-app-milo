import React from 'react'
import './photoContainer.css';
import { Link, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';
import { ImageData } from '../../types';
import ImageComp from '../../components/image-component/ImageComponent';

export type ApiResPic = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
  }

const PhotoContainer = () => {
    const { id } = useParams();
    const {data, loading}  = useApi<ApiResPic[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)

    return (
        <div className='photo-conatiner'>
            <LoadingSpinner loading={!!loading} />
            <span style={{ float: "right" }}><Link to="/">X</Link></span><h1>Photos</h1><hr />
            <div className='photo-wrapper'>
                {data  && data.map((item: ImageData) => <ImageComp src={item.thumbnailUrl} alt="img" />)}
            </div>
        </div>
    )
}

export default PhotoContainer;