import { useContext } from 'react'
import { Link, NavLink } from "react-router-dom";

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
<nav class="text-right xl:fixed xl:mt-5" >
    <div class="flex justify-between items-center">
        <div class="px-4 cursor-pointer md:hidden ml-auto mr-5 wl-full" id="burger" onClick={specialMenuClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
        </div>
    </div>
    <ul class={`text-sm ${menuOpen ? "" : "hidden"} inline-block md:block mt-1 md:mt-3`} id="menu">
        <li class="">
           <NavLink to={'/'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span className="px-4 flex justify-end text-gray-700 my-1"> {lang==='english' ? 'About Four Elms' : 'Acerca de Four Elms'}</span>
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/check-in-out'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 text-gray-700 py-2"> {lang==='english' ? 'Check-in and Check-out Procedures' : 'Procedimientos de registro y salida'}</span>
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/contact'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2"> {lang==='english' ? 'Contact and emergency information' : 'Información de contacto y emergencia'}</span>            
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/alarm'} className={({ isActive }) => isActive ? "selected" : ""}  onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? 'Alarm system and locking up' : 'Sistema de alarma y bloqueo'}</span>          
            </NavLink>
        </li>
        <li>
            <Link className={({ isActive }) => isActive ? "selected" : ""} onClick={expandMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? `Instructions for appliances and electronics ${changeChevron(expandMenu)}` : `Instrucciones para electrodomésticos y electrónica ${changeChevron(expandMenu)}`}</span>              
            </Link>
            </li>
            {expandMenu ? 
             <ul class='text-xs px-6 mt-1'>
                <li><NavLink to={'/appliances/aga'} onClick={specialMenuClick}>{lang==='english' ? 'AGA (cooker)' : 'AGA (cocina)'}</NavLink></li>
                <li><NavLink to={'/appliances/quooker'} onClick={specialMenuClick}>{lang==='english' ? 'Quooker (kitchen tap)' : 'Quooker (grifo de cocina)'}</NavLink></li>
                <li><NavLink to={'/appliances/microwave'} onClick={specialMenuClick}>{lang==='english' ? 'Microwave' : 'Microonda'}</NavLink></li>
                <li><NavLink to={'/appliances/dishwasher'} onClick={specialMenuClick}>{lang==='english' ? 'Dishwasher' : 'Lavavajillas'}</NavLink></li>
                <li><NavLink to={'/appliances/fridge'} onClick={specialMenuClick}>{lang==='english' ? 'Fridge' : 'Nevera'}</NavLink></li>
                <li><NavLink to={'/appliances/freezer'} onClick={specialMenuClick}>{lang==='english' ? 'Freezer' : 'Congelador'}</NavLink></li>
                <li><NavLink to={'/appliances/washingmachine'} onClick={specialMenuClick}>{lang==='english' ? 'Washing machine' : 'Lavadora'}</NavLink></li>
                <li><NavLink to={'/appliances/washingline'} onClick={specialMenuClick}>{lang==='english' ? 'Washing line' : 'Línea de lavado'}</NavLink></li>
                <li><NavLink to={'/appliances/wifi'} onClick={specialMenuClick}>{lang==='english' ? 'WIFI' : 'WIFI'}</NavLink></li>
                <li><NavLink to={'/appliances/kitchentv'} onClick={specialMenuClick}>{lang==='english' ? 'Kitchen TV' : 'Cocina TV'}</NavLink></li>
                <li><NavLink to={'/appliances/heating'} onClick={specialMenuClick}>{lang==='english' ? 'Heating & hot water' : 'Calefacción y agua caliente'}</NavLink></li>
                <li><NavLink to={'/appliances/parasol'} onClick={specialMenuClick}>{lang==='english' ? 'Side parasol' : 'Parasol lateral'}</NavLink></li>
                <li><NavLink to={'/appliances/conservatory'} onClick={specialMenuClick}>{lang==='english' ? 'Conservatory windows & doors' : 'Ventanas y puertas acristaladas'}</NavLink></li>
            </ul>
                   : null }
        
        <li class="">
            <NavLink to={'/towels'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? 'Towels, linen & kitchen supplies' : 'Toallas, ropa de cama y utensilios de cocina'}</span>               
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/waste'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? 'Waste disposal and recycling' : 'Eliminación y reciclaje de residuos'}</span>                      
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/information'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? 'Information on the local area' : 'Información sobre el área local'}</span>               
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/contract'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? 'House rules & contract' : 'Reglas de la casa y contrato'}</span>              
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/cleaning'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? 'House cleaning' : 'Limpieza de la casa'}</span>             
            </NavLink>
        </li>
        <li class="">
            <NavLink to={'/feedback'} className={({ isActive }) => isActive ? "selected" : ""} onClick={handleMenuClick}>
                <span class="px-4 flex justify-end mt-1 md:mt-3 py-2">{lang==='english' ? 'Feedback' : 'Retroalimentación'}</span>               
            </NavLink>
        </li>
    </ul>

</nav>
</div>
</>

)

}

export default Navbar;