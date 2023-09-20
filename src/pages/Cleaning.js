import { useContext, useEffect } from 'react'

import Navbar from "../components/Navbar";

function Cleaning(){

     const lang='english'
     
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

</div>

</main>

</div>

</>

)

}

export default Cleaning;