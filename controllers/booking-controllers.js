// const greetings= () =>{

//    return 'hello world'
// }

// function greetings() {
//     return 'hello world';
// }


export const getAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is one booking')
}

export const postAllBookings = (req, res) => {
    res.status(200).json('This is a post')
}

export const updateAllBookings = (req, res) => {
    res.status(200).json('This is an update')
}
export const deleteAllBookings= (req, res) => {
    res.status(200).json('This is an update')
}




