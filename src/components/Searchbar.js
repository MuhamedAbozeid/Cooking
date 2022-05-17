import { useNavigate } from 'react-router'
import { useState } from 'react'


//styles
import './Searchbar.css'
// import Close from '../assets/close.svg'

export default function Searchbar() {

    const [term, setTerm] = useState('')

    // const [visible, setVisible] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        navigate(`/search?q=${term}`)
    }

    // const handleClick =  () => {
    //     setVisible(true);
    // }

    return (
        <div className='searchbar'>
         <form onSubmit={handleSubmit}>

                <label htmlFor="search">Search: </label>
                <input 
                type="text"  
                id="search" 
                onChange={ (e) => setTerm(e.target.value)}
                required
                />
            </form> 
            
        </div>
    )
}
