import { useContext, useEffect } from 'react'
import { LangContext } from '../context/language.context';

import Navbar from "../components/Navbar";

function Contract(){

     const { lang } = useContext(LangContext);

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

return(

<>

<div class="grid md:grid-cols-4">

     <div class='navbar' id='navContract'>

<Navbar/>

</div>

<main class="background md:col-span-3 pb-8" id='Contract' >

<div class='md:pt-10 w-3/4 mx-auto' >

<h1 class='text-2xl font-bold mb-8 mt-8'> {lang==='english' ? `House rules & contract` : 'Reglas de la casa y contrato'} </h1>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Rental Agreement for Holiday Let` : 'Contrato de alquiler para vacaciones'} </h2>
<p class='mb-8'>{lang==='english' ? `This agreement ("Agreement") is made on 31/1/24  between Chris Collins & Judy Collins ("Landlord") and Alberto Heguy & Paula Uranga ("Tenants").` : `Este acuerdo ("Acuerdo") se realiza el 31/1/24  entre Chris Collins y Judy Collins ("Propietario") y Alberto Heguy y Paula Uranga ("Inquilinos").`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Property Details` : 'Detalles de la propiedad'} </h2>
<p class='mb-8'>{lang==='english' ? `The Landlord agrees to allow access to and the Tenants agree to rent the holiday property located at Four Elms, Grosvenor Road, Godalming, Surrey, GU7 1PA ("Property"), for a term of 93 nights from 29th April 2024 to 24th July 2024.` : `El propietario acepta permitir el acceso y los inquilinos aceptan alquilar la propiedad vacacional ubicada en Four Elms, Grosvenor Road, Godalming, Surrey, GU7 1PA ("Propiedad"), por un período de 93 noches desde el 29 de abril de 2024 hasta el 24 de julio de 2024.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Rent and Deposit` : 'Renta y Depósito'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree to pay rent to the Landlord in the amount of £45,000, payable in advance on or before the 1st April 2024. In addition, the Tenants agree to pay a 10% security deposit in the amount of £4,500 to be held by the Landlord as security against any damage to the Property or breach of this Agreement.` : `Los inquilinos acuerdan pagar el alquiler al propietario por un monto de £ 45 000, pagadero por adelantado el 1 de abril de 2024 o antes. Además, los inquilinos acuerdan pagar un depósito de seguridad del 10% por un monto de £ 4500 que deberá ser retenido por al Propietario como garantía contra cualquier daño a la Propiedad o incumplimiento de este Acuerdo.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Use of Property` : 'Uso de la Propiedad'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree to use the Property solely as a holiday home and not to use it for any other purpose, including but not limited to commercial purposes. The Tenants further agree to comply with all applicable laws, regulations, and rules governing the use of the Property.` : `Los Inquilinos aceptan utilizar la Propiedad únicamente como casa de vacaciones y no utilizarla para ningún otro propósito, incluidos, entre otros, fines comerciales. Los Inquilinos también aceptan cumplir con todas las leyes, reglamentos y normas aplicables que rigen el uso de la Propiedad.`}</p>
<p class='mb-8'>{lang==='english' ? `The front room, two single bedrooms, under-stairs cupboards, garage and garden shed are not included as part of this agreement and will be kept locked. The Landlords and their representatives and relations reserve the right to access any part of the property, when necessary, and without good reason.` : `La habitación delantera, el garaje y el cobertizo del jardín no están incluidos como parte de este acuerdo y se mantendrán bajo llave. El Arrendador se reserva el derecho de acceder al garaje y cobertizo de jardín, cuando sea necesario, pero sin motivo justificado.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `No Dogs Allowed` : 'No se permiten perros'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree not to bring any dogs onto the Property. The Tenants agree not to bring any other pets onto the Property without prior agreement with the Landlord.` : `Los Inquilinos se comprometen a no traer perros a la Propiedad. Los Inquilinos se comprometen a no traer ninguna otra mascota a la Propiedad sin acuerdo previo con el Propietario.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Property Not Suitable for Young Children` : 'Propiedad no apta para niños pequeños'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants acknowledge that the Property may not be suitable for children between and including the ages of 6 months and 3 years old, and agree not to bring any children in this age range onto the Property.` : `Los Inquilinos reconocen que la Propiedad puede no ser adecuada para niños de entre 6 meses y 3 años inclusive, y acuerdan no traer niños en este rango de edad a la Propiedad.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Maintenance and Repairs` : 'Mantenimiento y Reparaciones'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree to maintain the Property in good condition and to promptly report any damage or needed repairs to the Landlord. The Tenants agree to pay for any repairs or damages caused by their negligence or breach of this Agreement.` : `Los Inquilinos acuerdan mantener la Propiedad en buenas condiciones e informar de inmediato al Propietario sobre cualquier daño o reparación necesaria. Los Inquilinos aceptan pagar cualquier reparación o daño causado por su negligencia o incumplimiento de este Acuerdo.`}</p>
<p class='mb-8'>{lang==='english' ? `The property will be made available by the landlords in a good state of tidiness, cleanliness and hygiene. The Tenant agrees to vacate the property in a similar state.` : `La propiedad será puesta a disposición por los propietarios en buen estado de orden, limpieza e higiene. El Inquilino se compromete a desalojar la propiedad en un estado similar.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Limitation of Liability` : 'Limitación de responsabilidad'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants acknowledge that the use of the Property may involve certain risks, and that the Landlord does not accept responsibility for accidents or injuries incurred by any of the tenants, however caused.` : `Los Arrendatarios reconocen que el uso de la Propiedad puede implicar ciertos riesgos, y que el Arrendador no acepta responsabilidad por accidentes o lesiones sufridas por cualquiera de los arrendatarios, cualquiera que sea su causa.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Only Specified Persons May Stay Overnight` : 'Solo personas específicas pueden pasar la noche'} </h2>
<p class='mb-8'>{lang==='english' ? `Only the people specified below may stay overnight at the Property. The Tenants agree not to allow any other persons to stay overnight at the Property without the prior written consent of the Landlord:` : `Solo las personas que se especifican a continuación pueden pernoctar en la Propiedad. Los Arrendatarios se comprometen a no permitir que otras personas pasen la noche en la Propiedad sin el consentimiento previo por escrito del Arrendador:`}</p>
<ul class='ml-4'>
     <li>•	Alberto Heguy</li>
     <li>•	Paula Uranga </li>
     <li>•	Silvestre Heguy</li>
     <li>•	Amalia Heguy</li>
     <li>•	Ambar Heguy</li>
     <li>•	Jacinto Heguy</li>
     <li>•	Gladys Delvalle</li>
</ul>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Termination and Renewal` : 'Terminación y Renovación'} </h2>
<p class='mb-8'>{lang==='english' ? `This Agreement shall terminate at the end of the rental term specified above. The Tenants may not renew this Agreement for any additional term without the prior written consent of the Landlord.` : `Este Acuerdo terminará al final del plazo de alquiler especificado anteriormente. Los Arrendatarios no podrán renovar este Acuerdo por ningún término adicional sin el consentimiento previo por escrito del Arrendador.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Late Payment and Default` : 'Pago atrasado e incumplimiento'} </h2>
<p class='mb-8'>{lang==='english' ? `If the Tenants fail to pay rent or any other amounts due under this Agreement on time, the Landlord may charge interest at the rate of [Interest Rate] per annum, or the maximum rate allowed by law, whichever is lower. If the Tenants default on any other provision of this Agreement, the Landlord may terminate this Agreement and pursue any other legal remedies available to the Landlord.` : `Si los Inquilinos no pagan el alquiler o cualquier otro monto adeudado en virtud de este Acuerdo a tiempo, el Propietario puede cobrar intereses a la tasa de [Tasa de interés] por año, o la tasa máxima permitida por la ley, la que sea menor. Si los Inquilinos incumplen cualquier otra disposición de este Acuerdo, el Propietario puede rescindir este Acuerdo y buscar cualquier otro recurso legal disponible para el Propietario.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Governing Law and Jurisdiction` : 'Ley aplicable y jurisdicción'} </h2>
<p class='mb-8'>{lang==='english' ? `This Agreement shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or related to this Agreement shall be resolved by the courts of England and Wales.` : `Este Acuerdo se regirá e interpretará de conformidad con las leyes de Inglaterra y Gales. Cualquier disputa que surja de o esté relacionada con este Acuerdo será resuelta por los tribunales de Inglaterra y Gales.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Entire Agreement` : 'Acuerdo completo'} </h2>
<p class='mb-8'>{lang==='english' ? `This Agreement constitutes the entire agreement between the parties and supersedes all prior negotiations, understandings, and agreements between the parties, whether written or oral. This Agreement may not be modified except in writing signed by both parties.` : `Este Acuerdo constituye el acuerdo completo entre las partes y reemplaza todas las negociaciones, entendimientos y acuerdos previos entre las partes, ya sean escritos u orales. Este Acuerdo no puede ser modificado excepto por escrito firmado por ambas partes.`}</p>

</div>

</main>

</div>

</>

)

}

export default Contract;