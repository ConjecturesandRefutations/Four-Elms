import { useContext } from 'react'
import { LangContext } from '../context/language.context';

import Language from '../components/Language';

import Navbar from "../components/Navbar";

import Aga1 from '../images/Aga1.png'

function Appliances(){

     const { lang } = useContext(LangContext);

return(

<>

<div class="grid md:grid-cols-4">

<div id='nav-appliance'>

<Navbar />
<div className='md:hidden'>
<Language/>
</div>

</div>


<main class="md:col-span-3" id='appliances' >

<div class='md:pt-10 w-3/5 mx-auto'  >

<h1 class='text-2xl font-bold mb-8 mt-4' id='aga'> {lang==='english' ? 'Instruction for Appliances and Electronics' : 'Instrucciones para electrodomésticos y electrónica'} </h1>

<h2 class='text-l font-bold underline mb-6'>{lang==='english' ? 'THE SECRET OF AGA COOKING — HOW YOUR AGA COOKER WORKS' : 'EL SECRETO DE LA COCINA AGA: CÓMO FUNCIONA SU COCINA AGA'}</h2>

<p class='mb-8'>{lang==='english' ? `The principle of using cast iron to accumulate and store heat is the basis on which the Aga works. The Aga cooker is an outstandingly efficient energy store, steadily transferring the heat from its core, or from elements embedded in the cast iron, into its ovens and hotplates. Heat is transferred into the cast iron ovens and released steadily from all the inner surfaces simultaneously. Radiant energy, an infra-red heat, is produced from a heated mass and does not depend on hot oven air for transmission. In cooking, the absorption of the radiant heat seals the surface of the food, holding in the flavours and moisture. In an Aga cooker, the oven is the heat source. The cast iron sides, back, top and bottom, provide constant heat. The ovens are large, able to take a 13kg (28 lb) turkey. Seven Aga saucepans, with flat lids, can be stacked in the Simmering Oven. The Aga also emits gentle warmth and is often used as a heat source in the kitchen, as well as for cooking, where it is somewhat of a people magnet let alone a comforter for pets. No matter which Aga cooker you have, it will produce great tasting food cooked with the radiant heat of cast iron. With all Aga cookers there are often several ways of producing the same results, as any meeting of Aga owners will confirm.` : 'El principio de utilizar hierro fundido para acumular y almacenar calor es la base sobre la que trabaja Aga. La cocina Aga es un acumulador de energía excepcionalmente eficiente, que transfiere constantemente el calor desde su núcleo, o desde elementos incrustados en el hierro fundido, a sus hornos y placas de cocción. El calor se transfiere a los hornos de hierro fundido y se libera de manera constante desde todas las superficies internas simultáneamente. La energía radiante, un calor infrarrojo, se produce a partir de una masa calentada y no depende del aire caliente del horno para su transmisión. Al cocinar, la absorción del calor radiante sella la superficie de los alimentos, reteniendo los sabores y la humedad. En una cocina Aga, el horno es la fuente de calor. Los lados, parte trasera, superior e inferior de hierro fundido proporcionan calor constante. Los hornos son grandes, con capacidad para un pavo de 13 kg (28 lb). Siete cacerolas Aga, con tapas planas, se pueden apilar en el horno a fuego lento. El Aga también emite un calor suave y se usa a menudo como fuente de calor en la cocina, así como para cocinar, donde es un imán para las personas y mucho menos un edredón para las mascotas. No importa qué cocina Aga tenga, producirá alimentos de gran sabor cocinados con el calor radiante del hierro fundido. Con todas las cocinas Aga, a menudo hay varias formas de producir los mismos resultados, como lo confirmará cualquier reunión de propietarios de Aga.'}</p>


<h2 class='text-l font-bold mb-6'>{lang==='english' ? '4 OVEN AGA COOKERS ' : '4 COCINAS HORNO AGA'}</h2>


<div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
            <img src={Aga1} alt="aga plates" class="w-full h-32 sm:h-48 object-cover"/>
            <div>
                <span>{lang==='english' ? `We have a 4 oven Aga cooker. It has one heat source and is a constant means of warming the kitchen and can be always available for use. These Aga cookers use the established techniques where most of the cooking is undertaken in the ovens, the hotplates being used to start food cooking.` : 'Disponemos de una cocina Aga de 4 hornos. Tiene una fuente de calor y es un medio constante para calentar la cocina y puede estar siempre disponible para su uso. Estas cocinas Aga utilizan las técnicas establecidas donde la mayor parte de la cocción se realiza en los hornos, sirviendo las placas de cocción para iniciar la cocción de los alimentos.'}</span>
            </div>
        </div>


        <h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `THE HOTPLATES ` : `LAS PLACAS`}</h2>

<p class='mb-8'>{lang==='english' ? `There are two cooking hotplates on all Aga cookers – one at a high heat, called the Boiling Plate, the other at a gentler heat, the Simmering Plate. As the whole of the traditional Aga cooker is heated by a single heat source, the 80:20 rule applies – cook 20 per cent of the time on the hotplates and carry out most of the cooking in the ovens, such as steaming root vegetables or starting off a casserole or curry on the top then placing it in the Simmering Oven to cook. That way you ensure the most efficient use of the stored heat.` : `Hay dos placas de cocción en todas las cocinas Aga: una a temperatura alta, llamada placa de ebullición, la otra a temperatura más suave, la placa de cocción a fuego lento. Como toda la cocina Aga tradicional se calienta con una sola fuente de calor, se aplica la regla 80:20: cocine el 20 por ciento del tiempo en las placas calientes y lleve a cabo la mayor parte de la cocción en los hornos, como cocer al vapor tubérculos o comenzando una cazuela o curry en la parte superior y luego colocándolo en el horno a fuego lento para cocinar. De esa manera, se asegura el uso más eficiente del calor almacenado.`}</p>
{/* boiling plate */}
<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `BOILING PLATE` : `PLACA DE HERVIR`}</h2>

<p class='mb-8'>{lang==='english' ? `The hottest hotplate, the Boiling Plate is used for boiling, stir frying, making toast, using the griddle pan – indeed anything that requires a high heat. It is of a large diameter and can fit three average-sized saucepans together. Green vegetables keep their colour when boiled quickly here. When stir frying or cooking anything that might splash, we would recommend using an Aga Splash Shield which will protect the insulated cover liner from splatter, making cleaning a doddle! Please bear in mind that the Boiling Plate is too hot to cook food directly on it.` : `La placa de cocción más caliente, la placa de ebullición, se usa para hervir, saltear, hacer tostadas, usar la plancha, de hecho, cualquier cosa que requiera un calor alto. Es de gran diámetro y puede encajar tres cacerolas de tamaño medio juntas. Las verduras verdes mantienen su color cuando se hierven rápidamente aquí. Al saltear o cocinar cualquier cosa que pueda salpicar, recomendamos usar un protector contra salpicaduras Aga que protegerá el revestimiento de la cubierta aislada de las salpicaduras, ¡haciendo que la limpieza sea pan comido! Tenga en cuenta que la placa de ebullición está demasiado caliente para cocinar alimentos directamente sobre ella.`}</p>

{/* simmering plate */}

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `SIMMERING PLATE` : `PLACA DE COCCIÓN A FUEGO LENTO`}</h2>

<p class='mb-8'>{lang==='english' ? `The Simmering Plate is the cooler of the two hotplates and is used for recipes that require a lower heat, such as making sauces, scrambling eggs, heating milk, slow frying, simmering soups and root vegetables. In addition it can be used directly as a form of griddle – invaluable for toasted sandwiches, quesadillas, drop scones, searing scallops or even a fried egg (you will need to cover the plate with Bake-O-Glide, or other non-stick silicone paper)! Slow cooked toast can be made directly on the Simmering Plate – no need to use the Aga toaster. The same size as the Boiling Plate, the Simmering Plate is also machined flat to give the best all-over contact with the Aga saucepans, grill pan, frying pan and kettle.` : `La placa de cocción a fuego lento es la más fría de las dos placas de cocción y se usa para recetas que requieren un calor más bajo, como hacer salsas, huevos revueltos, calentar leche, freír a fuego lento, sopas a fuego lento y tubérculos. Además, se puede usar directamente como una forma de plancha, invaluable para sándwiches tostados, quesadillas, bollos, vieiras doradas o incluso un huevo frito (deberá cubrir el plato con Bake-O-Glide u otro antiadherente). papel de silicona)! Las tostadas cocinadas a fuego lento se pueden hacer directamente en la placa de cocción a fuego lento, sin necesidad de usar la tostadora Aga. Del mismo tamaño que la placa de ebullición, la placa de cocción a fuego lento también está maquinada plana para brindar el mejor contacto total con las cacerolas, la parrilla, la sartén y la tetera Aga.`}</p>

{/* warming plate */}

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `WARMING PLATE` : `PLATO CALENTADOR`}</h2>

<p class='mb-8'>{lang==='english' ? `This is available on 4 and 5 oven Aga cookers. This oblong plate is a useful spot for placing hot dishes straight from the oven, resting cooked meat and poultry, serving from or warming the tea pot or sauce boats and jugs. It’s great, too, for keeping coffee warm, airing clothes, ‘ironing’ tea towels or drying off items such as peelers or food processor blades.` : `Está disponible en las cocinas Aga de 4 y 5 hornos. Este plato oblongo es un lugar útil para colocar platos calientes recién salidos del horno, reposar carnes y aves cocidas, servir o calentar la tetera o las salseras y jarras. También es excelente para mantener el café caliente, airear la ropa, 'planchar' paños de cocina o secar artículos como peladores o cuchillas de procesadores de alimentos.`}</p>

{/* top plate */}

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `THE TOP PLATE` : `LA PLACA SUPERIOR`}</h2>

<p class='mb-8'>{lang==='english' ? `The top plate is the enamelled surface surrounding the hotplates. Although it is not a cooking surface you can use its warmth for a number of useful activities, which more often than not save time and washing-up! These include warming jars of honey or syrup, melting butter or chocolate in a basin – do please put the basin on a cork mat or folded piece of kitchen towel to avoid scratching the enamel. Although it is a durable and hard-wearing surface, vitreous enamel is glass and will show scratch marks. The top plate can also be used to rest a cup of coffee or tea or dry off awkwardly shaped tins, peelers or food mixer and processor parts – again use protection if you want to keep your Aga pristine!` : `La placa superior es la superficie esmaltada que rodea las placas de cocción. Aunque no es una superficie para cocinar, puede usar su calor para una serie de actividades útiles, que en la mayoría de los casos ahorran tiempo y lavado. Estos incluyen calentar tarros de miel o jarabe, derretir mantequilla o chocolate en un recipiente; coloque el recipiente sobre una estera de corcho o un paño de cocina doblado para evitar rayar el esmalte. Aunque es una superficie duradera y resistente, el esmalte vítreo es vidrio y mostrará marcas de arañazos. La placa superior también se puede usar para reposar una taza de café o té o secar latas, peladores o partes de batidoras y procesadores de formas extrañas. ¡Use nuevamente protección si desea mantener su Aga impecable!`}</p>

</div>

</main>

</div>

</>

)

}

export default Appliances;