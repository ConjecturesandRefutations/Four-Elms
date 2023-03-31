import { useContext } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

import Aga1 from '../images/Aga/Aga1.png'
import Aga2 from '../images/Aga/Aga2.png'
import Aga3 from '../images/Aga/Aga3true.png'
import Aga4 from '../images/Aga/Aga4real.png'
import quookerOne from '../images/Quooker/Quooker1.png'
import quookerTwo from '../images/Quooker/Quooker2.jpg'

import One from '../images/AgaInstructions/1.png'
import Two from '../images/AgaInstructions/2.png'
import Three from '../images/AgaInstructions/3.png'
import Four from '../images/AgaInstructions/4.png'
import Five from '../images/AgaInstructions/5.png'
import Six from '../images/AgaInstructions/6.png'

function Appliances(){

     const { lang } = useContext(LangContext);

return(

<>

<div class="grid md:grid-cols-4">

<div id='nav-appliance'>

<Navbar />

</div>


<main class="md:col-span-3" id='appliances' >

<div class='md:pt-10 w-3/4 mx-auto'  >

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

<h2 class='text-l font-bold underline mb-6'>{lang==='english' ? 'OVEN FUNCTIONS' : 'FUNCIONES DEL HORNO'}</h2>

<img src={Aga2} alt='oven instruction'/>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `ROASTING OVEN` : `HORNO DE TOSTACIÓN`}</h2>

<p class='mb-8'>{lang==='english' ? `The Roasting Oven is very hot, wonderful for cooking meat and poultry, roast potatoes and other vegetables, crispy jacket potatoes, grilled foods, pastry and bread. The Roasting Oven is zoned in heat, meaning it is slightly hotter towards the top than the centre and the oven grid shelf set on the oven floor is less hot than the centre. The top of the oven, second runners down, is great for grilled breakfasts and browning dishes such as gratins. The middle of the oven is best for roast meats and scones; tarts, quiches and bread are better near the floor of the oven. The Roasting Oven is excellent for bread and pastries. Quiches in ceramic or pies in Pyrex dishes don’t need to be baked blind as when they are placed on the floor of the oven the pastry cooks from underneath and the filling will set and brown from the all-round heat. Metal flan tins conduct heat quicker than ceramic so put them on the oven grid shelf placed on the floor of the oven to avoid over-browning on the base of the food. The floor of the oven can be used as another cooking surface; indeed, it is often called a hidden hotplate. It is ideal for browning roast potatoes, sautéing cubes of meat for a casserole or completing the cooking of grilled chicken fillets in a cast iron grill pan. As it is indirectly heated, the floor of the Roasting Oven is also great for cooking pizzas. The beauty of the Roasting Oven is that any fat splashes are burnt off when the oven is at full heat. Just brush it out occasionally to get rid of carbon deposits. The specially designed roasting tins and bakeware slide directly on to the runners, so almost every available square centimetre of space can be used. Food can be protected by the use of the cold plain shelf or shielded by using the large roasting tin, which means that you can cook food that requires different temperatures at the same time. If food is browning too quickly just slide the cold plain shelf over the food to reduce the top heat. This oven can also be used for moderate baking by using the cold plain shelf as a shield above the food, such as when baking a traybake. ` : `El horno para asar es muy caliente, maravilloso para cocinar carnes y aves, papas asadas y otras verduras, papas asadas crujientes, comidas a la parrilla, pasteles y pan. El horno de asar está zonificado en calor, lo que significa que está ligeramente más caliente en la parte superior que en el centro y el estante de rejilla del horno colocado en el piso del horno está menos caliente que en el centro. La parte superior del horno, con los segundos corredores hacia abajo, es ideal para desayunos a la parrilla y platos para dorar, como gratinados. El medio del horno es mejor para asar carnes y bollos; las tartas, las quiches y el pan quedan mejor cerca del suelo del horno. El Horno Asador es excelente para pan y pasteles. Las quiches en cerámica o las tartas en platos de Pyrex no necesitan hornearse a ciegas, ya que cuando se colocan en el piso del horno, la masa se cocina desde abajo y el relleno se endurecerá y dorará con el calor general. Las latas de flan de metal conducen el calor más rápido que las de cerámica, así que colóquelas en la rejilla del horno colocada en el piso del horno para evitar que la base de los alimentos se dore demasiado. El suelo del horno se puede utilizar como otra superficie de cocción; de hecho, a menudo se le llama placa calefactora oculta. Es ideal para dorar patatas asadas, saltear dados de carne para una cazuela o completar la cocción de filetes de pollo a la plancha en una sartén grill de hierro fundido. Como se calienta indirectamente, el piso del horno de asar también es ideal para cocinar pizzas. La belleza del horno para asar es que cualquier salpicadura de grasa se quema cuando el horno está a temperatura máxima. Cepíllalo de vez en cuando para deshacerte de los depósitos de carbono. Los moldes para asar y los utensilios para hornear especialmente diseñados se deslizan directamente sobre las guías, por lo que se puede utilizar casi cada centímetro cuadrado disponible. Los alimentos se pueden proteger con el uso del estante simple para frío o con la bandeja para asar grande, lo que significa que puede cocinar alimentos que requieren diferentes temperaturas al mismo tiempo. Si la comida se está dorando demasiado rápido, simplemente deslice el estante plano frío sobre la comida para reducir el calor superior. Este horno también se puede usar para horneado moderado utilizando el estante plano frío como un escudo sobre la comida, como cuando se hornea una bandeja.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `BAKING OVEN` : `HORNO DE COCCIÓN`}</h2>

<p class='mb-8'>{lang==='english' ? `The Baking Oven is pre-set at a moderate heat, ideal for cakes, biscuits and other foods not requiring a high temperature. As with the Roasting Oven there are heat zones within the oven, the top is slightly hotter than the bottom and this will affect the positioning of the foods. In general small cakes and lasagne are cooked towards the top; baked fish, crumbles and meringue roulades around the centre and Victoria sandwiches, loaf cakes and biscuits on the oven grid shelf placed on the floor of the oven. Many items cooked in the Roasting Oven can be cooked in the Baking Oven but for a longer time, such as meat and poultry. A turkey can be cooked here either for the whole time or after starting it off for an hour in the Roasting Oven. To prevent the over-browning of larger cakes, slide the plain shelf on to the second set of runners when the perfect colour has been achieved.` : `El horno para hornear está preconfigurado a temperatura moderada, ideal para pasteles, galletas y otros alimentos que no requieren una temperatura alta. Al igual que con el horno para asar, hay zonas de calor dentro del horno, la parte superior está ligeramente más caliente que la parte inferior y esto afectará la posición de los alimentos. En general , las tortas pequeñas y lasañas se cocinan hacia arriba; pescado al horno, migajas y rollos de merengue alrededor del centro y sándwiches Victoria, pasteles y galletas en el estante de rejilla del horno colocado en el piso del horno. Muchos artículos que se cocinan en el horno para asar se pueden cocinar en el horno para hornear, pero durante más tiempo, como la carne y las aves. Aquí se puede cocinar un pavo durante todo el tiempo o después de una hora en el horno de asar. Para evitar que los pasteles más grandes se doren demasiado, deslice el estante liso sobre el segundo juego de guías cuando haya logrado el color perfecto.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `SIMMERING OVEN` : `HORNO FUEGO LENTO`}</h2>

<p class='mb-8'>{lang==='english' ? `The Simmering Oven is pre-set at a gentle heat, ideal for long, slow cooking. It is best described as a continuation oven, as it continues to cook food that has been brought up to heat elsewhere on the cooker – with the exception of meringues which are dried out rather than ‘cooked’. Root vegetables can be steamed to perfection here; simply bring to the boil for a few minutes, drain off all the water, cover the saucepan with a lid then steam in the oven until tender – the time will depend on the size of the vegetable. Wonderful stocks for a soup or risotto can also be produced in this oven, as can slow-roasted meats and perfect steamed Basmati rice every time. The same size as the other Aga ovens the Simmering Oven can take up to seven Aga saucepans, stacked to make best use of the space and this certainly extends the cooking capacity, so useful when cooking for crowds.` : `El horno a fuego lento está preajustado a un calor suave, ideal para una cocción lenta y prolongada. Se describe mejor como un horno de continuación, ya que continúa cocinando alimentos que se han calentado en otro lugar de la cocina, con la excepción de los merengues que se secan en lugar de 'cocinarse'. Los tubérculos se pueden cocinar al vapor a la perfección aquí; simplemente hierva durante unos minutos, drene toda el agua, cubra la cacerola con una tapa y cocine al vapor hasta que estén tiernas; el tiempo dependerá del tamaño de la verdura. En este horno también se pueden producir caldos maravillosos para una sopa o un risotto, al igual que carnes asadas lentamente y arroz Basmati al vapor perfecto en todo momento. Del mismo tamaño que los otros hornos Aga, el horno a fuego lento puede albergar hasta siete cacerolas Aga, apiladas para aprovechar al máximo el espacio y esto sin duda amplía la capacidad de cocción, tan útil cuando se cocina para multitudes.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `WARMING OVEN` : `HORNO DE CALENTAMIENTO `}</h2>

<p class='mb-8'>{lang==='english' ? `Perfect for warming plates and serving dishes, this oven has many more uses: keeping covered meals warm for the late-comer, resting meat before carving, holding sauces (the sauce can be placed in a jug then covered with clingfilm – the oven heat is gentle so don’t worry). It can keep cooked food hot for up to two hours before serving. The Warming Oven is great for drying out individual meringues, which keep their whiteness, about 2½ hours for a tray of meringues. The gentle heat here acts rather like a dehydrator and can be used for drying banana chips, apple rings, tomatoes, mushrooms or even grapes to make your own raisins.` : `Perfecto para calentar platos y platos para servir, este horno tiene muchos más usos: mantener calientes las comidas tapadas para los que llegan tarde, reposar la carne antes de trincharla, contener salsas (la salsa se puede colocar en una jarra y luego cubrir con film transparente; el calor del horno es suave, así que no te preocupes). Puede mantener calientes los alimentos cocinados hasta dos horas antes de servirlos. El Horno de Calentamiento es excelente para secar merengues individuales, que mantienen su blancura, alrededor de 2½ horas para una bandeja de merengues. El suave calor aquí actúa como un deshidratador y puede usarse para secar chips de plátano, aros de manzana, tomates, champiñones o incluso uvas para hacer sus propias pasas.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `AGA EQUIPMENT SUPPLIED WITH YOUR COOKER` : `EQUIPO AGA SUMINISTRADO CON SU COCINA`}</h2>

<img src={Aga3} alt='aga equiptment' />
<br/>
<img src={Aga4} alt='more aga equiptment' />

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `FULL SIZE ROASTING TIN WITH GRILL RACK` : `LATA PARA ASAR DE TAMAÑO COMPLETO CON REJILLA PARA PARRILLA`}</h2>

<p class='mb-8'>{lang==='english' ? `This is designed to slide on to the oven runners without needing to sit on an oven grid shelf. The roasting tin can be used with the grill rack, in its high position, for grilling at the top of the Roasting Oven. It can be used for roasting meat or poultry with or without the grill rack. Large quantities of roast potatoes can be cooked in this tin and it can also be used to make large traybakes or cakes. The grill rack is effective on its own as a cake cooking rack. The roasting tin can be used in any oven but is not recommended for hotplate use.` : `Está diseñado para deslizarse sobre las guías del horno sin necesidad de sentarse en un estante de rejilla del horno. El molde para asar se puede utilizar con la parrilla, en su posición alta, para asar a la parrilla en la parte superior del horno para asar. Se puede usar para asar carnes o aves con o sin parrilla. En esta lata se pueden cocinar grandes cantidades de patatas asadas y también se puede utilizar para hacer bandejas horneadas o tartas grandes. La parrilla es eficaz por sí sola como parrilla para cocinar pasteles. El molde para asar se puede usar en cualquier horno, pero no se recomienda para uso en placas calientes.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `HALF SIZE ROASTING TIN AND GRILL RACK ` : `MEDIA LATA PARA ASAR Y REJILLA PARA PARRILLA`}</h2>

<p class='mb-8'>{lang==='english' ? `Designed for sliding on to the oven runners widthways or to be sat on an oven grid shelf. The half size roasting tin can be used with the grill rack, in its high position, for grilling at the top of the Roasting Oven. It can be used for roasting smaller joints of meat or poultry with or without the grill rack. Roast potatoes can be cooked in this tin. The roasting tin can also be employed for making traybakes or cakes. The grill rack is useful on its own as a cake cooking rack. As above, it can be used in any oven but is not recommended for hotplate use.` : `Diseñado para deslizarse sobre las guías del horno a lo ancho o para colocarse sobre una rejilla del horno. El molde para asar de tamaño medio se puede usar con la parrilla, en su posición alta, para asar a la parrilla en la parte superior del horno para asar. Se puede usar para asar piezas más pequeñas de carne o aves con o sin parrilla. En esta lata se pueden cocinar patatas asadas. El molde para asar también se puede utilizar para hacer bandejas para hornear o pasteles. La parrilla es útil por sí sola como parrilla para cocinar pasteles. Como se indicó anteriormente, se puede usar en cualquier horno, pero no se recomienda su uso en placas de cocción.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `OVEN SHELVES ` : `PARRILLAS DEL HORNO`}</h2>

<p class='mb-8'>{lang==='english' ? `These are for inserting in each oven to provide a surface for food, dishes and tins which do not fit direct onto the oven runners. The grid shelves are typically to hold dishes, saucepans and tins, although they can hold solid food such as toast or baked potatoes. The solid shelves are normally used for cooking food, such as pizzas. It is best to cover them in non-stick silicone paper to stop sticking. They can be used in any oven, as required.` : `Estos son para insertar en cada horno para proporcionar una superficie para alimentos, platos y latas que no encajan directamente en las guías del horno. Los estantes de rejilla suelen ser para platos, cacerolas y latas, aunque pueden contener alimentos sólidos como tostadas o papas al horno. Los estantes sólidos se utilizan normalmente para cocinar alimentos, como pizzas. Lo mejor es forrarlas con papel siliconado antiadherente para que dejen de pegarse. Se pueden utilizar en cualquier horno, según se requiera.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `THE PLAIN SHELF` : `EL ESTANTE SENCILLO`}</h2>

<p class='mb-8'>{lang==='english' ? `More often this is known as the Cold Plain Shelf, as it should be kept out of the ovens when not in use. It has two uses: one as a large baking sheet for scones, biscuits, pastry and meringues; the other as a heat deflector to reduce the top heat if food is overbrowning before it is cooked through. ` : `Más a menudo, esto se conoce como el estante simple frío, ya que debe mantenerse fuera de los hornos cuando no esté en uso. Tiene dos usos: uno como bandeja para hornear grande para scones, bizcochos, pasteles y merengues; el otro como deflector de calor para reducir el calor superior si los alimentos se doran demasiado antes de que estén completamente cocidos.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `TOASTER` : `TOSTADORA`}</h2>

<p class='mb-8'>{lang==='english' ? `This is for toasting bread on the Boiling Plate. Aga toast is renowned for its excellence, crisp on the outside and soft in the centre. Take thick slices of bread and place in the Aga toaster – if the bread is very moist or very fresh, heat the toaster beforehand to prevent sticking – lift the Boiling Plate insulated cover and place the toaster direct on to the plate with the handle at an angle from the handle of the cover. Close the cover and wait for the bread to toast on one side – this will take 1–2 minutes depending on the variety of bread – open the cover and turn the toaster over and repeat the process to toast the other side. The toaster can also be used for heating pitta bread and toasting teacakes.` : `Esto es para tostar pan en la placa de ebullición. Las tostadas Aga son famosas por su excelencia, crujientes por fuera y suaves por dentro. Tome rebanadas gruesas de pan y colóquelas en la tostadora Aga – si el pan está muy húmedo o muy fresco, caliente la tostadora de antemano para evitar que se pegue – levante la tapa aislante de la placa de ebullición y coloque la tostadora directamente sobre la placa con el asa a una ángulo desde el mango de la cubierta. Cierra la tapa y espera a que el pan se tueste por un lado; esto llevará de 1 a 2 minutos dependiendo de la variedad de pan. Abre la tapa, voltea la tostadora y repite el proceso para tostar el otro lado. La tostadora también se puede usar para calentar pan de pita y tostar pasteles de té.`}</p>

<h2 class='text-l font-bold mb-6 mt-8'>{lang==='english' ? `WIRE BRUSH` : `CEPILLO DE ALAMBRE`}</h2>

<p class='mb-8'>{lang==='english' ? `This is for cleaning the raw cast iron surfaces, keeping them clear of crumbs and burnt-on debris – which would otherwise affect the boiling performance of pans and the kettle. Use on the hotplates and the ovens. Take care not to touch the enamel surfaces as the wire brush will scratch the finish.` : `Esto es para limpiar las superficies de hierro fundido en bruto, manteniéndolas libres de migas y residuos quemados, que de otro modo afectarían el rendimiento de ebullición de las ollas y la marmita. Utilizar en las placas de cocción y los hornos. Tenga cuidado de no tocar las superficies esmaltadas ya que el cepillo de alambre rayará el acabado.`}</p>

<iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/-Oiwt5N82EU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>

<h3 class='font-bold mb-3'>{lang==='english' ? 'Video Translation' : 'Traducción de vídeo'}</h3>

<img src={One} alt='one'/>
<img src={Two} alt='two'/>
<img src={Three} alt='three'/>
<img src={Four} alt='four'/>
<img src={Five} alt='five'/>
<img src={Six} alt='six'/>

<br/>

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

export default Appliances;