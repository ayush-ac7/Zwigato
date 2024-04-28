import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        //modifying the state here(directly changing state)
        addItem: (state, action) => {
            //redux using immer behind the scenes
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        // original state = {items: ["pizza"]}
        clearCart: (state, action) => {
            //Redux ToolKit says either mutate existing state or return a new state
            //state.items.length = 0; //original state = []

            return { items: []}; //this new object will be replaced inside original state { items: ["pizza"]}
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;