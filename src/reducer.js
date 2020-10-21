export const initialState = {
    term: null,
    id:null,
  };
  
  export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SET_FIND_ID: "SET_FIND_ID"
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    // Action => type, [payload]
  
    switch (action.type) {

      case actionTypes.SET_SEARCH_TERM:
        // console.log("ACTION SEARCH", action.term)
        return {
          ...state,
          term: action.term,
        };

        case actionTypes.SET_FIND_ID:
          // console.log("ACTION ID", action.id)
            return {
              ...state,
              id: action.id,
            };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  