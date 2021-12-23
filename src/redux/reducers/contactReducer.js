const initialState = [
  {
    id: 0,
    name: "Stanislav Rudenko",
    number: 88005553535,
    email: "rudenko@ukr.net",
  },
  {
    id: 1,
    name: "Mai Max",
    number: 8800585562,
    email: "mai@ukr.net",
  },
  {
    id: 2,
    name: "Olexandr Bernadin",
    number: 88005555555,
    email: "ber@ukr.net",
  },
  {
    id: 3,
    name: "Oleg Evtyshok",
    number: 88005557777,
    email: "oleg@ukr.net",
  },
  {
    id: 4,
    name: "Tieng Noang",
    number: 88555555662,
    email: "tieng@ukr.net",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
