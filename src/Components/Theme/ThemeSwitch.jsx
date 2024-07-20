import UseLocalStorage from './useLocalStorage'
import './Theme.css'

function ThemeSwitch() {

    const [theme, setTheme] = UseLocalStorage('theme', 'dark');
    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    
        <button className='border-2 bg-black text-white p-2 rounded-lg' onClick={handleToggleTheme}>Change Theme</button>
      
  );
}
export default ThemeSwitch;
