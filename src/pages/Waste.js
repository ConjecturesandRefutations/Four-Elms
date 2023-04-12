import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

import Bins from "../images/Bins/Bins.png"

function Waste(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navWaste'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Waste' >

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Waste disposal and recycling` : 'Eliminación de residuos y reciclaje'} </h1>

<h2 class='text-l font-bold mb-4 mt-8'> {lang==='english' ? `Bins` : 'Cubas de basura'} </h2>

<p class='mb-4'>{lang==='english' ? 'There are 4 wheelie bins and one food waste bin:' : 'Hay 4 cubos de basura con ruedas y un cubo de basura de alimentos:'}</p>

<ul>
     <li class='ml-8'>{lang==='english' ? '•	Blue wheelie bin is for recycled waste (see below for rules).' : '•	El contenedor con ruedas azul es para desechos reciclados (consulte las reglas a continuación)'}</li>
     <br/>
     <li class='ml-8'>{lang==='english' ? '•	Brown wheelie bin is for garden waste (this will only be used by our gardener, Thomas Filipek).' : '•	El contenedor con ruedas marrón es para los desechos del jardín (solo lo usará nuestro jardinero, Thomas Filipek).'}</li>
     <br/>
     <li class='ml-8'>{lang==='english' ? '•	Green food waste bin (see below for rules).' : '•	Contenedor verde de residuos de alimentos (consulte las reglas a continuación).'}</li>
     <br/>
     <li class='ml-8'>{lang==='english' ? '•	Black wheelie bin is for all other waste.' : '•	El contenedor con ruedas negro es para todos los demás desechos.'}</li>
</ul>

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

<h2 class='text-l font-bold mb-4 mt-8'> {lang==='english' ? `Collection cycle` : 'Ciclo de recogida'} </h2>

<p>{lang==='english' ? 'The collections alternate every other week:' : 'La recogida se alterna cada dos semanas:'}</p>

<br/>

<ul>

     <li class='ml-8'>{lang==='english' ? '•	Week 1, Black and green bins' : '•	Semana 1, contenedores negros y verdes.'}</li>
     <br/>
     <li class='ml-8'>{lang==='english' ? '•	Week 2, Blue and green bins.' : '•	Semana 2, contenedores azules y verdes.'}</li>
</ul>

<br/>
<p>{lang==='english' ? 'The following site gives details - https://www.waverley.gov.uk/Services/Bins-and-recycling/Rubbish-and-recycling-collections/Check-bin-collection-day' : 'El siguiente sitio brinda detalles: https://www.waverley.gov.uk/Services/Bins-and-recycling/Rubbish-and-recycling-collections/Check-bin-collection-day'}</p>
<br/>
<p>{lang==='english' ? 'Thomas Filipek will manage the brown wheelie bins.' : 'Thomas Filipek gestionará los contenedores marrones con ruedas.'}</p>
<br/>
<p>{lang==='english' ? 'If in doubt, copy what the rest of the road is doing!' : 'En caso de duda, ¡copia lo que está haciendo el resto dela calle!'}</p>


<h2 class='text-l font-bold mb-4 mt-8'> {lang==='english' ? `Rules` : 'Normas'} </h2>
<p>{lang==='english' ? 'This site defines what can go in each bin. Be careful – if you do not follow these rules, the bin collection people may refuse to take the waste away!' : 'Este sitio define lo que puede ir en cada contenedor. Tenga cuidado: si no sigue estas reglas, ¡la gente de recolección de basura puede negarse a llevarse los desechos!'}</p>
<br/>
<p>{lang==='english' ? 'https://www.waverley.gov.uk/Services/Bins-and-recycling/Rubbish-and-recycling-collections/What-to-put-in-which-bin' : 'https://www.waverley.gov.uk/Services/Bins-and-recycling/Rubbish-and-recycling-collections/What-to-put-in-which-bin'}</p>

<br/>
<img src={Bins} alt='bins'/>

</div>

</main>

</div>

</>

)

}

export default Waste;