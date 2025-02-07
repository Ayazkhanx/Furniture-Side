

// export interface Product {
//     _id: string;
//     productName: string;
//     _type: 'product';
//     image?: {
//         asset : {
//             ref: string;
//             type: 'image';
//         }
//     }
//     price: string;
//     description: string;
//     slug: {
//         _type: "slug"
//         current: string
//     }

// }



export interface Product {
    _id: string;
    productName: string;
    _type: 'product';
    image?: {
      asset: {
        ref: string;
        type: 'image';
      };
    };
    price: string;
    description: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    inventory: number;
  }