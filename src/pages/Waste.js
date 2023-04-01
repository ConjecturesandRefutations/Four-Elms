import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Waste(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

<Navbar/>

<main class="md:col-span-3" id='waste' >

<div class='md:pt-10 w-3/5 mx-auto' >


</div>

</main>

</div>

</>

)

}

export default Waste;