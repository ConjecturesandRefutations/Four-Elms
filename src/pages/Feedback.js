function Feedback(){

return(

<>

<h1 className="feedback">Give Your Feedback</h1>

<div className="container">
<form action="https://formsubmit.co/ccollins@i-realise.co.uk" method="POST"> 
     <input type="text" name="name" placeholder="your name" required/>
     <input type="email" name="email" placeholder="your email" required/>
     <input type="text" name="comments" placeholder="your feedback" required/>
     <button className="button" type="submit">Send</button>
</form>
</div>



</>

)

}

export default Feedback;