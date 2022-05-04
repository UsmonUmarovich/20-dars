import React from 'react'

export const ProductList = (props) => {
    if (props.products.length === 0) {
        return <p>Product hozicha yo'q</p>
    }
  return (
    <div>
        <ol>
            {props.products.map((product, index) => {
                return (
                    <li>
                        <ul>
                            <li>{product.name}</li>
                            <li>${product.price}</li>
                            <li>{product.category}</li>
                            <li>{product.desc}</li>
                            <li><button onClick={() => props.deleteProduct(product.id)}>delete</button></li>
                        </ul>
                        <br />
                    </li>
                )
            })}
        </ol>
    </div>
  )
}
