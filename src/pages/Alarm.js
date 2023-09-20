import { useContext, useEffect } from 'react'

import Navbar from "../components/Navbar";

function Alarm(){

     const lang='english'
     
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

<div class='md:pt-10 w-3/4 mx-auto' >


<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Alarm system and locking up` : 'Sistema de alarma y cierre'} </h1>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Keys` : 'Llaves'} </h2>


<p>{lang==='english' ? 'If you leave the building unattended, we suggest you do this by the back door:' : 'Cuando salga del edificio, le sugerimos que lo haga por la puerta trasera:'}</p>
<br/>
<ul>
     <li class='ml-8'>{lang==='english' ? '•	Make sure the back door, conservatory doors, garden room doors and all ground floor windows are closed and locked.' : '•	Asegúrese de que la puerta trasera, las puertas del invernadero, las puertas de la sala del jardín y todas las ventanas de la planta baja estén cerradas y bloqueadas.'}</li>
     <br/>
     <li class='ml-8'>{lang==='english' ? '•	Exit by the back door, locking it after you and take the key with you.' : '•	Sal por la puerta trasera, ciérrala y llévate la llave.'}</li>
</ul>
<br/>

<p>{lang==='english' ? `The backdoor keys are by the backdoor` : 'Las llaves de la puerta trasera están junto a la puerta trasera.'}</p>
<br/>

<p>{lang==='english' ? `When you arrive, we will show you the external key safe. We will set an access number that is memorable to you. In the key safe is a front door key. We suggest you leave it there unless there is no other way into the house. You can also leave back door keys in the key safe if you do not want to take them with you.` : 'Cuando llegue, le mostraremos la caja fuerte externa para llaves. Estableceremos un número de acceso que sea memorable para usted. En la caja fuerte de llaves hay una llave de la puerta de entrada. Le sugerimos que lo deje allí a menos que no haya otra forma de entrar a la casa. También puede dejar las llaves de la puerta trasera en la caja fuerte si no desea llevárselas.'}</p>


<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Alarm` : 'Alarma'} </h2>
<p>{lang==='english' ? 'We live in a quiet neighbourhood, with very little trouble, so we suggest you do not use the alarm.' : 'Vivimos en un barrio tranquilo, con muy pocos problemas, por lo que le sugerimos que no use la alarma.'}</p>


</div>

</main>

</div>

</>

)

}

export default Alarm;