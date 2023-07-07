// arrays hotel
let idsH = []
let namesH = []
let categoriesH = []
let addressesH = []
let phones = []
let contHotel = 0
// arrays booking
let idB = []
let responsibleName = []
let checkIn = []
let checkOut = []
let contBooking = 0

let continueLoop = true
while (continueLoop) {
    let loopOption = parseInt(prompt("ENTER to start, 1 to stop: "))
    if(loopOption === 1){
        continueLoop = false
    } else{
        let option = parseInt(prompt("1-Register hotel and booking, 2-Show booking, 3-Show hotel, 4-Person's booking, 5-Categories, and 6-Update phone: "))
        switch(option){
            case 1:
                registerHotel()
                registerBooking()
                break;
            case 2:
                let idInput = prompt("Type the ID: ")
                bookingsOfHotel(idInput)
                break;
            case 3:
                let idInputBooking = prompt("Type the booking ID: ")
                bookingsInHotel(idInputBooking)
                break;
            case 4:
                let personBooking = prompt("Person name: ")
                personBookings(personBooking)
                break;
            case 5:
                let category = prompt("Type the category: ")
                let varToPrint = hotelCategory(category)
                console.log("Array of hotel category: ", varToPrint)
                break;
            case 6:
                let idPhone = prompt("Hotel ID: ")
                let newPhone = prompt("New phone: ")
                updatePhone(idPhone, newPhone)
                break;
            default:
                console.log("Invalid option, try again.")
                break;
        }   
    }
}

console.log("-" * 20)
console.log("Hotel ID: ", idsH)
console.log("Hotel name: ", namesH)
console.log("Category hotel: ", categoriesH)
console.log("Address: ", addressesH)
console.log("Phone: ", phones)
console.log("-" * 20)
console.log("Booking ID: ", idB)
console.log("Reponsible: ", responsibleName)
console.log("Check in: ", checkIn)
console.log("Check out: ", checkOut)
console.log("-" * 20)

function registerHotel(){
    let id = prompt("Hotel ID: ")
    if(idsH.includes(id) === true){
        console.log("The ID already exist, try another one")
    } else{
        let name = prompt("Hotel name: ")
        let category = prompt("Category: ")
        let address = prompt("Address: ")
        let phone = prompt("Phone: ")
        idsH[contHotel] = id
        namesH[contHotel] = name
        categoriesH[contHotel] = category
        addressesH[contHotel] = address
        phones[contHotel] = phone
        contHotel++
        
    }
}

function registerBooking(){
    let id = prompt("Booking ID: ")
    let hotelID = idsH[contBooking]
    let name = prompt("Responsable name: ")
    let checkInPrompt = parseInt(prompt("Check in: "))
    let checkOutPrompt = parseInt(prompt("Check out: "))
    if(checkInPrompt < checkOutPrompt){
        idB[contBooking] = id
        idB.push(hotelID)
        responsibleName[contBooking] = name
        checkIn[contBooking] = checkInPrompt
        checkOut[contBooking] = checkOutPrompt
        contBooking++
    } else if(checkInPrompt > checkOutPrompt){
        console.log("The dates are not right, try again.")
    }
}
// get hotel id and shows hotel name, responsible, check in and check out
function bookingsOfHotel(id){ // fix it
    for(let i = 0; i < responsibleName.length; i++){
        if(id === idsH[i]){
            console.log("Hotel name: ", namesH[i])
            console.log("Reponsible name: ", responsibleName[i]) 
            console.log("Check in: ", checkIn[i])
            console.log("Check out: ", checkOut[i])
        }
    }
}

// get booking id and shows the hotel name, address, check in and check out
function bookingsInHotel(id){
    let checkFoundID = false
    for(let i = 0; i < responsibleName.length; i++){
        if(id === idB[i]){
            console.log("Hotel name: ", namesH[i])
            console.log("Address: ", addressesH[i])
            console.log("Check in: ", checkIn[i])
            console.log("Check out: ", checkOut[i])
            checkFoundID = true
        }
    } if(checkFoundID === false){
        console.log("ID was not found.")
    }
        
}

// get person's name and show her bookings
function personBookings(name){

    for(let i = 0; i < responsibleName.length; i++){
        if(name === responsibleName[i]){
            console.log("Reponsible name: ", responsibleName[i])
            console.log("Hotel ID: ", idB[i + 1])
            console.log("Booking ID: ", idB[i])
            console.log("Check in: ", checkIn[i])
            console.log("Check out: ", checkOut[i])

        }
    }
}

function hotelCategory(category){
    let auxCategory = []
    for(let i = 0; i < namesH.length; i++){
        if(category === categoriesH[i]){
            console.log("Hotel ", namesH[i], " belongs to the category of ", categoriesH[i])
            auxCategory.push(namesH[i])
        }
    }
    return auxCategory
}

function updatePhone(id, phone){
    let idPosition = idsH.indexOf(id)
    if(idPosition !== -1){
        phones[idPosition] = phone
        console.log("New phone: ", phones[idPosition])
    } else {
        console.log("Hotel ID not found.")
    }
}

