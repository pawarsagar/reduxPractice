export function add(data) {
    return (dispatch, getState) => {
        dispatch({type:'ADD'})
    }
}
export function sub(data) {
    return (dispatch, getState) => {
        dispatch({type:'SUB'})
    }
}