import { getCargos, getHaulers } from "./database.js";

export const CargoList = () => {
    const cargos = getCargos()

    let cargosHTML = `<ul>`

    for (const cargo of cargos) {
        // Convert each dock object to an <li> and append to the docksHTML string
        cargosHTML += `<li data-type="cargo" data-haulerId="${cargo.haulerId}" data-name="${cargo.name}">${cargo.name}</li>`
    }

    cargosHTML += `</ul>`

    return cargosHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === 'cargo'){
            // Get the haulerId value of the shipping ship clicked
            const cargoID = parseInt(itemClicked.dataset.haulerid)
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            // Iterate the array of hauler objects
            const haulers = getHaulers()
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (cargoID === hauler.id){
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler.name
                }
            }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}`)
        }
    }
)