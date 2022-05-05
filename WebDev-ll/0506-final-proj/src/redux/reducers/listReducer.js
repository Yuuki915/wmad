const initialState = [
  {
    id: 1,
    title: "sbf",
    state: "open",
    url: "f;jebfhlkajsdfolw",
    created: 123769,
    updated: 123214,
  },
  {
    id: 2,
    title: "klajh",
    state: "open",
    url: "f;jebfhlkajsdfolw",
    created: 123769,
    updated: 123214,
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
