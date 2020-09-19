let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
alert(petNames)

let withMarmaduke = [petNames, 'Marmaduke']
alert(withMarmaduke)

let first = petNames.shift()
alert(petNames)

let addPet = petNames.shift("Nancy")
alert("The action taken was: add Nancy to the front of the array")
alert("The remaining array data are:" + petNames)

