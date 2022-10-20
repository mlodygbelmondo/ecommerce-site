import React from 'react'
import { PhotosModalProps } from './types'

const PhotosModal = ({
    setIsPhotosModalOpen,
    isPhotosModalOpen,
    photos,
    activePhoto,
    setActivePhoto,
}: PhotosModalProps) => {
    return (
        <div
            className='photos-modal-container'
            style={{ display: isPhotosModalOpen ? 'flex' : 'none' }}
        >
            <div
                className='black-container'
                onClick={() => {
                    setIsPhotosModalOpen(false)
                }}
            ></div>
            <div className='photos-container'>
                <div className='main-photo'>
                    <img src={activePhoto.big} alt='active photo' />
                </div>
                <div className='photos-gallery'>
                    {photos.map((photo, index) => (
                        <div className='photo-container' key={index}>
                            <div
                                className={`photo ${
                                    photo.id === activePhoto.id ? 'active' : ''
                                }`}
                                onClick={() => {
                                    setActivePhoto(photo)
                                }}
                                key={index}
                            >
                                <img
                                    src={photo.small}
                                    alt='Photo Thumbnail'
                                    className={`${
                                        photo.id === activePhoto.id
                                            ? 'active'
                                            : ''
                                    }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PhotosModal
