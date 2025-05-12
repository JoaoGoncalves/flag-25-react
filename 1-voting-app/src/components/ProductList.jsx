import Product from "./Product";
import {products} from '../seeds';
import { useState } from "react";

function ProductList() {

    const [prods, setProds] = useState(products) //initialState
    const [descendent, setDescendent] = useState(false);



    const handleProductVote = (id, vote) => {

        const updatedProducts = prods.map( p => {
            if(p.id === id){
                return {...p, votes: p.votes + vote }
            } else {
                return p;
            }
        })
        setProds(updatedProducts);
    }

    const changeSort = () => {
        setDescendent(!descendent)
    }
    

    const sortedProducts = prods.sort( (a, b) => ( descendent ? (a.votes - b.votes) : (b.votes - a.votes)) );

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
                changeVote = {handleProductVote}
 
        />
    ));

    return (
        <section className="ui unstackable items">
            <button onClick={changeSort}>up / down</button>
            {productComponents}
        </section>
    );
}

export default ProductList;