/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/


const queens = []

const createQueen = (queenId, queenName) => { //define the parameters
    const queenObject = {
        id: queenId,
        name:queenName,
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Olivea Dean")

const hailTheQueen = 0(nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}



for (const queen of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  // What should be passed as an argument?
    console.log(hailMessage)
}
payTribute(1, "Food")
for (const queen of queens) {
   
}