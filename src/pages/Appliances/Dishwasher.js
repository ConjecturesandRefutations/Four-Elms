import { useContext, useEffect } from 'react'

import Navbar from "../../components/Navbar";

import DishwasherOne from '../../images/Dishwasher/DishwasherOne.png'
import DishwasherTwo from '../../images/Dishwasher/DishwasherTwo.png'

function Dishwasher(){

     const lang='english'
     
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navDishwasher'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Dishwasher'>

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang === 'english'  ? `Instructions for Dishwasher` : `Instrucciones para lavavajillas`} </h1>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `Controls` : `Mandos`}</h2>

<img class='mb-4' src={DishwasherOne} alt='dishwasher knobs' />

<ol class='ordered ml-8 font-bold'>

<li class='mb-2'>{lang==='english' ? 'ON/OFF button ' : 'Boton de encendido / apagado'}</li>

<li class='mb-2'>{lang==='english' ? 'Programme buttons ' : 'Botones de programa'}</li>

<li class='mb-2'>{lang==='english' ? 'Water supply display' : 'Pantalla de suministro de agua'}</li>

<li class='mb-2'>{lang==='english' ? 'Special salt refill indicator ' : 'Indicador de recarga de sal especial'}</li>

<li class='mb-2'>{lang==='english' ? `Rinse aid refill indicator "Rinse aid system" → Page 32 6 ` : `Indicador de recarga de abrillantador "Sistema de abrillantador" → Página 32 6`}</li>

<li class='mb-2'>{lang==='english' ? 'Programme buttons and additional functions ' : 'Botones de programa y funciones adicionales'}</li>

<li class='mb-2'>{lang==='english' ? 'Start button and reset button ' : 'Botón de inicio y botón de reinicio'}</li>

<li class='mb-2'>{lang==='english' ? 'Timer programming' : 'Programación del temporizador'}</li>

<li class='mb-2'>{lang==='english' ? 'Door opener' : 'Abridor de puerta.'}</li>

<div class='badDiv'>
<li class='mr-4'>{lang==='english' ? 'Display.' : 'Mostrar'}</li>
<div class='font-normal'>{lang==='english' ? 'The display shows information about the remaining running time or the basic settings. You can change the basic settings via the display and the setting buttons. ' : 'La pantalla muestra información sobre el tiempo de funcionamiento restante o la configuración básica. Puede cambiar la configuración básica a través de la pantalla y los botones de configuración.'}</div>
</div>

</ol>

<img src={DishwasherTwo} alt='dishwasherTwo' class='mt-4'/>

<p class='mb-8 font-bold'>{lang==='english' ? `2. Detergent Dispenser` : `2. Dispensador de detergente`}</p>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `Instructions` : `Instrucciones`}</h2>

<a class='text-blue-600' id='urlTwo' href='https://media3.neff-international.com/Documents/9001433670_C.pdf'>https://media3.neff-international.com/Documents/9001433670_C.pdf</a>

<ol class='ordered ml-8'>

<li class='mb-2'>{lang==='english' ? 'Load the dishwater' : 'Cargar el lavavajillas'}</li>

<li class='mb-2'>{lang==='english' ? 'Find Finish tablet under sink and put into detergent dispenser. Slide little door (2) shut' : 'Encuentre la tableta Finish debajo del fregadero y colóquela en el dispensador de detergente. Desliza la puerta para cerrarla (2)'}</li>

<li class='mb-2'>{lang==='english' ? 'Press the ON/OFF button (1)' : 'Presione el botón de ENCENDIDO/APAGADO (1)'}</li>

<li class='mb-2'>{lang==='english' ? 'Select 40o (Button A)' : 'Seleccione 40 o (Botón A)'}</li>

<li class='mb-2'>{lang==='english' ? `The Display (10) will flash` : `La pantalla (10) parpadeará`}</li>

<li class='mb-2'>{lang==='english' ? 'Press start' : 'Presiona inicio'}</li>

<li class='mb-2'>{lang==='english' ? 'The Display (10) will show solid red' : 'La pantalla (10) mostrará rojo continuo'}</li>

<li class='mb-2'>{lang==='english' ? 'Close the door' : 'Cierre la puerta'}</li>

<li class='mb-2'>{lang==='english' ? 'The dishwasher will start. You will see a red light on the floor, indicating that it is running' : 'El lavavajillas comenzará. Verás una luz roja en el suelo, indicando que está funcionando'}</li>

<li class='mb-2'>{lang==='english' ? 'When the red light on the floor stops, the dishwasher is ready to unload' : 'Cuando la luz roja en el piso se detiene, el lavavajillas está listo para descargar'}</li>

<li class='mb-2'>{lang==='english' ? 'If you want to add anything after the cleaning cycle has started, just open the door, add the item, re-close and it will continue where it left off' : 'Si desea agregar algo después de que haya comenzado el ciclo de limpieza, simplemente abra la puerta, agregue el artículo, vuelva a cerrar y continuará donde lo dejó'}</li>


</ol>

</div>

</main>

</div>

</>

)

}

export default Dishwasher;