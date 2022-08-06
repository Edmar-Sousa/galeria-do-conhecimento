import React from 'react'
import styles from './styles.module.css'


import { FiSettings } from 'react-icons/fi'

const Header = () => {
    return (
        <header className={ styles.headerApp }>
            <div></div>
            <h1 className={ styles.title }>Álbum do conhecimento</h1>

            <button className={ styles.configButton }>
                <FiSettings />
            </button>
        </header>
    )
}

export default Header