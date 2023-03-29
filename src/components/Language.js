import { useState, useContext } from 'react'

import { LangContext } from '../context/language.context';

import english from '../images/english-flag.png'
import spanish from '../images/spanish-flag.png'

function Language(){

  const { lang, toggleLang } = useContext(LangContext);

function changeFlag(lang){
  if (lang === 'english'){
    return spanish
  } else {
     return english
  }
};

return(
<>
<div id='flags'>
<img src={changeFlag(lang)} alt='spanish' id='spanish' class='cursor-pointer' onClick={toggleLang}/>
</div>
</>
)

}

export default Language;