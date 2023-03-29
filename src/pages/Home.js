import { React, useContext } from "react";
import Navbar from '../components/Navbar';

import { LangContext } from '../context/language.context';

import pic1 from '../images/Four Elms 1.png'
import pic2 from '../images/Four Elms 2.png'
import pic3 from '../images/Four Elms 3.png'
import pic4 from '../images/Four Elms 4.png'
import pic5 from '../images/Four Elms 5.png'



function Home(){

    const { lang } = useContext(LangContext);

    return(
<>
<div class="text-gray-600" id="home">
    
    <div class="grid md:grid-cols-4">
<Navbar/>
    <main class="home-main px-16 py-6 md:col-span-3">
    
        <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Four Elms</h2>
        <h3 class="text-gray-700 text-2xl font-semibold mt-2 hidden lg:block">{lang==='english' ? 'Home Guide' : 'Guía de inicio'}</h3>
    </header>
    <div>
        <h4 class="font-bold mt-4 pb-2 border-b">{lang==='english' ? 'Look Inside' : 'Mira Dentro'}</h4>
        <div class="mt-8 grid lg:grid-cols-3 gap-10">
        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
            <img src={pic1} alt="Front View" class="w-full h-32 sm:h-48 object-cover"/>
            <div class="m-4">
                <span class="font-bold">{lang==='english' ? 'Located in rural Surrey' : 'Situado en la zona rural de Surrey'}</span>
            </div>
        </div>
        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
            <p class='text-sm ml-1 mr-1 font-bold'>{lang==='english' ? 'Four Elms is a large family house in a quiet upscale road near the centre of Godalming. It is a tastefully decorated, tile hung Edwardian house built in the Arts and Crafts style. The interior is light with many double aspect rooms. The newly renovated traditional kitchen leads to a large open-plan breakfast room and even larger conservatory. The beautiful garden won the Godalming in Bloom best garden award.' : 'Four Elms es una gran casa familiar en una tranquila calle de lujo cerca del centro de Godalming. Es una casa eduardiana decorada con buen gusto, colgada de azulejos, construida en el estilo Arts and Crafts.  El interior es luminoso con muchas habitaciones de doble aspecto.  La cocina tradicional recientemente renovada conduce a una gran sala de desayunos de planta abierta y un invernadero aún más grande.El hermoso jardín ganó el premio al mejor jardín Godalming in Bloom.'}</p>
        </div>
            <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
                <img src={pic2} alt="Bedrooms" class="w-full h-32 sm:h-48 object-cover"/>
                <div class="m-4">
                    <span class="font-bold">{lang==='english' ? 'Traditional Kitchen' : 'Cocina Tradicional'}</span>
                </div>
                </div>
                <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
                    <img src={pic4} alt="Garden" class="w-full h-32 sm:h-48 object-cover"/>
                    <div class="m-4">
                        <span class="font-bold">{lang==='english' ? 'Award-winning Garden' : 'Jardín premiado'}</span>
                    </div>
                </div>
                <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
                    <img src={pic3} alt="Garden" class="w-full h-32 sm:h-48 object-cover"/>
                    <div class="m-4">
                        <span class="font-bold">{lang==='english' ? 'Beautiful Conservatory' : 'Hermoso Conservatorio'}</span>
                    </div>
                </div>
                <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
                    <img src={pic5} alt="Garden" class="w-full h-32 sm:h-48 object-cover"/>
                    <div class="m-4">
                        <span class="font-bold">{lang==='english' ? 'Tastefully Decorated' : 'Decorado con buen gusto'}</span>
                    </div>
                </div>
        </div>
    </div>
    </main>
    </div>
    </div>
    </>
    )
}

export default Home;