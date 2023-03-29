import { useState } from 'react'

function Navbar(){
      
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
                <span>About Four Elms</span>
            </a>
        </li>
        <li class="py-1">
            <a href="#" class="px-4 flex justify-end">
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>Contact and emergency information</span>            
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>Alarm system and locking up</span>          
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>Instructions for appliances and electronics</span>              
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>Towels, linen & kitchen supplies</span>               
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>Waste disposal and recycling</span>                      
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>Information on the local area</span>               
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>House rules & contract</span>              
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>House cleaning</span>             
            </a>
        </li>
        <li class="py-2">
            <a href="#" class="px-4 flex justify-end">
                <span>Feedback</span>               
            </a>
        </li>
    </ul>

</nav>
</div>
</>

)

}

export default Navbar;