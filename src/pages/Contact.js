import { useContext, useEffect } from 'react'

import Navbar from "../components/Navbar";

function Contact(){

     const lang='english'
     
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

<div class='navbar' id='nav-contact'>

<Navbar />

</div>

<main class="background md:col-span-3 pb-3" id='contactOne'>

<div class='md:pt-10 w-3/5 mx-auto' id='contactTwo'  >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? 'Contact and emergency information' : 'Información de contacto y de emergencia'} </h1>

<h2 class='text-xl font-bold mb-8'>{lang==='english' ? 'Contacts' : 'Contactos'}</h2>

<p>Chris Collins +44 7831 826668</p>
<br/>
<p>Judy Collins +44 7790 909817</p>
<br/>
<h2 class='text-xl font-bold mb-8'>{lang==='english' ? 'Emergency' : 'Emergencia'}</h2>
<p>{lang==='english' ? 'Police, Fire, Ambulance (emergency only) 999' : 'Policía, Bomberos, Ambulancia (solo emergencias) 999'}</p>
<br/>
<p>{lang==='english' ? 'NHS helpline for less urgent medical problems 111' : 'Línea de ayuda del NHS para problemas médicos menos urgentes 111'}</p>
<br/>
<p>{lang==='english' ? 'Alarm company +44333 666 2121 option 3' : 'Empresa de alarmas +44333 666 2121 opción 3'}</p>
<br/>
<p>{lang==='english' ? 'Fire extinguisher & fire blanket in utility room' : 'Extintor de incendios y manta ignífuga en el cuarto de servicio'}</p>
<br/><p>{lang==='english' ? 'First aid kit and analgesics in downstairs toilet cabinet' : 'Botiquín de primeros auxilios y analgésicos en el gabinete en el WC de la planta baja'}</p>


</div>

</main>

</div>

</>

)

}

export default Contact;