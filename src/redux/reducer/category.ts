export const SELECTED_CATEGORY = 'SELECTED_CATEGORY'

//CREATING ACTIONS
export function selectedCategory(categoryArray) {
    // console.log("inside dispatch function",productID)
    return {
        type: SELECTED_CATEGORY,
        arrayCat: categoryArray,
    }
}

// CREATING REDUCER

const initialState =
{
    arrayCat: [],
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CATEGORY:


            return {
                ...state,
                arrayCat: action.arrayCat,

            }

        default:
            return state
    }
}

export default categoryReducer