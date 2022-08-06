import styles from '../styles/View.module.css'


import { useImageContext } from '../lib/ImageViewContext'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'


import Link from 'next/link'
import Image from 'next/image'

const ViewPage = () => {
    const { imagesList, imageCurrentView, setCurrentImage } = useImageContext()

    function handleNextImage(value: number) {
        if (imageCurrentView != null)
            setCurrentImage(imageCurrentView + value)
    }

    return (
        <div className={ styles.container }>
            <div>
                <Link href="/">
                    <p className={ styles.linkToBack }><HiArrowNarrowLeft /> Voltar</p>
                </Link>
            </div>

            <div className={ styles.imageInfo }>
                <div className={ styles.imageContainer }>
                    { ( imagesList && imageCurrentView != null ) &&
                        <Image src={ imagesList[imageCurrentView].src } alt={ imagesList[imageCurrentView].title } width={ 496 } height={ 308 } />
                    }
                </div>

                <div className={ styles.textContainer }>
                    { (imagesList && imageCurrentView != null) &&
                        <h3 className={ styles.title }>{ imagesList[imageCurrentView].title }</h3>
                    }

                    { (imagesList && imageCurrentView != null) &&
                        <p className={ styles.description }>
                            { imagesList[imageCurrentView].description }
                        </p>
                    }
                </div>
            </div>

            <div className={ styles.bottomButton }>
                <button className={ styles.button } onClick={ () => handleNextImage(-1) }>
                    <HiArrowNarrowLeft /> Anterior
                </button>

                <button className={ styles.button } onClick={ () => handleNextImage(1) }>
                    Proximo <HiArrowNarrowRight /> 
                </button>
            </div>
        </div>
    )
}


export default ViewPage
