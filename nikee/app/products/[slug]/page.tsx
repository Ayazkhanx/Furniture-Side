import { client } from "@/sanity/lib/client";
import { Product } from "@/types/products";
import { groq } from "next-sanity";


interface productPageProps {
    params : Promise<{slug : string}>
}

async function getProduct(slug: string ): Promise<Product> {
    return client.fetch(
        groq `*[_type == "product" && slug.current == $slug][0] {
        _id,
        productName,
        _type,
        category,
        price,
        inventory,
        colors,
        image,
        description,
        discountPercentage,
        "imageUrl": image.asset->url,
        tags
        }`, { slug } 
    )
}

export  default async function ProductPage( {params} : productPageProps){
    const {slug } = await params
    const product = await getProduct(slug)

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    
                </div>
            </div>
        </div>
            
    )
}