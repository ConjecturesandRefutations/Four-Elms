import { useContext, useEffect } from 'react'

import Navbar from "../components/Navbar";

function CheckInOut(){

     const lang='english'
     
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

<div class='navbar' id='nav-check'>

<Navbar />

</div>

<main class="background md:col-span-3" id='checkinout'>

<div class='md:pt-10 w-3/4 mx-auto' id='check'  >

<h1 class='text-2xl font-bold mb-8'> {lang==='english' ? 'Check-in and check-out procedures' : 'Procedimientos de check-in y check-out'} </h1>

<h2 class='text-xl font-bold mb-8'>{lang==='english' ? 'Check-in' : 'Check-in'}</h2>

<p>{lang==='english' ? 'We will be in the house when you arrive and supply you with keys.' : 'Estaremos en la casa cuando llegue y le proporcionaremos las llaves.'}</p>
<br/>
<h2 class='text-xl font-bold mb-8'>{lang==='english' ? 'Check-out' : 'Check-out'}</h2>
<p>{lang==='english' ? 'We will be in the house at the agreed check-out time to pick up the keys and say good bye.' : 'Llegaremos a la hora acordada de check-out para recoger las llaves y despedirnos.'}</p>
<br/>
<p>{lang==='english' ? 'Please leave feedback and ideas for improvement in our feedback page.' : 'Por favor, deje comentarios e ideas para mejorar en nuestra página de comentarios.'}</p>


</div>

</main>

</div>

</>

)

}

export default CheckInOut;