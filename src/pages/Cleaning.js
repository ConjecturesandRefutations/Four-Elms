import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Cleaning(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navCleaning'>

<Navbar/>

</div>

<main class="background md:col-span-3" id='Cleaning' >

<div class='md:pt-10 w-3/5 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-4'> Mattis habitasse laoreet sociosqu, non vestibulum conubia </h1>

<p class='mb-8'>Diam suspendisse class egestas, sapien fringilla consequat, libero lorem eu convallis pretium scelerisque ipsum. Aenean lacinia imperdiet dictumst, nunc feugiat rutrum, sodales non risus vel orci integer. Posuere lacinia sed, per torquent, class eros suspendisse imperdiet ultrices aliquam.</p>


</div>

</main>

</div>

</>

)

}

export default Cleaning;