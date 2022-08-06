import styles from './styles.module.css'

import { FiSearch } from 'react-icons/fi'

import { ChangeEvent, useState, useEffect } from 'react'

interface PropsType {
    onSearch: Function
}

const SearchInput = (props : PropsType) => {
    const [inputSearch, setInputSearch] = useState<string>('')

    function handleInputText(element: ChangeEvent) {
        const elementNode = element.target as HTMLInputElement
        
        setInputSearch(elementNode.value)
    }

    function handleClickSearch() {
        props.onSearch(inputSearch)
    }


    useEffect(() => {
        props.onSearch(inputSearch)
    }, [inputSearch])

    return (
        <div className={ styles.inputContainer }>
            <input 
                type="text" 
                className={ styles.inputSearch } 
                placeholder="Pesquise aqui" 
                onChange={ handleInputText }
                value={ inputSearch } />

            <button className={ styles.buttonSearch } onClick={ handleClickSearch }>
                <FiSearch />
            </button>
        </div>
    )
}

export default SearchInput
