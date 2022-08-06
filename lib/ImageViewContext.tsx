import React, { createContext, useContext, useState } from 'react'


interface ImageData {
    id: number
    src: string
    title: string
    description: string
}

interface ImageContextType {
    imagesList: Array<ImageData> | null
    imageCurrentView: number | null

    setImages: Function
    setCurrentImage: Function
}


const defaultImageContext : ImageContextType = {
    imagesList : null,
    imageCurrentView: null,

    setImages: (data : Array<ImageData>) => {},
    setCurrentImage: (index: number) => {}
}


const ImageContext = createContext<ImageContextType>(defaultImageContext)

export function useImageContext () {
    return useContext(ImageContext)
}

interface PropsType {
    children?: React.ReactElement
}


export function ImageContextProvider({ children } : PropsType) {
    const [imagesList, setImageList] = useState<Array<ImageData> | null>(null)
    const [imageCurrentView, setImageCurrentView] = useState<number | null>(null)

    function setImageCurrentIndexView(index: number) {
        if (imagesList) {
            if (index > imagesList.length - 1)
                setImageCurrentView(0)

            else if (index < 0)
                setImageCurrentView(imagesList.length - 1)

            else
                setImageCurrentView(index)
        }

    }

    function setImages(data: Array<ImageData> | null) {
        setImageList(data)
    }

    const values = {
        imagesList,
        imageCurrentView,
        setImages,
        setCurrentImage: setImageCurrentIndexView
    }

    return (
        <ImageContext.Provider value={ values } >
            { children }
        </ImageContext.Provider>
    )
}