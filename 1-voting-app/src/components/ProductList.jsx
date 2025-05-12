import Product from "./Product";

import {products} from '../seeds';

function ProductList() {

    //const product = products[1];
    const productComponents = products.map( product => (
        <Product 
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = {product.url}
                votes = {product.votes}
                productImageUrl = {product.productImageUrl}
                submitterAvatarUrl = {product.submitterAvatarUrl}
        />
    ));

    return (
        <section className="ui unstackable items">
            {productComponents}
        </section>
    );
}

export default ProductList;