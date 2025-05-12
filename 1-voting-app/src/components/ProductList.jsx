import Product from "./Product";
import {products} from '../seeds';
import { useState } from "react";

function ProductList() {

    const [prods, setProds] = useState(products) //initialState


    const handleProductUpVote = (id) => {
        //console.log(`Foi votado o producto com id: ${id}`);

        const updatedProducts = prods.map( p => {
            if(p.id === id){
                return {...p, votes: p.votes + 1}
            } else {
                return p;
            }
        })

        setProds(updatedProducts);
       /*  products.map( p => {
            if(p.id === id){
                p.votes = p.votes + 1;
                
            }
        }) */
    }

    const sortedProducts = prods.sort( (a, b) => (b.votes - a.votes));

    const productComponents = sortedProducts.map( product => (
        <Product 
                key = {'prod-'+product.id}
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = {product.url}
                votes = {product.votes}
                productImageUrl = {product.productImageUrl}
                submitterAvatarUrl = {product.submitterAvatarUrl}
                handleVote = {handleProductUpVote}
        />
    ));

    return (
        <section className="ui unstackable items">
            {productComponents}
        </section>
    );
}

export default ProductList;