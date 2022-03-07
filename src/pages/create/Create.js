
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { projectFirestore } from '../../firebase/config'


//styles
import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = {title, method,  ingredients, cookingTime: cookingTime + ' minutes'}

        try {
            await projectFirestore.collection('recipes').add(doc)
            navigate('/')
          } catch (err) {
            console.log(err)
          }
    }

  
    const handleAdd = (e) => {

        e.preventDefault()  
        const ing = newIngredient.trim()

        if(ing && !ingredients.includes(ing)){
           
           setIngredients( prevIngredients => [...prevIngredients, ing] )           
        }

        setNewIngredient('')
        ingredientInput.current.focus()
        
    }




    return (
        <div className='create'>
            <h2 className='page-title'>Add a New Recipe</h2>
            
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title:</span>
                    <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    />
                </label>


                <label>
                    <span>Recipe ingredients:</span>

                    <div className="ingredients">

                        <input 
                        type="text" 
                        onChange={(e) => setNewIngredient(e.target.value)}
                        value={newIngredient}
                        ref={ingredientInput}
                    
                        />

                        <button onClick={handleAdd} className='btn'>add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map( i => <em key={i}>{i}, </em> )}</p>

                

                <label>
                    <span>Recipe method:</span>
                    <textarea 
                    onChange={(e) => setMethod(e.target.value)}
                    value={method}
                    required
                    />

                </label>


                <label>
                    <span>cooking time (minutes):</span>
                    <input 
                    type='number'
                    onChange={(e) => setCookingTime(e.target.value)}
                    value={cookingTime}
                    required
                    />
                </label>

               <button className='btn'>submit</button>

            </form>
        </div>
    )
}
