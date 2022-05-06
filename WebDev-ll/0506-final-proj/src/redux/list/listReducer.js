const initialData = [
  {
    id: 1,
    title: "My hero academia",
    vol: "34",
    status: "released",
    release: "2022-05-05",
    newVol: "2022-07-07",
  },
  {
    id: 2,
    title: "One panch man",
    vol: "25",
    status: "released",
    release: "2022-05-02",
    newVol: "to be decided",
  },
  {
    id: 3,
    title: "Snow White with the Red Hair",
    vol: "25",
    status: "released",
    release: "2022-05-02",
    newVol: "to be decided",
  },
  {
    id: 4,
    title: "Natsume's Book of Friends",
    vol: "28",
    status: "released",
    release: "2022-05-02",
    newVol: "to be decided",
  },
  {
    id: 5,
    title: "The fable The second contact",
    vol: "3",
    status: "released",
    release: "2022-05-06",
    newVol: "to be decided",
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
