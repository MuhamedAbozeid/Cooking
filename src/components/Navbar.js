import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

import { useState } from 'react';

//styles
import './Navbar.css'
import Search from '../assets/search.svg'

//components
import Searchbar from './Searchbar'

export default function Navbar() {

    const { color } = useTheme()

    const [active, setActive] = useState(false); 

    const handleClick = () => {

        setActive(!active)
    
    }

    return (
        <div className='navbar' style={ { background: color }}>
            <nav>
                
                <Link to='/' className='brand'>
                    <h1>Cooking Recipes</h1>
                </Link>
                   <img src={Search} alt="" className='search-icon' onClick={handleClick}  /> 


                <div className={`nav-container ${active? "active": '' }`} >

                    <Searchbar />
                    <Link to='/create'>Create Recipe</Link>
                </div>
               
            </nav>
        </div>
    )
}
