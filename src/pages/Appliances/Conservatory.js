import { useContext, useEffect } from 'react'

import Navbar from "../../components/Navbar";

function Conservatory(){

     const lang='english'

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4" >

<div class='navbar' id='navConservatory'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Conservatory'>

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `Conservatory windows & doors` : 'Ventanas y puertas la habitación acristalada'} </h1>

<p class='mb-8'> {lang==='english' ? `The conservatory is south facing and can get very hot in the summer. This can be exacerbated by the heat from the Aga. In these conditions it is important to open as many doors and windows as possible. In particular, make sure there are cross-drafts:` : 'La habitación acristalada está orientada al sur y puede hacer mucho calor en verano. Esto puede verse exacerbado por el calor del AGA. En estas condiciones es importante abrir tantas puertas y ventanas como sea posible. En particular, asegúrese de que haya corrientes que cruzan la habitación:'}</p>

<ul class='ml-4'>
     <li>{lang==='english' ? `•	Open the windows at either end of the conservatory` : `•	Abre las ventanas en ambos extremos del conservatorio.`}</li>
     <li>{lang==='english' ? `•	Open the conservatory doors and the kitchen window facing the front garden` : `•	Abra las puertas de la habitación acristalada y la ventana de la cocina que da al jardín delantero.`}</li>
     <li>{lang==='english' ? `•	There are two roof lights in the conservatory that can be opened. Because hot air rises, this is an effective way of reducing the temperature, however, please close them if it rains as they can leak. There is a pole in the conservatory that can be used to open these.` : `•	Hay dos claraboyas en de la habitación acristalada que se pueden abrir. Debido a que el aire caliente sube, esta es una forma efectiva de reducir la temperatura, sin embargo, ciérrelos si llueve, ya que pueden tener fugas. Hay un poste en el conservatorio que se puede usar para abrirlos.`}</li>
</ul>

<p class='mt-8'> {lang==='english' ? `You can use the sliding doors between the kitchen and the conservatory to separate them into two rooms. We normally only do this when it is very cold to keep the heat in the kitchen.` : `Puede utilizar las puertas correderas entre la cocina y la habitación acristalada para separarlos en dos habitaciones. Normalmente solo hacemos esto cuando hace mucho frío para mantener el calor en la cocina.`}</p>


</div>

</main>

</div>

</>

)

}

export default Conservatory;