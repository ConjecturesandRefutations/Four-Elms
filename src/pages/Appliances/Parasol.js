import { useContext, useEffect } from 'react'

import Navbar from "../../components/Navbar";

function Parasol(){

     const lang='english'

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<><div class="grid md:grid-cols-4" >

<div class='navbar' id='navParasol'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Parasol'>

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> {lang==='english' ? `Side parasol` : `Sombrilla`}</h1>

<p class='mb-8'>{lang==='english' ? `If you would like to sit outside the garden room to the side of the house, you may like to use the parasol. To raise the parasol, use the handle to turn the right-hand crank clockwise. This will move the parasol toward the middle of the table – make sure there is nothing on the table when you do this, otherwise the parasol may knock it off. Next, turn the left-hand crank clockwise to raise the parasol.` : `Si desea sentarse fuera de la sala del jardín al lado de la casa, puede usar la sombrilla. Para levantar la sombrilla, use el mango para girar la manivela derecha en el sentido de las agujas del reloj. Esto moverá la sombrilla hacia el centro de la mesa; asegúrese de que no haya nada sobre la mesa cuando haga esto, de lo contrario, la sombrilla podría derribarla. A continuación, gire la manivela izquierda en el sentido de las agujas del reloj para levantar la sombrilla.`}</p>

<p class='mb-8'>{lang==='english' ? `IT IS IMPORTANT TO LOWER THE PARASOL WHEN YOU HAVE FINISHED WITH IT, ESPECIALLY IF THE WIND PICKS UP.` : `ES IMPORTANTE BAJAR LA SOMBRILLA CUANDO HAYA TERMINADO DE ELLA, SOBRE TODO SI SE LEVANTA EL VIENTO.`}</p>


</div>

</main>

</div>
</>

)

}

export default Parasol;