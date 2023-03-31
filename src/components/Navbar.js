import { useState, useContext } from 'react'
import { Link } from "react-router-dom";

import { LangContext } from '../context/language.context';

import { AppContext } from '../context/app.context';
import { OpenContext } from '../context/open.context';

function Navbar(){

    const { lang } = useContext(LangContext);

    const { expandMenu, setExpandMenu } = useContext(AppContext);

    const { menuOpen, setMenuOpen } = useContext(OpenContext);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
        setExpandMenu(false);
      }

      const specialMenuClick = () => {
        setMenuOpen(!menuOpen);
      }


      const expandMenuClick = () => {
        setExpandMenu(!expandMenu)
        setMenuOpen(true)
      }

      function changeChevron(expandMenu){
        if (expandMenu){
          return '🞃'
        } else {
           return '>'
        }
      };
      

return(

<>
<div class="md:col-span-1 md:flex md:justify-end my-10">
<nav class="text-right xl:fixed" >
    <div class="flex justify-between items-center">
        <div class="px-4 cursor-pointer md:hidden ml-auto mr-5 wl-full" id="burger" onClick={specialMenuClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
        </div>
    </div>
    <ul class={`text-sm ${menuOpen ? "" : "hidden"} inline-block md:block mt-1 md:mt-4`} id="menu">
        <li class="text-gray-700 my-1">
           <Link to={'/'} activeClassName="active" className="px-4 flex justify-end" onClick={handleMenuClick}>
                <span> {lang==='english' ? 'About Four Elms' : 'Acerca de Four Elms'}</span>
            </Link>
        </li>
        <li class="text-gray-700 py-2">
            <Link to={'/check-in-out'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span> {lang==='english' ? 'Check-in and Check-out Procedures' : 'Procedimientos de registro y salida'}</span>
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/contact'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span> {lang==='english' ? 'Contact and emergency information' : 'Información de contacto y emergencia'}</span>            
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/alarm'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span>{lang==='english' ? 'Alarm system and locking up' : 'Sistema de alarma y bloqueo'}</span>          
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/appliances'} onClick={expandMenuClick} class="px-4 flex justify-end mt-1 md:mt-4">
                <span >{lang==='english' ? `Instructions for appliances and electronics ${changeChevron(expandMenu)}` : `Instrucciones para electrodomésticos y electrónica ${changeChevron(expandMenu)}`}</span>              
            </Link>
            </li>
            {expandMenu ? 
             <ul class='text-xs px-6 mt-1'>
                <li><a href="#aga" onClick={specialMenuClick}>{lang==='english' ? 'AGA (cooker)' : 'AGA (cocina)'}</a></li>
                <li><a href="#quooker" onClick={specialMenuClick}>{lang==='english' ? 'Quooker (kitchen tap)' : 'Quooker (grifo de cocina)'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Microwave' : 'Microonda'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Dishwasher' : 'Lavavajillas'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Fridge' : 'Nevera'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Freezer' : 'Congelador'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Washing machine' : 'Lavadora'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Washing line' : 'Línea de lavado'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'WIFI' : 'WIFI'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Kitchen TV' : 'Cocina TV'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Heating & hot water' : 'Calefacción y agua caliente'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Side parasol' : 'Parasol lateral'}</a></li>
                <li><a href="#" onClick={specialMenuClick}>{lang==='english' ? 'Conservatory windows & doors' : 'Ventanas y puertas acristaladas'}</a></li>
            </ul>
                   : null }
        
        <li class="py-2">
            <Link to={'/towels'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span>{lang==='english' ? 'Towels, linen & kitchen supplies' : 'Toallas, ropa de cama y utensilios de cocina'}</span>               
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/waste'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span>{lang==='english' ? 'Waste disposal and recycling' : 'Eliminación y reciclaje de residuos'}</span>                      
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/information'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span>{lang==='english' ? 'Information on the local area' : 'Información sobre el área local'}</span>               
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/contract'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span>{lang==='english' ? 'House rules & contract' : 'Reglas de la casa y contrato'}</span>              
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/cleaning'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span>{lang==='english' ? 'House cleaning' : 'Limpieza de la casa'}</span>             
            </Link>
        </li>
        <li class="py-2">
            <Link to={'/feedback'} class="px-4 flex justify-end mt-1 md:mt-4" onClick={handleMenuClick}>
                <span>{lang==='english' ? 'Feedback' : 'Retroalimentación'}</span>               
            </Link>
        </li>
    </ul>

</nav>
</div>
</>

)

}

export default Navbar;