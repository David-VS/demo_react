import React, {Component} from 'react';

class ProductTable extends Component {
    // State, initialized each page refresh
    state = {
        products: [
            // Hardcoded products, containing no comments
            {id: 1, name: "Hammer", price: 12.23, category: "tools"},
            {id: 2, name: "chisel", price: 5.99, category: "tools"},
            {id: 3, name: "Saw", price: 20.50, category: "tools"}
        ]
    };

    render() {
        return (<div>
            <table border="5">
                <thead>
                <tr>
                    <th>name</th>
                    <th>category</th>
                    <th>price</th>
                </tr>
                </thead>

                <tbody>
                {
                    // Array.map(element, index) method, index used to pass to deleteHandler
                    this.state.products.map((product, index) => {
                        return <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>);
    };
}

export default ProductTable;
