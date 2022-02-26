import { useTheme } from '../hooks/useTheme' 

//style
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']


export default function ThemeSlector() {

    const { changeColor} = useTheme()
 
    return (
        <div className='theme-selector'>
            <div className="theme-buttons">

                 {themeColors.map( color => (
                     <div 
                     key={color}
                     onClick={() => changeColor(color)}
                     style={{background: color}}
                     
                     />
                 ))}
            </div>        
        </div>
    )
}