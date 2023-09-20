import { useContext, useEffect } from 'react'

import Navbar from "../components/Navbar";

import Bins from "../images/Other/Bins.png"

function Waste(){

     const lang='english'
     
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navWaste'>

<Navbar/>

</div>

<main class="background md:col-span-3 pb-8" id='Waste' >

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Waste disposal and recycling` : 'Eliminación de residuos y reciclaje'} </h1>

<h2 class='text-l font-bold mb-4 mt-8'> {lang==='english' ? `Kitchen bins` : 'Papeleras de cocina'} </h2>

<p class='mb-4'>{lang==='english' ? 'There are 4 bins in the kitchen:' : 'Hay 4 papeleras en la cocina:'}</p>


<ul>
     <li class='ml-8'>{lang==='english' ? '•	Under the sink is a grey bin for food waste – this should be put in the green food waste bin outside.' : '•	Debajo del fregadero hay un contenedor gris para residuos de alimentos; debe colocarse en el contenedor verde para residuos de alimentos que se encuentra afuera.'}</li>
     <br/>
     <li class='ml-8'>{lang==='english' ? `•	The under-worksurface cupboard to the far right of the sink contains 2 bins.` : '•	El armario debajo de la superficie de trabajo en el extremo derecho del fregadero contiene 2 recipientes.'}</li>

          <li class='subList ml-24'>{lang==='english' ? `The one in front is for general waste and should be put in the black bin outside.` : 'El que está delante es para desechos generales y debe colocarse en el contenedor negro afuera.'}</li>
          <li class='subList ml-24'>{lang==='english' ? `The one behind is for recycling and should be put in the blue bin outside.` : 'o	El que está detrás es para reciclar y debe colocarse en el contenedor azul afuera.'}</li>

<br/>

     <li class='ml-8'>{lang==='english' ? '•	In the dark green cabinet in the cupboard next to the utility room door is a second, larger, bin for recycling. This should also be put in the blue bin outside.' : '•	En el gabinete verde oscuro en el armario al lado de la puerta del lavadero hay un segundo contenedor más grande para desechos reciclables. Esto también debe colocarse en el contenedor azul afuera.'}</li>
</ul>


</div>

</main>

</div>

</>

)

}

export default Waste;