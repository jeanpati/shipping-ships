import { DockList } from "./docks.js";
import { HaulerList } from "./haulers.js";
import { CargoList } from "./cargos.js";

const mainElement = document.querySelector("#container")


const mainHTML =
`<section>
<h2>DOCKS</h2>
${DockList()}
<h2>HAULER SHIPS</h2>
${HaulerList()}
<h2>CARGO SHIPS</h2>
${CargoList()}

</section>
`

mainElement.innerHTML = mainHTML




// If you can track down the knowledge, but need help with implementing it, reach out to your peers or your instructors.

// How can you change the layout of the lists from top-down to having three columns?
//add a flexbox and display it as a row of three columns

// How can you sort each list of names alphabetically?
// use the .sort method on an array

// How would your ERD change if the customer had the following, new requirement?
// Each dock will only service some of the hauling ships because of contracts with their companies. For example, Rotterdam will only service "Seawise Giant" and "Pioneering Spirit", and Busan will service "Seawise Giant" and "Boaty McBoatface". Each hauling ship can be serviced by many docks, and each dock can service one, or more, hauling ships. You need to keep track of the allowed relationships in your database.
//we would have to add a bridge table due to the many to many relationship



// What is structuredClone() in JavaScript, and how could it be used in your project?