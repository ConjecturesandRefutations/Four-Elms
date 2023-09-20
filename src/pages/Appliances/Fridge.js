import { useContext, useEffect } from 'react'

import Navbar from "../../components/Navbar";

function Fridge(){

     const lang='english'
     
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" >

     <div class='navbar' id='navFridge'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Fridge'>

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang === 'english'  ? `Instructions for the fridge` : `Instrucciones para la nevera`} </h1>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `Instructions` : `Instrucciones`}</h2>


<p class='mb-8'>{lang==='english' ? `The fridge is very easy to use and should not need any instructions.` : `La nevera es muy fácil de usar y no debería necesitar instrucciones.`}</p>
<p class='mb-8'>{lang==='english' ? `If you do encounter any problems, here is the instruction manual` : `Si encuentra algún problema, aquí está el manual de instrucciones.`}</p>

<a class='text-blue-600' id='urlThree' href='https://media3.bosch-home.com/Documents/9001471256_B.pdf'>https://media3.bosch-home.com/Documents/9001471256_B.pdf</a>


</div>

</main>

</div>

</>

)

}

export default Fridge;