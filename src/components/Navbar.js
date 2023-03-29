import { useState, useContext } from 'react'

import { LangContext } from '../context/language.context';


function Navbar(){

    const { lang } = useContext(LangContext);
      
    const [menuOpen, setMenuOpen] = useState(false);

    const [expandMenu, setExpandedMenu] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
      }

      const expandMenuClick = () => {
        setExpandedMenu(!expandMenu)
      }

      function changeChevron(expandMenu){
        if (expandMenu){
          return '🞃'
        } else {
           return '🞂'
        }
      };
      

return(

<>
<div class="md:col-span-1 md:flex md:justify-end my-10">
<nav class="text-right xl:fixed" id='navbar'>
    <div class="flex justify-between items-center">
        <div class="px-4 cursor-pointer md:hidden ml-auto mr-5 wl-full" id="burger" onClick={handleMenuClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
        </div>
    </div>
    <ul class={`text-sm ${menuOpen ? "" : "hidden"} inline-block md:block mt-4`} id="menu">
        <li class="text-gray-700 my-1">
            <a href="#" class="px-4 flex justify-end">
                <span> {lang==='english' ? 'About Four Elms' : 'Acerca de Four Elms'}</span>
            </a>
        </li>
        <li class="text-gray-700 py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span> {lang==='english' ? 'Check-in and Check-out Procedures' : 'Procedimientos de registro y salida'}</span>
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span> {lang==='english' ? 'Contact and emergency information' : 'Información de contacto y emergencia'}</span>            
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span>{lang==='english' ? 'Alarm system and locking up' : 'Sistema de alarma y bloqueo'}</span>          
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span onClick={expandMenuClick}>{lang==='english' ? `Instructions for appliances and electronics ${changeChevron(expandMenu)}` : `Instrucciones para electrodomésticos y electrónica ${changeChevron(expandMenu)}`}</span>              
            </a>

            {expandMenu ? 
             <ul class='text-xs px-2 mt-1'>
                <li>AGA (cooker)</li>
                <li>Quooker (kitchen tap)</li>
                <li>Microwave</li>
                <li>Dishwasher</li>
                <li>Fridge</li>
                <li>Freezer</li>
                <li>Washing machine</li>
                <li>Washing line</li>
                <li>WIFI</li>
                <li>Kitchen TV</li>
                <li>Heating & hot water</li>
                <li>Side parasol</li>
                <li>Conservatory windows & doors</li>
            </ul>
                   : null }
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span>{lang==='english' ? 'Towels, linen & kitchen supplies' : 'Toallas, ropa de cama y utensilios de cocina'}</span>               
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span>{lang==='english' ? 'Waste disposal and recycling' : 'Eliminación y reciclaje de residuos'}</span>                      
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span>{lang==='english' ? 'Information on the local area' : 'Información sobre el área local'}</span>               
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span>{lang==='english' ? 'House rules & contract' : 'Reglas de la casa y contrato'}</span>              
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
                <span>{lang==='english' ? 'House cleaning' : 'Limpieza de la casa'}</span>             
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end mt-4">
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