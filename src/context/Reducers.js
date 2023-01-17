const reducer = (state, action) => {
  switch (action.type) {
    // Functions for changing the state value are to be created here
    case 'TOGGLEMENU':
      return {
        ...state,
        menuOpen: action.payload
      };
    case 'TOGGLEDROPDOWN':
      return {
        ...state,
        dropDownOpen: action.payload
      };
    case 'FILTERSPECIALISTS':
      return {
        ...state,
        specialists: action.payload
      };
    case 'FILTERMDLIST':
      return {
        ...state,
        mentalDisorders: action.payload
      };
    case 'TITLESEARCH':
      return {
        ...state,
        titleSearch: action.payload
      };
    case 'NAMESEARCH':
      return {
        ...state,
        nameSearch: action.payload
      };
    case 'CITYSEARCH':
      return {
        ...state,
        citySearch: action.payload
      };
    case 'TOGGLEPOSTFORM':
      return {
        ...state,
        forumPostForm: action.payload
      };
    case 'TOGGLECOMMENTFORM':
      return {
        ...state,
        commentForm: action.payload
      };
    case 'PASSWORDERROR':
      return {
        ...state,
        passwordError: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
