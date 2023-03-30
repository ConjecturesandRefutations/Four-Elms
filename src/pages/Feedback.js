import { useContext } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Feedback(){

     const { lang } = useContext(LangContext);

return(

<>

<div class="grid md:grid-cols-4">

<Navbar/>

<main class="md:col-span-3">

<div class='md:pt-10' id="container">

<form action="https://formsubmit.co/ccollins@i-realise.co.uk" method="POST" > 
     <input type="text" name="name" placeholder={lang==='english' ? "your name" : 'te llamas'} required/>
     <input type="email" name="email" placeholder={lang==='english' ? "your email" : 'su correo electrónico'} required/>
     <input type="text" name="comments" placeholder={lang==='english' ? "your feedback" : 'sus comentarios'} required/>
     <button className="button" type="submit">{lang==='english' ? 'Send' : 'Enviar'}</button>
</form>

</div>

</main>

</div>

</>

)

}

export default Feedback;