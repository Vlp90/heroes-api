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
        return {
          ...state,
          term: action.term,
        };

        case actionTypes.SET_FIND_ID:
            return {
              ...state,
              id: action.results,
            };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  