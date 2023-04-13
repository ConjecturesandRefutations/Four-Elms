import { useContext, useEffect } from 'react'
import { LangContext } from '../../context/language.context';

import Navbar from "../../components/Navbar";

function Freezer(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

<div class='navbar' id='navFreezer'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Freezer'>

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang === 'english'  ? `Instructions for the freezer` : `Instrucciones para el congelador.`} </h1>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `Instructions` : `Instrucciones`}</h2>


<p class='mb-8'>{lang==='english' ? `The freezer is very easy to use and should not need any instructions.` : `El congelador es muy fácil de usar y no debería necesitar instrucciones.`}</p>
<p class='mb-8'>{lang==='english' ? `If you do encounter any problems, here is the instruction manual` : `Si encuentra algún problema, aquí está el manual de instrucciones.`}</p>

<a class='text-blue-600' id='urlFour' href='https://media3.bosch-home.com/Documents/9001471256_B.pdf'>https://media3.bosch-home.com/Documents/9001471256_B.pdf</a>

</div>

</main>

</div>

</>

)

}

export default Freezer;