

export interface Product {
    _id: string;
    title: string;
    type: 'product';
    image?: {
        asset : {
            ref: string;
            type: 'image';
        }
    }
    price: string;
    description: string;
    tags: string;
    discountPercentage: number;

}