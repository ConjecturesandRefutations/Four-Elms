import { useContext } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function CheckInOut(){

     const { lang } = useContext(LangContext);

return(

<>

<div class="grid md:grid-cols-4">

<Navbar/>

<main class="md:col-span-3" id='checkinout'>

<div class='md:pt-10 w-3/5' id='check' >

<h1 class='text-2xl font-bold mb-8'> {lang==='english' ? 'Check-in and check-out procedures' : 'Procedimientos de check-in y check-out'} </h1>

<h2 class='text-xl font-bold mb-8'>{lang==='english' ? 'Check-in' : 'Check-in'}</h2>

<p>{lang==='english' ? 'We will be in the house when you arrive and supply you with keys.' : 'Estaremos en la casa cuando llegue y le proporcionaremos las llaves.'}</p>
<p>{lang==='english' ? 'We will give you a tour of the house and gardens and then leave you to enjoy it.' : 'Te daremos un recorrido por la casa y jardines y luego te dejaremos disfrutarlo.'}</p>
<p class='mb-8'>{lang==='english' ? 'There will be a welcome pack so you can enjoy your first evening!' : '¡Habrá un paquete de bienvenida para que puedas disfrutar de tu primera noche!'}</p>
<h2 class='text-xl font-bold mb-8'>{lang==='english' ? 'Check-out' : 'Check-out'}</h2>
<p>{lang==='english' ? 'We will arrive at the agreed check-out time to pick up the keys and say good bye. Please leave feedback and ideas for improvement in our feedback page' : 'Llegaremos a la hora acordada de check-out para recoger las llaves y despedirnos. Por favor, deje comentarios e ideas para mejorar en nuestra página de comentarios.'}</p>


</div>

</main>

</div>

</>

)

}

export default CheckInOut;