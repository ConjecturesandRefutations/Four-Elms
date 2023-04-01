import { useContext, useEffect } from 'react'
import { LangContext } from '../../context/language.context';

import Navbar from "../../components/Navbar";

import quookerOne from '../../images/Quooker/Quooker1.png'
import quookerTwo from '../../images/Quooker/Quooker2.jpg'

function Quooker(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" id='navQuooker'>

<Navbar/>

<main class="md:col-span-3" id='Quooker'>

<div class='md:pt-10 w-3/4 mx-auto' >


<h2 class='text-xl font-bold underline mb-6' id='quooker'>{lang==='english' ? `Quooker kitchen tap` : 'Grifo de cocina Quoker'}</h2>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `Hot and cold water` : `Agua fría y caliente`}</h2>

<p class='mb-8'>{lang==='english' ? `For cold water, the tap should be in the upright position, then push to the right. For hot water, rotate the tap to point towards you and push to the right.` : `Para agua fría, el grifo debe estar en posición vertical y luego empujar hacia la derecha. Para agua caliente, gire el grifo para que apunte hacia usted y empújelo hacia la derecha.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `Boiling and filtered water` : `Agua hirviendo y filtrada`}</h2>

<p class='mb-8'>{lang==='english' ? `Quooker taps are fitted with a childproof double-push-and-turn ring (image 1). A light ring lights up when the tap is dispensing water. The pull out hose on the Flex tap is fitted with an additional safety feature called the ‘boiling-water stop’, which ensures that no boiling water will be dispensed when the hose is pulled out.` : `La grifería Quooker está equipada con doble anilla de seguridad para niños (imagen 1). Un anillo de luz se enciende cuando el grifo está dispensando agua. La manguera extraíble del grifo Flex está equipada con una función de seguridad adicional denominada "parada de agua hirviendo", que garantiza que no se dispensará agua hirviendo cuando se extraiga la manguera.
Para hervir agua, empuje el anillo hacia abajo, hacia arriba y hacia abajo en rápida sucesión y luego gírelo hacia la derecha. Para agua filtrada, mantenga presionado el anillo hasta que la luz se vuelva azul y gire hacia la derecha.
`}</p>

<img src={quookerOne} alt='quookerOne' id='quooker-one'/>

<p class='mb-8'>{lang==='english' ? `For boiling water, push the ring down, up, down in quick succession and then rotate to the right. For filtered water, hold the ring down until the light turns blue and the rotate to the right
The light ring (image 3) is red for boiling water and blue for filtered water. It also illuminates red when the water in the tank is heating up. When the Quooker is not being used, the light will come on several times an hour for a short while. As soon as boiling water is dispensed from the tap, the light will come on quickly and stay on until all the water in the tank is up to temperature again. If the light ring is flashing, the tank is not heating the water and will require a reset. To reset the system, switch off the tank via the Q-shaped on/off switch on the top, wait a couple of minutes and then switch it on again. If it continues to flash, please contact the manufacturer.
` : `El anillo de luz (imagen 3) es rojo para agua hirviendo y azul para agua filtrada. También se ilumina en rojo cuando el agua del depósito se está calentando. Cuando no se esté utilizando el Quooker, la luz se encenderá varias veces por hora durante un breve periodo de tiempo. Tan pronto como se dispense agua hirviendo del grifo, la luz se encenderá rápidamente y permanecerá encendida hasta que toda el agua del tanque alcance la temperatura nuevamente. Si el anillo de luz parpadea, el tanque no está calentando el agua y requerirá un reinicio. Para reiniciar el sistema, apague el tanque a través del interruptor de encendido/apagado en forma de Q en la parte superior, espere un par de minutos y luego vuelva a encenderlo. Si sigue parpadeando, póngase en contacto con el fabricante.`}</p>

<img src={quookerTwo} alt='quookerTwo' id='quooker-two'/>

</div>

</main>

</div>

</>

)

}

export default Quooker;