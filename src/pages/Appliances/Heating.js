import { useContext, useEffect } from 'react'

import Navbar from "../../components/Navbar";

import HeatingImg from '../../images/Other/Heating.png'

function Heating(){

     const lang='english'

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" >

<div class='navbar' id='navHeating'>

<Navbar/>

</div>

<main class="background md:col-span-3 pb-8" id='Heating'>

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang==='english' ? `Heating & hot water` : 'Calefacción y agua caliente'} </h1>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Controls` : 'Control S'} </h2>

<img src={HeatingImg} alt='thermostat'/>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Instructions` : 'Instrucciones'} </h2>

<p class='mb-8'>{lang==='english' ? `The hot water is on full time. There is no need to change the hot water controls.` : `El agua caliente está a tiempo completo. No hay necesidad de cambiar los controles de agua caliente.`}</p>
<p class='mb-8'>{lang==='english' ? `It is unusual to need central heating during the summer. However, as the British weather is notoriously unpredictable, you may need to turn the central heating on:` : `Es inusual necesitar calefacción central durante el verano. Sin embargo, como el clima británico es notoriamente impredecible, es posible que deba encender la calefacción central:`}</p>

<ol>
     <li>{lang==='english' ? `1.	Press the CH button until the black marker in the display under CH is positioned next to AUTO. The heating will then come on during the day and will be off overnight.` : `1.	Presione el botón CH hasta que el marcador negro en la pantalla debajo de CH se coloque junto a AUTO. La calefacción se encenderá durante el día y se apagará durante la noche.`}</li>
     <li>{lang==='english' ? `2.	If you need the heating on all day and night, press the CH button until the black marker in the display under CH is positioned next to 24 HRS` : `2.	Si necesita que la calefacción esté encendida todo el día y la noche, presione el botón CH hasta que el marcador negro en la pantalla debajo de CH se coloque junto a 24 HRS`}</li>
</ol>

<p class='mb-8'>{lang==='english' ? `The red light will come on under CH when the central heating is on.` : `La luz roja se encenderá debajo de CH cuando la calefacción central esté encendida.`}</p>



</div>

</main>

</div>

</>

)

}

export default Heating;