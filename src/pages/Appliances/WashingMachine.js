import { useContext, useEffect } from 'react'
import { LangContext } from '../../context/language.context';

import Navbar from "../../components/Navbar";

import WashingMachineImg from '../../images/Other/WashingMachine.png'
import WashingSpanish from '../../images/Other/WashingSpanish.png'

function WashingMachine(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" >

     <div class='navbar' id='navWashingMachine'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='WashingMachine'>

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang === 'english'  ? `Washing machine` : `Lavadora`} </h1>

<h2 class='text-xl mb-8'>{lang === 'english'  ? `Controls` : `Panel de controles`}</h2>

{lang==='english' ? <img src={WashingMachineImg} alt='washing machine'/> : <img src={WashingSpanish} alt='washing machine'/>}

<h2 class='text-xl mb-6'>{lang === 'english'  ? `Instructions` : `Instrucciones`}</h2>

<a class='text-blue-600 mb-2' id='urlFive' href='https://media3.bosch-home.com/Documentos/9001442012_A.pdf'>https://media3.bosch-home.com/Documentos/9001442012_A.pdf</a>

<p class='mb-8'>{lang==='english' ? `Divide the clothes to be washed into three piles, by colour. Only wash clothes in one pile with other clothes from the same pile, in order to minimise colour transfer:` : `Divide la ropa a lavar en tres montones, por color. Solo lave la ropa en una pila con otras prendas de la misma pila, para minimizar la transferencia de color:`}</p>

<li>{lang==='english' ? `Whites` : `Ropa blanca`}</li>
<li>{lang==='english' ? `Light coloured` : `De color claro`}</li>
<li>{lang==='english' ? `Dark coloured` : `Color oscuro`}</li>

<p class='mb-8 mt-4'>{lang==='english' ? `Open the main door and load clothes from one of the piles. The drum of the washing machine should be between ½ and ¾ full. Pull out the drawer to the left of the programmes selector [2] and fill the left-hand drawer half-full of washing powder. Close the drawer.` : `Abre la puerta principal y carga la ropa de una de las pilas. El tambor de la lavadora debe estar entre ½ y ¾ lleno. Saque el cajón a la izquierda del Programme selector [2] y llene el cajón izquierdo hasta la mitad con detergente en polvo. Cierra el cajón.`}</p>

<p class='mb-8'>{lang==='english' ? `Set the programmes selector [2] as follows:` : `Ajuste el Programme selector [2] de la siguiente manera:`}</p>

<li>{lang==='english' ? `Super quick – drum is less than ½ full` : `Super rápido`}</li>
<li>{lang==='english' ? `40o to the right for drum ½ to ¾ full with synthetic clothes` : `40 lavados más largos`}</li>
<li>{lang==='english' ? `60o to the right for drum ½ to ¾ full with cotton clothes` : `60 algodón`}</li>

<p class='mb-8 mt-8'>{lang==='english' ? `On the Display panel [3], press Speed/Eco, then press Start/Reload.` : `En el Display panel [3], presione Speed/Eco, luego presione Start/Reload.`}</p>


</div>

</main>

</div>

</>

)

}

export default WashingMachine;