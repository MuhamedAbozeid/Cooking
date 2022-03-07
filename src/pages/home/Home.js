import { useEffect } from 'react';
import { projectFirestore } from '../../firebase/config';
import { useState } from 'react/cjs/react.development';

//styles
import './Home.css'

//components
import RecipeList from '../../components/RecipeList'


export default function Home() {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        setIsPending(true)

        const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
            if (snapshot.empty) {
              setError('No recipes to load')
              setIsPending(false)
            } else {
              let results = []
              snapshot.docs.forEach(doc => {
                
                results.push({ ...doc.data(), id: doc.id })
              })
              setData(results)
              setIsPending(false)
            }
          }, (err) => {
            setError(err.message)
            setIsPending(false)
          })

          return () => unsub()

    }, [])

    return (
        <div className='home'>
            {isPending && <p className='loading'>Loading...</p>}
            {error && <p className='error'> {error} </p>}
            { data && <RecipeList recipes={data}/>}

        </div>
    )
}
