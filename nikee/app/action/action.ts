import { Product } from "@/types/products";


export const addtoCart = async (product: Product ) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]'); 

    const existingProductIndex = cart.findIndex((item) => item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1;
    } else {
        cart.push({
            ...product, inventory: 1,
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

}

export const removeProduct = (productId: string) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = cart.filter((product) => product._id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((product) => product._id === productId);
    if (productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

}

export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}