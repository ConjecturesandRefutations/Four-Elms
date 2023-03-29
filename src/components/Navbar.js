import { useState, useContext } from 'react'

import { LangContext } from '../context/language.context';


function Navbar(){

    const { lang } = useContext(LangContext);
      
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
      }

return(

<>
<div class="md:col-span-1 md:flex md:justify-end my-10">
<nav class="text-right">
    <div class="flex justify-between items-center">
        <div class="px-4 cursor-pointer md:hidden ml-auto mr-5 wl-full" id="burger" onClick={handleMenuClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
        </div>
    </div>
    <ul class={`text-sm mt-6 ${menuOpen ? "" : "hidden"} inline-block md:block`} id="menu">
        <li class="text-gray-700 py-1">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span> {lang==='english' ? 'About Four Elms' : 'Acerca de Four Elms'}</span>
            </a>
        </li>
        <li class="text-gray-700 py-1">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span> {lang==='english' ? 'Check-in and Check-out Procedures' : 'Procedimientos de registro y salida'}</span>
            </a>
        </li>
        <li class="py-1">
            <a href="#" class="px-4 flex justify-end">
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span> {lang==='english' ? 'Contact and emergency information' : 'Información de contacto y emergencia'}</span>            
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'Alarm system and locking up' : 'Sistema de alarma y bloqueo'}</span>          
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'Instructions for appliances and electronics' : 'Instrucciones para electrodomésticos y electrónica'}</span>              
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'Towels, linen & kitchen supplies' : 'Toallas, ropa de cama y utensilios de cocina'}</span>               
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'Waste disposal and recycling' : 'Eliminación y reciclaje de residuos'}</span>                      
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'Information on the local area' : 'Información sobre el área local'}</span>               
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'House rules & contract' : 'Reglas de la casa y contrato'}</span>              
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'House cleaning' : 'Limpieza de la casa'}</span>             
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>{lang==='english' ? 'Feedback' : 'Retroalimentación'}</span>               
            </a>
        </li>
    </ul>

</nav>
</div>
</>

)

}

export default Navbar;