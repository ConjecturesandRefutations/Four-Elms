import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Towel(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

<div class='navbar' id='navTowels'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Towels' >

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Towels, linen & kitchen supplies` : 'Toallas, ropa de cama y utensilios de cocina.'} </h1>

<p>{lang==='english' ? 'There are towels in each bathroom and spare towels in the airing cupboard next to the family bathroom.' : 'Hay toallas en cada baño y toallas de repuesto en el armario secarropa al lado del baño familiar.'}</p>
<br/>
<p>{lang==='english' ? 'Spare bed linen is available in each bedroom. You can store this in the airing cupboard if you wish.' : 'Ropa de cama de repuesto está disponible en cada dormitorio. Puede guardar esto en el armario de ventilación si lo desea.'}</p>
<br/>
<p>{lang==='english' ? 'Tea towels to dry plates and cutlery and rags to clean the kitchen are kept in the top drawer opposite the large mirror.' : 'Los paños de cocina para secar platos y cubiertos y los trapos para limpiar la cocina se guardan en el cajón superior frente al gran espejo.'}</p>
<br/>

</div>

</main>

</div>

</>

)

}

export default Towel;