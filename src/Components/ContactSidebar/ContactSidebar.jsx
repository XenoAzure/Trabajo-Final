/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/


import './ContactSidebar.css'
import { useContext} from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ThemeContext } from '../../Context/ThemeContext'

export default function ContactSidebar() {


    
    const {isDark, toggleTheme} = useContext(ThemeContext)
    return (
        <aside className={`aside ` + (isDark ? 'aside-dark' : '')}>
            <button onClick={toggleTheme}>Cambiar tema</button>
            <div>
                <ContactSearchForm/>
                <a>Buscar un chat o iniciar uno nuevo</a>
                <a href="">Todos</a>
                <a href="">No leidos</a>
                <a href="">Favoritos</a>
                <a href="">Grupos</a>
            </div>
            <ContactList/>
        </aside>
    )
}
