const initialData = [
  {
    id: 1,
    title: "sbf",
    status: "released",
    release: 123769,
    newVol: 123214,
    url: "f;jebfhlkajsdfolw",
  },
  {
    id: 2,
    title: "klajh",
    status: "comming soon",
    release: 123769,
    newVol: 123214,
    url: "f;jebfhlkajsdfolw",
  },
];

const listReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_INPUT":
      state = [...state, action.payload];
      return state;

    case "EDIT_INPUT":
      const editState = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state = editState;
      return state;

    case "DELETE_INPUT":
      const filterContext = state.filter(
        (item) => item.id !== action.payload && item
      );
      state = filterContext;
      return state;

    default:
      return state;
  }
};

export default listReducer;
