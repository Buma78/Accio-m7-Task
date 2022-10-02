const initialValue = 0

const changeNumber = (state = initialValue, action) => {
    switch(action.type) {
        case 'Increment': return state + 1;
        default: return state;
    }
}

export default changeNumber;