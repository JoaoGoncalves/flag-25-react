import Product from "./Product";

import {products} from '../seeds';

function ProductList() {

    const product = products[3];

    return (
        <section className="ui unstackable items">
            <Product 
                /* {...product} */
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = {product.url}
                votes = {product.votes}
                productImageUrl = {product.productImageUrl}
                submitterAvatarUrl = {product.submitterAvatarUrl}
            />
        </section>
    );
}

export default ProductList;