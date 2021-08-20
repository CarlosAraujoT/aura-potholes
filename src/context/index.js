import { createContext, useReducer } from "react";
import { itemReducer } from "./itemReducer";

export const initialState = {
	id: 1,
};

export const ItemSelectedContext = createContext();

export const ItemProvider = ({ children }) => {
	const [itemState, dispatch] = useReducer(itemReducer, initialState);

	const setIdItem = id => {
		dispatch({ type: "setId", payload: id });
	};

	const resetIdItem = () => {
		dispatch({ type: "reset", payload: 0 });
	};

	return (
		<ItemSelectedContext.Provider value={{ itemState, setIdItem, resetIdItem }}>
			{children}
		</ItemSelectedContext.Provider>
	);
};
