import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Cleaning(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navCleaning'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Cleaning' >

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang==='english' ? `House cleaning` : `Limpieza de la casa`} </h1>

<p class='mb-8'>{lang==='english' ? `The house cleaning materials are kept in the airing cupboard next to the family bathroom.` : `Los materiales de limpieza de la casa se guardan en el armario secarropa al lado del baño familiar.`}</p>

<p class='mb-8'>{lang==='english' ? `If you would like Thomas Filipek to do some house cleaning for you, please discuss it with him. He will be available from 1:45pm to 5:45pm on the 22nd May and then on Monday afternoons and Tuesday mornings. Please agree any payments directly with him.` : `Si desea que Thomas Filipek haga la limpieza de la casa por usted, hable con él. Estará disponible de 13:45 a 17:45 el 22 de mayo y luego los lunes por la tarde y los martes por la mañana. Por favor acuerde cualquier pago directamente con él. `}</p>

<p class='mb-8'>{lang==='english' ? `We had the house deep cleaned before you arrive. Please return it to the same state. If you would like to use the same company to deep clean as we did, this is their url ` : `Hicimos una limpieza profunda de la casa antes de que llegaras. Por favor, devuélvalo al mismo estado. Si desea utilizar la misma empresa para realizar una limpieza profunda como lo hicimos nosotros, esta es su URL`}</p>

<a href='https://www.360deepclean.co.uk/' target='_blank' class='text-blue-600'>https://www.360deepclean.co.uk/ </a>



</div>

</main>

</div>

</>

)

}

export default Cleaning;