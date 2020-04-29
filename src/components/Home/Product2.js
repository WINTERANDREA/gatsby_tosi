import React from "react"
import Img from "gatsby-image/withIEPolyfill"

const Product2 = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img
          fixed={product.image.fixed}
          className="card-img-top"
          objectFit="contain"
          style={{ maxHeight: 200, maxWidth: "100%" }}
        />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>€{product.price}</h6>
          <div
            className="btn btn-green mt-3  snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="/paintings/starry-night"
            data-item-description={product.description.description}
            data-item-name={product.title}
            data-item-image={product.image.fixed.src}
          >
            Aggiungi prodotto
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product2
