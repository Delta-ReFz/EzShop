import { useState } from "react";
import { create } from "zustand"; //npm i zustand

export const useProductStore = create((set) => ({

    products: [],
    setProducts: (products) => set({products}),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success:false, message:"Please fill in all fields."}
        }

        const res = await fetch("http://localhost:5000/api/products/", {  // de base c'etait comme ca "http://localhost:5000" comme c'est long et moche, le vite.config.js à été modifié pour regler le probleme
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products:[...state.products, data.data]}));
        return {success:true, message:"Product created successfully."}
    }
}));

