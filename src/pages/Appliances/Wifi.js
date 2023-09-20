import { useContext, useEffect } from 'react'

import Navbar from "../../components/Navbar";

function Wifi(){

     const lang='english'
     
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>
<div class="grid md:grid-cols-4" >

     <div class='navbar' id='navWifi'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Wifi'>

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> Wifi </h1>

<p class='mb-8'>{lang==='english' ? `Name: BT-WSAGMP` : `Nombre: BT-WSAGMP`}</p>

<p class='mb-8'>{lang==='english' ? `Password: pCfyG4XvC6hUve` : `Contraseña: pCfyG4XvC6hUve`}</p>

<p class='mb-8'>{lang==='english' ? `If you need to restart the router for any reason, you will find it in the hall, under the table` : `Si necesita reiniciar el enrutador por cualquier motivo, lo encontrará en el pasillo, debajo de la mesa.`}</p>


</div>

</main>

</div>
</>

)

}

export default Wifi;