import { getDocks, getHaulers } from "./database.js"

const docks = getDocks()
const haulers= getHaulers()

export const DockList = () => {
    let docksHTML = `<ul>`
    
    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="docks" data-name="${dock.location}" data-id="${dock.id}">${dock.location} can hold ${dock.volume} tons of cargo.</li>`
    }

    docksHTML += `</ul>`

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "docks"){
            //get the dockID value of the dock clicked
            const dockId = parseInt(itemClicked.dataset.id)
            //set a variable to an empty string or holding name
            let haulerName = []
            //iterate the hauler objects
            for (const hauler of haulers) {
                //does the dockid match the foreign key dockid
                if (dockId === hauler.dockId){
                    //set the variable equal to the name of the matching id
                    haulerName.push(hauler.name)
                }
            }
            if(haulerName.length === 0) {
            window.alert(`The ${itemClicked.dataset.name} dock is currently unloading nothing`) 
            } 
            else{
            window.alert(`The ${itemClicked.dataset.name} dock is currently unloading ${haulerName.join(' and ')}`)
            }
        }
    }
)