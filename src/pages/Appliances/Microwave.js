import { useContext, useEffect } from 'react'
import { LangContext } from '../../context/language.context';

import Navbar from "../../components/Navbar";

import MicrowaveImgEng from '../../images/Other/MicrowaveEnglish.png'
import MicrowaveImgSpan from '../../images/Other/MicrowaveSpanish.png'


function Microwave(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" >

     <div class='navbar' id='navMicrowave'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Microwave'>

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang === 'english'  ? `Instructions for Microwave` : `Instrucciones para Microondas`} </h1>


{lang==='english' ? <img src={MicrowaveImgEng} alt='microwave' /> : <img src={MicrowaveImgSpan} alt='microwave' />}

<br/>

<p class='mb-8'>{lang==='english' ? `Leave “Menu Selector” set to “High”.` : `Deje el “Menu Selector” configurado en “High”.`}</p>

<p class='mb-8'>{lang==='english' ? `Add the time you want to cook for by turning “To set cooking time” clockwise.` : `Agregue el tiempo que desea cocinar girando “To set cooking time” en el sentido de las agujas del reloj.`}</p>

<p class='mb-8'>{lang==='english' ? `Press “Start”.` : `Presiona “Start”.`}</p>

</div>

</main>

</div>

</>

)

}

export default Microwave;