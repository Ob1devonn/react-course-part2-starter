interface Action {
  type: "INCREMENT" | "RESET";
}
//similar to a overloaded function
const counterReducer = (state: number, action: Action): number => {
  //Increment describes what type of action
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  return state;
};

export default counterReducer;
