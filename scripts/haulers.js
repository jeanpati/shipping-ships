import { getHaulers } from "./database.js"
import { getCargos } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = `<ul>`

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `<li data-type="hauler"
                            data-haulerid="${hauler.id}"
                            >${hauler.name}
                            </li>`
    }

    haulersHTML += `</ul>`

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === 'hauler'){
                // Get the id of the hauler clicked
                const haulerId = itemClicked.dataset.haulerid
                // Start a counter variable at 0
                let counter = 0
                
                // Iterate all of the shipping ships
                const cargos = getCargos();
                for (const cargo of cargos) {
                // Does the haulerId foreign key match the id?
                    if (parseInt(haulerId) === cargo.haulerId) {
                    // Increase the counter by 1
                    counter++;
                    }
                }
                window.alert(`This hauler is carrying ${counter} cargo ships`)
            }
    }
)