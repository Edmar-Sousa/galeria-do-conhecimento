import styles from '../styles/Home.module.css'

import axios from 'axios'
import SearchInput from '../components/SearchInput'

import { useState, useEffect } from 'react'
import { useImageContext } from '../lib/ImageViewContext'

import Image from 'next/image'
import { useRouter } from 'next/router'


interface ImageData {
    id: number
    src: string
    title: string
    description: string
    fixIndex?: number
}

interface PropsType {
    data ?: Array<ImageData>
}

const Home = (props : PropsType) => {
    const imageContext = useImageContext()
    const router = useRouter()

    const [filterImages, setFilterImages] = useState(props.data)


    useEffect(() => {
        imageContext.setImages(props.data)
    }, [])
    

    function filterImageByTitle(searchTitle: string) {
        if (!imageContext.imagesList) return
        
        const filterImagesArray = imageContext.imagesList.filter(imageData => imageData.title.toLowerCase().includes(searchTitle.toLowerCase()))
        setFilterImages(filterImagesArray)
    }

    function handleClickView(index: number | undefined) {
        if (index == undefined) return
        
        imageContext.setCurrentImage(index)
        router.push('/view')
    }

    return (
        <div className={ styles.mainSection }>
            <SearchInput onSearch={ filterImageByTitle } />

            <div>
                <div className={ styles.imageContainer }>
                    { 
                        filterImages && filterImages.map((object, i) => {
                            return (
                                <div key={ i } className={ `${ styles.imageContainer } ${ filterImages.length == 1 ? styles.column : null }` }>
                                    <div className={ styles.maxSize }>
                                        <Image src={ object.src } alt={ object.title } width={ 496 } height={ 308 } onClick={ () => handleClickView(object.fixIndex) } />
                                    </div>

                                    <div className={ `${ styles.textContainer } ${ filterImages.length == 1 ? styles.show : null }` }>
                                        <h3 className={ styles.title }>{ object.title }</h3>

                                        <p className={ styles.description }>{ object.description }</p>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps() {
    let data = null

    try {
        const response = await (await axios.get('https://frela.herokuapp.com/')).data as Array<ImageData>
        data = response?.map((obj, i) => ({ ...obj, fixIndex: i }) )
    }

    catch (e) {
        console.log(e)
    }

    return {
        props: {
            data
        }
    }
}

export default Home