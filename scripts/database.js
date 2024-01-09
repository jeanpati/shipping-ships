const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: 'Popeye', dockId: 1},
        { id: 2, name: 'Olive', dockId: 2 },
        { id: 3, name: 'Brutus', dockId: 2},
        { id: 4, name: 'Sweet Pea', dockId: 2},
        { id: 5, name: 'Wimpy', dockId: 1},
    ],
    cargos: [
        {id: 1, name: 'Alfredo', haulerId:1},
        {id: 2, name: 'Spaghetti', haulerId:5},
        {id: 3, name: 'Pesto', haulerId:4},
        {id: 4, name: 'Meatball', haulerId:2},
        {id: 5, name: 'Linguine', haulerId:3},
        {id: 6, name: 'Ratatouille', haulerId:4},
        {id: 7, name: 'Angels Hair', haulerId:1},
        {id: 8, name: 'Rigatoni', haulerId:5},
        {id: 9, name: 'Bucatini', haulerId:2},
        {id: 10, name: 'Macaroni', haulerId:4},
        {id: 11, name: 'Ravioli', haulerId:1},
        {id: 12, name: 'Truffle', haulerId:5},
        {id: 13, name: 'Penne', haulerId:1},
        {id: 14, name: 'Ziti', haulerId:2},
        {id: 15, name: 'Bolognese', haulerId:4},
        {id: 16, name: 'Lasagna', haulerId:5},
    ]
}


export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getCargos = () => {
    return database.cargos.map(cargo => ({...cargo}))
}