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
    default:
      return state;
  }
};

export default listReducer;
