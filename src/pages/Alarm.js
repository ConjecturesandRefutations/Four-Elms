import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Alarm(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navAlarm'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Alarm' >

<div class='md:pt-10 w-3/5 mx-auto' >


<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Alarm system and locking up` : 'Sistema de alarma y cierre'} </h1>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Keys` : 'Llaves'} </h2>

<p>{lang==='english' ? 'We will provide a key for the front door on your arrival.' : 'Les proporcionaremos una llave para la puerta de entrada a su llegada.'}</p>
<br/>
<p>{lang==='english' ? 'The back door keys are by the back door.' : 'Las llaves de la puerta trasera están junto a la puerta trasera.'}</p>
<br/>
<p>{lang==='english' ? 'When you leave the building we suggest you do this by the back door:' : 'Cuando salen del edificio, le sugerimos que lo hagan por la puerta trasera:'}</p>
<br/>
<ul>
     <li class='ml-8'>{lang==='english' ? '•	Make sure the back door, conservatory doors, garden room doors and all ground floor windows are closed and locked.' : '•	Asegúrese de que la puerta trasera, las puertas de la habitación acristalada, las puertas de la sala del jardín y todas las ventanas de la planta baja estén cerradas con llave.'}</li>
     <br/>
     <li class='ml-8'>{lang==='english' ? '•	Exit by the back door, locking it after you and take the key with you.' : '•	Sal por la puerta trasera, ciérrala y llévate la llave.'}</li>
</ul>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Alarm` : 'Alarma'} </h2>
<p>{lang==='english' ? 'We live in a quiet neighbourhood, with very little trouble, so we suggest you do not use the alarm.' : 'Vivimos en un barrio tranquilo, con muy pocos problemas, por lo que le sugerimos que no use la alarma.'}</p>


</div>

</main>

</div>

</>

)

}

export default Alarm;