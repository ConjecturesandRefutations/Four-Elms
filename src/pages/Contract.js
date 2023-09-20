import { useContext, useEffect } from 'react'

import Navbar from "../components/Navbar";

function Contract(){

     const lang='english'
     
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
<p class='mb-8'>{lang==='english' ? `This agreement ("Agreement") is made on 10/3/23 between Chris Collins & Judy Collins ("Landlord") and Alberto Heguy & Paula Uranga ("Tenants").` : `Este acuerdo ("Acuerdo") se realiza el 3/10/23 entre Chris Collins y Judy Collins ("Propietario") y Alberto Heguy y Paula Uranga ("Inquilinos").`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Property Details` : 'Detalles de la propiedad'} </h2>
<p class='mb-8'>{lang==='english' ? `The Landlord agrees to let and the Tenants agree to rent the holiday property located at Four Elms, Grosvenor Road, Godalming, Surrey, GU7 1PA ("Property"), for a term of 2 months 25 days from 1st May 2023 to 25th July 2023.` : `El Propietario acepta alquilar y los Inquilinos aceptan alquilar la propiedad vacacional ubicada en Four Elms, Grosvenor Road, Godalming, Surrey, GU7 1PA ("Propiedad"), por un período de 2 meses y 25 días desde el 1 de mayo de 2023 hasta el 25 de julio de 2023.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Rent and Deposit` : 'Renta y Depósito'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree to pay rent to the Landlord in the amount of £40,000, payable in advance on or before the 1st May 2023. In addition, the Tenants agree to pay a 10% security deposit in the amount of £4,000 to be held by the Landlord as security against any damage to the Property or breach of this Agreement.` : `Los Inquilinos acuerdan pagar el alquiler al Propietario por un monto de £40,000, pagadero por adelantado el 1 de mayo de 2023 o antes. Además, los Inquilinos acuerdan pagar un depósito de seguridad del 10% por un monto de £4,000 que se retendrá por el Arrendador como garantía contra cualquier daño a la Propiedad o incumplimiento de este Acuerdo.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Use of Property` : 'Uso de la Propiedad'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree to use the Property solely as a holiday home and not to use it for any other purpose, including but not limited to commercial purposes. The Tenants further agree to comply with all applicable laws, regulations, and rules governing the use of the Property.` : `Los Inquilinos aceptan utilizar la Propiedad únicamente como casa de vacaciones y no utilizarla para ningún otro propósito, incluidos, entre otros, fines comerciales. Los Inquilinos también aceptan cumplir con todas las leyes, reglamentos y normas aplicables que rigen el uso de la Propiedad.`}</p>
<p class='mb-8'>{lang==='english' ? `The front room, garage and garden shed are not included as part of this agreement and will be kept locked. The Landlord reserves the right to access the garage and garden shed, when necessary, but without good reason.` : `La habitación delantera, el garaje y el cobertizo del jardín no están incluidos como parte de este acuerdo y se mantendrán bajo llave. El Arrendador se reserva el derecho de acceder al garaje y cobertizo de jardín, cuando sea necesario, pero sin motivo justificado.`}</p>
<p class='mb-8'>{lang==='english' ? `The gardener and house cleaner (Thomas Filipeck) will require access to the garden for 11 hours a week. The Tenants can request house cleaning from Thomas Filipeck. His rate is £19 per hour and should be paid directly to him on the days he cleans the house, if his services are used.` : `El jardinero y limpiador de la casa (Thomas Filipeck ) requerirá acceso al jardín durante 11 horas a la semana. Los inquilinos pueden solicitar la limpieza de la casa a Thomas Filipeck . Su tarifa es de £19 por hora y se le debe pagar directamente los días que limpia la casa, si se utilizan sus servicios.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `No Dogs Allowed` : 'No se permiten perros'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree not to bring any dogs onto the Property. The Tenants agree not to bring any other pets onto the Property without prior agreement with the Landlord.` : `Los Inquilinos se comprometen a no traer perros a la Propiedad. Los Inquilinos se comprometen a no traer ninguna otra mascota a la Propiedad sin acuerdo previo con el Propietario.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Property Not Suitable for Young Children` : 'Propiedad no apta para niños pequeños'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants acknowledge that the Property may not be suitable for children between and including the ages of 6 months and 3 years old, and agree not to bring any children in this age range onto the Property.` : `Los Inquilinos reconocen que la Propiedad puede no ser adecuada para niños de entre 6 meses y 3 años inclusive, y acuerdan no traer niños en este rango de edad a la Propiedad.`}</p>

<h2 class='text-xl font-bold mb-4 mt-8'> {lang==='english' ? `Maintenance and Repairs` : 'Mantenimiento y Reparaciones'} </h2>
<p class='mb-8'>{lang==='english' ? `The Tenants agree to maintain the Property in good condition and to promptly report any damage or needed repairs to the Landlord. The Tenants agree to pay for any repairs or damages caused by their negligence or breach of this Agreement.` : `Los Inquilinos acuerdan mantener la Propiedad en buenas condiciones e informar de inmediato al Propietario sobre cualquier daño o reparación necesaria. Los Inquilinos aceptan pagar cualquier reparación o daño causado por su negligencia o incumplimiento de este Acuerdo.`}</p>

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