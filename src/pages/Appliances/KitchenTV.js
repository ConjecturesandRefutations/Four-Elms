import { useContext, useEffect } from 'react'

import Navbar from "../../components/Navbar";

import TV from '../../images/Other/TV.png'

function KitchenTV(){

     const lang='english'

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>
<div class="grid md:grid-cols-4" >

     <div class='navbar' id='navKitchenTV'>

<Navbar/>

</div>

<main class="background md:col-span-3 pb-10" id='KitchenTV'>

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang==='english' ? `Kitchen TV` : `Televisión de cocina`}</h1>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `Controls` : `Control S`}</h2>

<img src={TV} alt='television'/>

<p class='mb-8'>{lang==='english' ? `Power. Switches the TV on and between modes. When you first switch the TV on it will be in Art mode – showing pictures. If you press it again it goes into TV mode – showing TV and apps. Ech time you press this button, you will switch backwards and forwards between Art mode and TV mode.` : `Power. Enciende el televisor y cambia de modo. Cuando encienda el televisor por primera vez, estará en modo Arte, mostrando imágenes. Si lo presiona nuevamente, entra en modo televisión, mostrando televisión y aplicaciones. Cada vez que presione este botón, alternará entre el modo Arte y el modo televisión.`}</p>
<p class='mb-8'>{lang==='english' ? `Number pad. Allows you to type in numbers for TV channels.` : `Number pad. Le permite escribir números para los canales de televisión.`}</p>
<p class='mb-8'>{lang==='english' ? `Pointer (this is a microphone on out controller). This allows you to command some apps by voice, e.g. YouTube.` : `Pointer (este es un micrófono en el controlador). Esto le permite controlar algunas aplicaciones por voz, por ejemplo , YouTube.`}</p>
<p class='mb-8'>{lang==='english' ? `Extra function. Allows you to choose what coloured buttons do for certain TV channels.` : `Extra function. Le permite elegir lo que los botones de colores hacen para ciertos canales de televisión.`}</p>
<p class='mb-8'>{lang==='english' ? `Return. Takes you back through app menus` : `Return. Te permite regresar por los menús de la aplicación`}</p>
<p class='mb-8'>{lang==='english' ? `Navigate & Select. See Smart hub below` : `Navigate and select. Ver Smart Hub a continuación`}</p>
<p class='mb-8'>{lang==='english' ? `Smart hub. When you first switch the TV on by pressing the Power button twice, you will see the Smart Hub. At the top of the screen will be the TV and at the bottom a list of apps. You can navigate the apps using the Navigate control left, right, up and down. Select the required app by pressing the Select button. If you press the Smart Hub button whilst in Smart Hub mode, the app will disappear from the screen so you can see the whole TV. If you press the Smart Hub button again, the Smart Hub will re-appear.` : `Smart Hub. Cuando encienda el televisor por primera vez presionando dos veces el botón de encendido, verá el Smart Hub. En la parte superior de la pantalla estará el televisor y en la parte inferior una lista de aplicaciones. Puede navegar por las aplicaciones usando el control Navegar hacia la izquierda, derecha, arriba y abajo. Seleccione la aplicación requerida presionando el botón Select. Si presiona el botón Smart Hub mientras está en el modo Smart Hub, la aplicación desaparecerá de la pantalla para que pueda ver todo el televisor. Si vuelve a presionar el botón Smart Hub, el Smart Hub volverá a aparecer.`}</p>
<p class='mb-8'>{lang==='english' ? `Pause and play. Used to pause or play recordings in apps or catchup TV.` : `Pause and Play. Se utiliza para pausar o reproducir grabaciones en aplicaciones o ponerse al día con la televisión.`}</p>
<p class='mb-8'>{lang==='english' ? `Vol. Press upwards to increase volume, press downwards to reduce volume and press inwards to mute/un-mute. ` : `vol. Presione hacia arriba para aumentar el volumen, presione hacia abajo para reducir el volumen y presione hacia adentro para silenciar/des-silenciar.`}</p>
<p class='mb-8'>{lang==='english' ? `CH. Press upwards to increase TV channel number, press downwards to reduce TV channel number and press inwards to TV channel guide. ` : `CH. Presione hacia arriba para aumentar el número de canal de televisión, presione hacia abajo para reducir el número de canal de televisión y presione hacia adentro para acceder a la guía de canales de televisión.`}</p>

<a class='text-blue-600 w-5/12 text-xl' id='urlSix' href='https://www.samsung.com/ae/support/tv-audio-video/how-to-use-smart-remote-control-for-samsung-tv/#:~:text=Point%20the%20Smart%20Remote%20at,now%20connected%20to%20your%20TV.'>{lang === 'english'  ? `Click for Instructions` : `Haga clic para obtener instrucciones`}</a>

</div>

</main>

</div>
</>

)

}

export default KitchenTV;