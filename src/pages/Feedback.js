import Navbar from "../components/Navbar";

function Feedback(){

return(

<>



<div class="grid md:grid-cols-4">

<Navbar/>

<main class="md:col-span-3">

<div class='md:pt-10' id="container">

<form action="https://formsubmit.co/ccollins@i-realise.co.uk" method="POST" > 
     <input type="text" name="name" placeholder="your name" required/>
     <input type="email" name="email" placeholder="your email" required/>
     <input type="text" name="comments" placeholder="your feedback" required/>
     <button className="button" type="submit">Send</button>
</form>

</div>

</main>

</div>

</>

)

}

export default Feedback;