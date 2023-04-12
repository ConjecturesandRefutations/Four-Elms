import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Information(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navInformation'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Information' >

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Information on the Local Area` : 'Información sobre el área local'} </h1>

<h2 class='text-l font-bold mb-4 mt-8'> {lang==='english' ? `Godalming` : 'Información sobre el área local'} </h2>


<p class='mb-4'>{lang==='english' ? `Godalming is a historic market town in Surrey. The town traverses the banks of the River Wey in the Greensand Ridge – a hilly, heavily wooded part of the outer London commuter belt and Green Belt. In 2007 Godalming was voted the fourth best area of the UK to live in. Godalming appeared in the movie 'The Holiday'.` : `Godalming es un pueblo comercial histórico en Surrey. El pueblo atraviesa las orillas del río Wey en Greensand Ridge, una parte montañosa y boscosa del cinturón de cercanías exterior de Londres y Green Belt. En 2007, Godalming fue votada como la cuarta mejor zona del Reino Unido para vivir. Godalming apareció en la película 'The Holiday'.`}</p>

<p class='mb-4'>{lang==='english' ? `Godalming High Street has many historic buildings with good restaurants, pubs and shops. Godalming is very near the city of Guildford with a large shopping centre and night life. It is also on the edge of the Surrey Hills countryside with many walks, cycle and horse-riding routes.` : `La calle mayor de Godalming tiene muchos edificios históricos con buenos restaurantes, pubs y tiendas. Godalming está muy cerca de la ciudad de Guildford con un gran centro comercial y vida nocturna. También está en el borde de la campiña de Surrey Hills, con muchas rutas de senderismo, ciclismo y equitación.`}</p>

<p class='mb-4'>{lang==='english' ? `Godalming has easy access to the countryside and London. There is a 15 minute walk to station and a 45 minute train ride to centre of London. It's a 20 minute’s drive to the London Orbital motorway.` : `Godalming tiene fácil acceso al campo y a Londres. Hay 15 minutos a pie hasta la estación de trenes y 45 minutos en tren hasta el centro de Londres. Está a 20 minutos en coche de la autopista London Orbital.`}</p>

<h2 class='text-l font-bold mb-4 mt-8'> {lang==='english' ? `Places to visit` : 'Lugares para visitar'} </h2>

<p class='mb-4'>{lang==='english' ? `There are many places to visit in and around Godalming.` : `Hay muchos lugares para visitar en Godalming y sus alrededores.`}</p>

<a class='text-blue-600' target="_blank" href='https://www.visitsurrey.com/things-to-do/searchresults?prodtypes=ATTR&sr=1&poly=5513, https://www.tripadvisor.co.uk/Restaurants-g635924-Godalming_Surrey_England.html, https://www.greatbritishlife.co.uk/homes-and-gardens/places-to-live/22576558.best-things-see-godalming/'>
{lang==='english' ? `Things to do in Godalming` : `Qué hacer en Godalming`}
  </a>

<br/>
<br/>

  <p class='mb-4'>{lang==='english' ? 'Here is a short list:' : 'Aquí está una lista corta:'}</p>

<ol class='ordered ml-8'>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ol>

</div>

</main>

</div>

</>

)

}

export default Information;