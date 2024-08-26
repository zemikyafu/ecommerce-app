const initialState = { messageType: "",message: "" };

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "alert/success":
      return { ...state, messageType: "success", message: action.payload };
    case "alert/error":
      return { ...state, messageType: "error", message: action.payload };
    default:
      return state;
  }
};

export default messageReducer