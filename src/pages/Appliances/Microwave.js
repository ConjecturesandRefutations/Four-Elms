import { useContext, useEffect } from 'react'
import { LangContext } from '../../context/language.context';

import Navbar from "../../components/Navbar";

import MicrowaveImg from '../../images/Other/Microwave.png'

function Microwave(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" >

     <div class='navbar' id='navMicrowave'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Microwave'>

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang === 'english'  ? `Instructions for Microwave` : `Instrucciones para Microondas`} </h1>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `Front Panel` : `Panel frontal`}</h2>

<img src={MicrowaveImg} alt='microwave'/>

<ol>

<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `Stop Button. ` : `Botón de parada. `}</span>{lang === 'english'  ? `Press to stop or reset any of the oven functions.` : `Presione para detener o restablecer cualquiera de las funciones del horno.`}</li>
<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `Power Button.` : `Botón de encendido. `}</span>{lang === 'english'  ? `Use to set the desired microwave power level.` : `Use para establecer el nivel de potencia de microondas deseado.`}</li>
<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `Auto Defrost Button.` : `Botón de descongelación automática.`}</span>{lang === 'english'  ? `Use to select Auto Defrost function.` : `Utilícelo para seleccionar la función de descongelación automática.`}</li>
<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `-/+ Button. ` : `Botón -/+.`}</span>{lang === 'english'  ? `Use to increase/decrease the cooking time or the weight of food.` : `Utilícelo para aumentar/disminuir el tiempo de cocción o el peso de los alimentos.`}</li>
<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `Clock Button. ` : `Botón de reloj.`}</span>{lang === 'english'  ? `Use to set the 24-hour clock.` : `Úselo para configurar el reloj de 24 horas.`}</li>
<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `Memo Button. ` : `Botón de memoria.`}</span>{lang === 'english'  ? `Use to recall stored favourite setting.` : `Úselo para recuperar la configuración favorita almacenada.`}</li>
<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `Manual defrost Button. ` : `Botón de descongelación manual.`}</span>{lang === 'english'  ? `Use to select manual defrost function.` : `Utilícelo para seleccionar la función de descongelación manual.`}</li>
<li class='ordered mb-8 ml-8'><span class='font-bold mr-2'>{lang === 'english'  ? `Start Button. ` : `Botón de inicio.`}</span>{lang === 'english'  ? `Use to start the cooking process or add 30 seconds cooking time.` : `Úselo para iniciar el proceso de cocción o agregue 30 segundos de tiempo de cocción.`}</li>

</ol>

<h2 class='text-xl mb-2'>{lang === 'english'  ? `Instructions` : `Instrucciones`}</h2>
<a class='text-blue-600 mb-8' target='_blank' href='https://www.manualslib.com/download/1365205/Hotpoint-Curve-Mwh-1331-B.html'> https://www.manualslib.com/download/1365205/Hotpoint-Curve-Mwh-1331-B.html</a>
<br/><br/>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `START` : `COMENZAR`}</h2>
<p class='mb-8'>{lang==='english' ? `This function is used for quick reheating of food with a high water content such as clear soups, coffee or tea. ` : `Esta función se utiliza para calentar rápidamente alimentos con un alto contenido de agua, como sopas claras, café o té.`}</p>
<p class='mb-8'>{lang==='english' ? `Press the Start button. This function automatically starts with maximum microwave power level and the cooking time set to 30 seconds. Each additional press increases the time with 30 seconds. You may also alter the time by turning the adjust knob to increase or decrease the time after the function has started.` : `Pulse el botón Inicio. Esta función se inicia automáticamente con el nivel máximo de potencia de microondas y el tiempo de cocción establecido en 30 segundos. Cada pulsación adicional aumenta el tiempo en 30 segundos. También puede modificar el tiempo girando la perilla de ajuste para aumentar o disminuir el tiempo después de que se haya iniciado la función.`}</p>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `COOK & REHEAT WITH MICROWAVES ` : `COCINAR Y CALENTAR CON MICROONDAS`}</h2>
<p class='mb-8'>{lang==='english' ? `Use this function for normal cooking and reheating, such as vegetables, fish, potatoes and meat.` : `Utilice esta función para cocciones y recalentamientos normales, como verduras, pescado, patatas y carne.`}</p>

<ol>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press the Power button repeatedly to set the power.` : `Presione el botón de encendido repetidamente para configurar la potencia.`}</li>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press the +/- button to set the cooking time.` : `Presione el botón +/- para configurar el tiempo de cocción.`}</li>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press the Start button. ` : `Pulse el botón Inicio.`}</li>
</ol>

<p class='mb-8'>{lang==='english' ? `Once the cooking process has been started: The time can easily be increased in 30-second steps by pressing the Start button. Each press increases the time with 30 seconds. You may also alter the time by turning the adjust knob to increase or decrease the time.` : `Una vez que se ha iniciado el proceso de cocción: El tiempo se puede aumentar fácilmente en pasos de 30 segundos presionando el botón Inicio. Cada pulsación aumenta el tiempo en 30 segundos. También puede modificar el tiempo girando la perilla de ajuste para aumentar o disminuir el tiempo.`}</p>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `AUTO DEFROST ` : `DESCONGELACIÓN AUTOMÁTICA`}</h2>
<p class='mb-8'>{lang==='english' ? `Use this function for defrosting Meat, Poultry, Fish, fruit, vegetables and bread. Auto Defrost should only be used if the net weight is between 100 g- 1.5 kg.` : `Utilice esta función para descongelar carne, aves, pescado, frutas, verduras y pan. La descongelación automática solo debe usarse si el peso neto está entre 100 g y 1,5 kg.`}</p>
<p class='mb-8'>{lang==='english' ? `Always place the food on the glass turntable.` : `Coloque siempre la comida en el plato giratorio de cristal.`}</p>

<ol>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press to stop or reset any of the oven functions.` : `Pulse el botón de descongelación automática.`}</li>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Use to set the desired microwave power level.` : `Presione el botón +/- para establecer el peso de los alimentos.`}</li>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press the Start button.` : `Pulse el botón Inicio.`}</li>
</ol>

<p class='mb-8'>{lang==='english' ? `Midway through the defrosting process the oven stops and prompts you to TURN FOOD.` : `A la mitad del proceso de descongelación, el horno se detiene y le solicita DAR LA VUELTA A LA COMIDA.`}</p>

<ul class='dots'>
<li class='mb-8 ml-8'>{lang === 'english'  ? `Open the door.` : `Abre la puerta.`}</li>
<li class='mb-8 ml-8'>{lang === 'english'  ? `Turn the food.` : `Da la vuelta a la comida.`}</li>
<li class='mb-8 ml-8'>{lang === 'english'  ? `Close the door and restart by pressing the Start button` : `Cierre la puerta y reinicie presionando el botón Inicio`}</li>
</ul>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `MANUAL DEFROST` : `DESCONGELACIÓN MANUAL`}</h2>
<ol>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press the Manual Defrost button` : `Pulse el botón Descongelación manual`}</li>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press +/- button to set the cooking time.` : `Presione el botón +/- para configurar el tiempo de cocción.`}</li>
<li class='ordered mb-8 ml-8'>{lang === 'english'  ? `Press the Start button. In this mode the MW power level cannot be adjusted, and it will be fixed to 160w.` : `Pulse el botón Inicio. En este modo, el nivel de potencia de MW no se puede ajustar y se fijará en 160w.`}</li>
</ol>

<p class='mb-8'>{lang==='english' ? `Check and inspect the food regularly. Experience will give you the times needed for various amounts. Frozen food in plastic bags, plastic films or cardboard packages can be placed directly in the oven as long as the package has no metal parts (e.g. metal twist ties). The shape of the package alters the defrosting time. Shallow packets defrost more quickly than a deep block. Separate pieces as they begin to defrost. Individual slices defrost more easily. Shield areas of food with small pieces of aluminium foil if they start to become warm (e.g. chicken legs and wing tips). Turn large joints halfway through the defrosting process. Boiled food, stews and meat sauces defrost better if stirred during defrosting time. When defrosting it is better to under-thaw the food slightly and allow the process to finish during standing time. Standing time after defrosting always improves the result since the temperature will then be evenly distributed throughout the food.` : `Revise e inspeccione los alimentos con regularidad. La experiencia le dará los tiempos necesarios para varias cantidades. Los alimentos congelados en bolsas de plástico, películas de plástico o paquetes de cartón se pueden colocar directamente en el horno siempre que el paquete no tenga partes metálicas (p. ej., bridas metálicas). La forma del paquete altera el tiempo de descongelación. Los paquetes poco profundos se descongelan más rápido que un bloque profundo. Separe las piezas a medida que comiencen a descongelarse. Las rebanadas individuales se descongelan más fácilmente. Proteja las áreas de los alimentos con pequeños trozos de papel de aluminio si comienzan a calentarse (p. ej., muslos de pollo y puntas de las alas). Gire los pedazos grandes a la mitad del proceso de descongelación. Los alimentos hervidos, guisos y salsas de carne se descongelan mejor si se remueven durante el tiempo de descongelación. Al descongelar, es mejor descongelar ligeramente los alimentos y dejar que el proceso termine durante el tiempo de reposo. El tiempo de reposo después de la descongelación siempre mejora el resultado ya que la temperatura se distribuirá uniformemente por toda la comida.`}</p>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `PAUSE OR STOP COOKING` : `PAUSAR O DEJAR DE COCINAR`}</h2>

<p class='mb-8'>{lang==='english' ? `To pause cooking: The cooking can be paused to check, turn or stir the food by opening the door. The setting will be maintained for 10 minutes. To continue cooking:` : `Para pausar la cocción: La cocción se puede pausar para revisar, girar o revolver la comida abriendo la puerta. El ajuste se mantendrá durante 10 minutos. Para continuar cocinando:`}</p>

<ul>
<li class='mb-8 ml-8'>{lang === 'english'  ? `• Close the door and press the Start button ONCE. The cooking is resumed from where it was paused.` : `• Cierre la puerta y presione el botón Inicio UNA VEZ. La cocción se reanuda desde donde se detuvo.`}</li>
<li class='mb-8 ml-8'>{lang === 'english'  ? `• Pressing the Start button TWICE will increase the time by 30 seconds.` : `• Al presionar el botón Inicio DOS VECES aumentará el tiempo en 30 segundos.`}</li>
</ul>

<p class='mb-8'>{lang==='english' ? `If you don’t want to continue cooking, remove the food, close the door and press the STOP button.` : `Si no desea seguir cocinando, retire los alimentos, cierre la puerta y presione el botón STOP.`}</p>

<p class='mb-8'>{lang==='english' ? `After cooking ends, the fan, turntable and cavity lamp is on before pressing STOP button, it’s normal. A beep will signal once a minute for 10 minutes when the cooking is finished. Press the STOP button or open the door to cancel the signal. The oven will only hold the settings for 60 seconds if the door is opened and then closed after the cooking is finished.` : `Después de que finaliza la cocción, el ventilador, el plato giratorio y la lámpara de la cavidad están encendidos antes de presionar el botón STOP, es normal. Un pitido indicará una vez por minuto durante 10 minutos cuando termine la cocción. Presione el botón STOP o abra la puerta para cancelar la señal. El horno solo mantendrá la configuración durante 60 segundos si la puerta se abre y luego se cierra después de que termine la cocción.`}</p>


</div>

</main>

</div>

</>

)

}

export default Microwave;