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

<p class='mb-8'>{lang==='english' ? `If you would like Thomas Filipek to do some house cleaning for you, please discuss it with him. He will be available from 6am to 10am on the Tuesday after you arrive and then on Monday afternoons and Tuesday mornings. Please agree any payments directly with him.` : `Si desea que Thomas Filipek haga la limpieza de la casa por usted, hable con él. Estará disponible de 6 de la mañana a 10 de la mañana el martes después de su llegada y luego los lunes por la tarde y los martes por la mañana. Por favor acuerde cualquier pago directamente con él.`}</p>


</div>

</main>

</div>

</>

)

}

export default Cleaning;