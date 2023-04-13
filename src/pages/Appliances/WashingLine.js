import { useContext, useEffect } from 'react'
import { LangContext } from '../../context/language.context';

import Navbar from "../../components/Navbar";

function WashingLine(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" >

     <div class='navbar' id='navWashingLine'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='WashingLine'>

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang === 'english'  ? `Washing line` : `Tendedero`} </h1>

<p class='mb-8'>{lang==='english' ? `Should you wish to use a washing line, it is to the right of the garage, when you are facing the back of the garage. You pull the washing line diagonally across the patio beside the kitchen an you will see a hook to attach it to. You then need to ‘lock’ the washing line by wrapping it around the V-shaped part on the outside of the washing line holder.` : `Si desea usar un tendedero, está a la derecha del garaje, cuando está mirando hacia la parte trasera del garaje. Tire del tendedero en diagonal a través del patio al lado de la cocina y verá un gancho para sujetarlo. Luego debe ‘atar’ el tendedero envolviéndolo alrededor de la parte en forma de V en el exterior del soporte del tendedero.`}</p>

<p class='mb-8'>{lang==='english' ? `In wet weather, you can hang washing up on the rack in the Utility room. Let it down to load the washing and then raise it up to keep it out of the way.` : `Cuando llueve, puede colgar la ropa en el estante del lavadero. Bájalo para cargar la ropa y luego levántelo para que no estorbe.`}</p>


</div>

</main>

</div>

</>

)

}

export default WashingLine;