import { createContext, useState } from 'react'; 
 
const LangContext = createContext();
 
function LangProviderWrapper(props) {
  const [lang, setLang] = useState('english'); 
 
  const toggleLang = () => {    
    if (lang === 'english') {
      setLang('spanish');
    } else {
      setLang('english');
    }
  };
 
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>   
      {props.children}
    </LangContext.Provider>
  );
}
 
export { LangContext, LangProviderWrapper };