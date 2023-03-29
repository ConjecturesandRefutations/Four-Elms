import { useState, useContext } from 'react'

import { LangContext } from '../context/language.context';

import english from '../images/english-flag.png'
import spanish from '../images/spanish-flag.png'

function Language(){

  const { lang, toggleLang } = useContext(LangContext);

return(
<>
<div id='flags'>
<img src={spanish} alt='spanish' id='spanish' class='cursor-pointer' onClick={toggleLang}/>
</div>
</>
)

}

export default Language;