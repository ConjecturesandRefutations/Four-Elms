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

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Information on the Local Area` : 'Información sobre el área local'} </h1>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Godalming` : 'Información sobre el área local'} </h2>


<p class='mb-4'>{lang==='english' ? `Godalming is a historic market town in Surrey. The town traverses the banks of the River Wey in the Greensand Ridge – a hilly, heavily wooded part of the outer London commuter belt and Green Belt. In 2007 Godalming was voted the fourth best area of the UK to live in. Godalming appeared in the movie 'The Holiday'.` : `Godalming es un pueblo comercial histórico en Surrey. El pueblo atraviesa las orillas del río Wey en Greensand Ridge, una parte montañosa y boscosa del cinturón de cercanías exterior de Londres y Green Belt. En 2007, Godalming fue votada como la cuarta mejor zona del Reino Unido para vivir. Godalming apareció en la película 'The Holiday'.`}</p>

<p class='mb-4'>{lang==='english' ? `Godalming High Street has many historic buildings with good restaurants, pubs and shops. Godalming is very near the city of Guildford with a large shopping centre and night life. It is also on the edge of the Surrey Hills countryside with many walks, cycle and horse-riding routes.` : `La calle mayor de Godalming tiene muchos edificios históricos con buenos restaurantes, pubs y tiendas. Godalming está muy cerca de la ciudad de Guildford con un gran centro comercial y vida nocturna. También está en el borde de la campiña de Surrey Hills, con muchas rutas de senderismo, ciclismo y equitación.`}</p>

<p class='mb-4'>{lang==='english' ? `Godalming has easy access to the countryside and London. There is a 15 minute walk to station and a 45 minute train ride to centre of London. It's a 20 minute’s drive to the London Orbital motorway.` : `Godalming tiene fácil acceso al campo y a Londres. Hay 15 minutos a pie hasta la estación de trenes y 45 minutos en tren hasta el centro de Londres. Está a 20 minutos en coche de la autopista London Orbital.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Places to visit` : 'Lugares para visitar'} </h2>

<p class='mb-4'>{lang==='english' ? `There are many places to visit in and around Godalming.` : `Hay muchos lugares para visitar en Godalming y sus alrededores.`}</p>

<a class='text-blue-600' target="_blank" href='https://www.visitsurrey.com/things-to-do/searchresults?prodtypes=ATTR&sr=1&poly=5513, https://www.tripadvisor.co.uk/Restaurants-g635924-Godalming_Surrey_England.html, https://www.greatbritishlife.co.uk/homes-and-gardens/places-to-live/22576558.best-things-see-godalming/'>
{lang==='english' ? `Things to do in Godalming` : `Qué hacer en Godalming`}
  </a>

<br/>
<br/>

  <p class='mb-4'>{lang==='english' ? 'Here is a short list:' : 'Aquí está una lista corta:'}</p>

<ol class='ordered ml-8'>

<li>{lang==='english' ? 'Visit Winkworth Arboretum: This stunning National Trust site is just a short drive from Godalming and boasts over 1,000 species of trees and shrubs. The arboretum is particularly beautiful in the autumn when the trees are changing color. ' : 'Visite Winkworth Arboretum: este impresionante sitio del National Trust se encuentra a poca distancia de Godalming y cuenta con más de 1,000 especies de árboles y arbustos. El arboreto es especialmente hermoso en otoño, cuando los árboles cambian de color.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.nationaltrust.org.uk/visit/surrey/winkworth-arboretum'>https://www.nationaltrust.org.uk/visit/</a>

<br/><br/>

<li>{lang==='english' ? 'Explore Loseley Park: Loseley Park is a beautiful Elizabethan manor house and garden located just outside of Godalming. Take a tour of the house and enjoy a stroll around the gardens, which include a walled garden, rose garden, and herb garden.' : 'Explore Loseley Park: Loseley Park es una hermosa casa solariega Isabelina y un jardín ubicado a las afueras de Godalming. Haga un recorrido por la casa y disfrute de un paseo por los jardines, que incluyen un jardín amurallado, un jardín de rosas y un jardín de hierbas.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.loseleypark.co.uk/'>https://www.loseleypark.co.uk/</a>

<br/><br/>

<li>{lang==='english' ? 'Walk the North Downs Way: The North Downs Way is a long-distance walking trail that passes through Godalming. Take a leisurely stroll through the countryside and enjoy the stunning views of the Surrey Hills.' : 'Camine por North Downs Way: North Downs Way es un sendero para caminar de larga distancia que pasa por Godalming. Dé un paseo tranquilo por el campo y disfrute de las impresionantes vistas de las colinas de Surrey.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.nationaltrail.co.uk/en_GB/trails/north-downs-way/'>https://www.nationaltrail.co.uk/en_GB/trails</a>

<br/><br/>

<li>{lang==='english' ? 'Visit Godalming Museum: Learn about the history of Godalming at this fascinating museum, which features exhibits on local industries such as the wool trade and printing. ' : 'Visite el Museo de Godalming: aprenda sobre la historia de Godalming en este fascinante museo, que presenta exhibiciones sobre industrias locales como el comercio de lana y la imprenta.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.godalmingmuseum.org.uk/'>https://www.godalmingmuseum.org.uk/</a>

<br/><br/>

<li>{lang==='english' ? 'Take a trip to Guildford: Just a short drive or train ride from Godalming is the historic town of Guildford. Visit Guildford Castle, explore the shops and restaurants, or take a walk along the River Wey. ' : 'Haga un viaje a Guildford: a poca distancia en automóvil o en tren desde Godalming se encuentra la ciudad histórica de Guildford. Visite el castillo de Guildford, explore las tiendas y los restaurantes, o dé un paseo por el río Wey.'}</li>
<a class="text-blue-600" target="_blank" href='. https://www.nationaltrust.org.uk/visit/surrey/river-wey-and-godalming-navigations-and-dapdune-wharf'>. https://www.nationaltrust.org.uk/visit/surrey/</a>

<br/><br/>

<li>{lang==='english' ? 'Go fishing at Frensham Trout Fishery: Just a short drive from Godalming is Frensham Trout Fishery, where you can spend a relaxing afternoon fishing for trout in the beautiful Surrey countryside.' : 'Vaya a pescar a Frensham Trout Fishery: a poca distancia de Godalming se encuentra Frensham Trout Fishery, donde puede pasar una tarde relajante pescando truchas en la hermosa campiña de Surrey.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.frenshamtroutfishery.com/'>https://www.frenshamtroutfishery.com/</a>

<br/><br/>

<li>{lang==='english' ? 'Visit the Watts Gallery: The Watts Gallery is a museum dedicated to the works of the Victorian artist and sculptor, George Frederic Watts. The gallery is located in the nearby village of Compton and features a collection of his paintings and sculptures. ' : 'Visite la Galería Watts: La Galería Watts es un museo dedicado a las obras del artista y escultor victoriano George Frederic Watts. La galería está ubicada en el cercano pueblo de Compton y presenta una colección de sus pinturas y esculturas.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.wattsgallery.org.uk/'>https://www.wattsgallery.org.uk/</a>

<br/><br/>

<li>{lang==='english' ? 'Take a boat trip along the River Wey: The River Wey runs through Godalming and offers the opportunity for a leisurely boat trip. Take a guided tour or hire a boat and explore the river at your own pace.' : 'Tome un paseo en bote por el río Wey: el río Wey atraviesa Godalming y ofrece la oportunidad de un paseo en bote tranquilo. Realice una visita guiada o alquile un bote y explore el río a su propio ritmo.'}</li>
<a class="text-blue-600" target="_blank" href='https://farncombeboats.co.uk/'>https://farncombeboats.co.uk/</a>

<br/><br/>

<li>{lang==='english' ? `Explore the Devil's Punch Bowl: The Devil's Punch Bowl is a stunning natural amphitheater located just a short drive from Godalming. Take a walk around the rim of the bowl and enjoy the beautiful views of the surrounding countryside.` : `Explore Devil's Punch Bowl: Devil's Punch Bowl es un impresionante anfiteatro natural ubicado a poca distancia de Godalming. Dé un paseo por el borde del cuenco y disfrute de las hermosas vistas de la campiña circundante.`}</li>
<a class="text-blue-600" target="_blank" href='https://www.nationaltrust.org.uk/visit/surrey/hindhead-commons-and-the-devils-punch-bowl'>https://www.nationaltrust.org.uk/visit/punch</a>

<br/><br/>

<li>{lang==='english' ? 'Visit the Silent Pool Distillery: The Silent Pool Distillery is located in the nearby village of Albury and produces award-winning gin. Take a tour of the distillery and enjoy a tasting of their delicious gin.' : 'Visite la destilería Silent Pool: la destilería Silent Pool se encuentra en el pueblo cercano de Albury y produce una ginebra galardonada. Haz un recorrido por la destilería y disfruta de una degustación de su deliciosa ginebra.'}</li>
<a class="text-blue-600" target="_blank" href='https://silentpooldistillers.com/'>https://silentpooldistillers.com/</a>

<br/><br/>

<li>{lang==='english' ? 'Enjoy a round of golf at Broadwater Golf Club a beautiful 9-hole golf course located just outside of Godalming. Spend a relaxing afternoon playing a round of golf and enjoying the stunning views. ' : 'Disfrute de una ronda de golf en Broadwater Golf Club, un hermoso campo de golf de 9 hoyos ubicado en las afueras de Godalming. Pase una tarde relajada jugando al golf y disfrutando de las impresionantes vistas.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.broadwaterparkgolf.co.uk/'>https://www.broadwaterparkgolf.co.uk/</a>

<br/><br/>

<li>{lang==='english' ? 'Walk the Greensand Way: The Greensand Way is a long-distance walking trail that passes through Godalming. Take a walk through the beautiful countryside and enjoy the stunning views of the Surrey Hills.' : 'Camina por Greensand Way: Greensand Way es un sendero para caminar de larga distancia que pasa por Godalming. Dé un paseo por la hermosa campiña y disfrute de las impresionantes vistas de las colinas de Surrey.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.surreycc.gov.uk/culture-and-leisure/countryside/what-can-you-do/walking/long-walks/the-greensand-way-long-distance-route'>https://www.surreycc.gov.uk/culture-and-leisure/countryside/what-can-you-do/walking/long-walks/the-greensand-way-long-distance-route</a>

<br/><br/>

<li>{lang==='english' ? 'Visit the Rural Life Centre: The Rural Life Centre is located in the nearby village of Tilford and is a museum dedicated to rural life in Surrey. Explore the collection of historic buildings, farm machinery, and agricultural tools. ' : 'Visite el Centro de Vida Rural: El Centro de Vida Rural está ubicado en el cercano pueblo de Tilford y es un museo dedicado a la vida rural en Surrey. Explore la colección de edificios históricos, maquinaria agrícola y herramientas agrícolas.'}</li>
<a class="text-blue-600" target="_blank" href='https://rural-life.org.uk/'>https://rural-life.org.uk/</a>

<br/><br/>

<li>{lang==='english' ? 'Take a trip to the seaside: The seaside town of Brighton is just a short drive or train ride from Godalming. Visit the famous Brighton Pier, explore the shops and restaurants, or take a walk along the beach. ' : 'Haga un viaje a la costa: la ciudad costera de Brighton está a poca distancia en automóvil o en tren de Godalming. Visite el famoso muelle de Brighton, explore las tiendas y los restaurantes, o dé un paseo por la playa. '}</li>
<a class="text-blue-600" target="_blank" href='https://www.visitbrighton.com/'>https://www.visitbrighton.com/</a>

<br/><br/>

</ol>



<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Restaurants, cafes and pubs` : 'Restaurantes, cafeterías y pubs'} </h2>

<ol class='ordered ml-8'>

<li><span class='font-bold'>Piazza Firenze </span>{lang==='english' ? 'A delightful local Italian restaurant serving well cooked simple dishes.' : 'Un encantador restaurante italiano local que sirve platos sencillos bien cocinados.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.piazzafirenze.com/godalming'>https://www.piazzafirenze.com/godalming</a>

<br/><br/>


<li><span class='font-bold'>Côte </span>{lang==='english' ? 'One of a chain of French restaurants, serving traditional French food.' : 'Uno de una cadena de restaurantes franceses que sirve comida tradicional francesa.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.cote.co.uk/restaurant/godalming/'>https://www.cote.co.uk/restaurant/godalming/</a>

<br/><br/>

<li><span class='font-bold'>Deep Blue Fish and Chips </span>{lang==='english' ? 'Standard British fish and chips, done well.' : 'Fish and chips británico estándar, bien hecho.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.deepbluerestaurants.com/locations/godalming'>https://www.deepbluerestaurants.com/god</a>

<br/><br/>

<li><span class='font-bold'>The Wharf </span>{lang==='english' ? 'There are now more Indian restaurants in England than Fish and Chip restaurants! This is a good example.' : '¡Ahora hay más restaurantes indios en Inglaterra que restaurantes Fish and Chips! Es un buen ejemplo.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.thewharfgodalming.co.uk/'>https://www.thewharfgodalming.co.uk/</a>

<br/><br/>

<li><span class='font-bold'>Howling Owl </span>{lang==='english' ? 'A delightful bar and café very close to the house – easy walking distance. Open 6 days a week.' : 'Un encantador bar y cafetería muy cerca de la casa, a poca distancia a pie. Abierto 6 días a la semana.'}</li>
<a class="text-blue-600" target="_blank" href='https://www.howlingowl.co.uk/the-pavilion'>https://www.howlingowl.co.uk/the-pavilion</a>

<br/><br/>

<li><span class='font-bold'>Hilltop Restaurant </span>{lang==='english' ? 'An exceptional restaurant with magnificent views over the country side. The food is delicious, but beware, the location is rustic! ' : 'Un restaurante excepcional con magníficas vistas al campo. La comida es deliciosa, pero cuidado, ¡el lugar es rústico!'}</li>
<a class="text-blue-600" target="_blank" href='https://www.hilltop-kitchen.co.uk/'>https://www.hilltop-kitchen.co.uk/</a>

<br/><br/>

<li><span class='font-bold'>The Star </span>{lang==='english' ? 'Enjoy a pint at The Star Inn: This traditional English pub is located in the heart of Godalming and is famous for its real ale and cozy atmosphere.' : 'Disfrute de una pinta en The Star Inn: este tradicional pub inglés está ubicado en el corazón de Godalming y es famoso por su auténtica cerveza y su ambiente acogedor.'}</li>
<a class="text-blue-600" target="_blank" href='https://starinngodalming.co.uk/'>https://starinngodalming.co.uk/</a>

<br/><br/>

</ol>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Groceries` : `Comestibles`} </h2>

<p class='mb-4'>{lang==='english' ? `Large supermarkets:` : `Grandes supermercados:`}</p>
<a class="text-blue-600" target="_blank" href='https://stores.sainsburys.co.uk/0670/godalming'>https://stores.sainsburys.co.uk/0670/godalming</a>
<br/>
<a class="text-blue-600" target="_blank" href='https://www.waitrose.com/content/waitrose/en/bf_home/bf/216.html'>https://www.waitrose.com/godalming.html</a>
<br/>
<br/>

<p class='mb-4'>{lang==='english' ? `Local shops with longer opening hours:` : `Tiendas locales con horarios más amplios:`}</p>
<a class="text-blue-600" target="_blank" href='https://www.nisalocally.co.uk/stores/surrey/godalming/45-high-st'>https://www.nisastores/godalming/</a>
<br/>
<a class="text-blue-600" target="_blank" href='https://www.tesco.com/store-locator/godalming/portsmouth-rd'>https://www.tesco.com/portsmouth-rd</a>
<br/>
<br/>

<p class='mb-4'>{lang==='english' ? `On-line shopping:` : `Las compras en línea:`}</p>
<a class="text-blue-600" target="_blank" href='https://www.waitrose.com/'>https://www.waitrose.com/</a>
<br/>
<a class="text-blue-600" target="_blank" href='https://www.sainsburys.co.uk/'>https://www.sainsburys.co.uk/</a>


</div>


</main>

</div>

</>

)

}

export default Information;