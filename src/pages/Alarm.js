import { useContext } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Alarm(){

     const { lang } = useContext(LangContext);

return(

<>

<div class="grid md:grid-cols-4">

<Navbar/>

<main class="md:col-span-3" id='alarm' >

<div class='md:pt-10 w-3/5 mx-auto' >


</div>

</main>

</div>

</>

)

}

export default Alarm;