import React from 'react'

import styles from './styles.module.css'

import Header from '../Header'


interface PropsType {
    children ?: React.ReactElement
}

const Layout = ({ children } : PropsType) => {
    return (
        <div className={ `${ styles.app } ${ styles.dark }`}>
            <Header />

            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout