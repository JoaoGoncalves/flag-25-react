import Product from "./Product";
import {products} from '../seeds';
import { useState } from "react";

function ProductList() {

    const [prods, setProds] = useState(products) //initialState


    const handleProductUpVote = (id) => {

        const updatedProducts = prods.map( p => {
            if(p.id === id){
                return {...p, votes: p.votes + 1 }
            } else {
                return p;
            }
        })
        setProds(updatedProducts);
    }
    const handleProductDownVote = (id) => {

        const updatedProducts = prods.map( p => {
            if(p.id === id){
                return {...p, votes: p.votes - 1 }
            } else {
                return p;
            }
        })
        setProds(updatedProducts);
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
                changeUpVote = {handleProductUpVote}
                changeDownVote = {handleProductDownVote}

        />
    ));

    return (
        <section className="ui unstackable items">
            {productComponents}
        </section>
    );
}

export default ProductList;