import React from "react"
import Img from "gatsby-image"

const Product2 = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img
          fluid={product.image.fluid}
          className="card-img-top"
          style={{
            height: 150,
          }}
        />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>€{product.price}</h6>
          <button
            className="btn btn-secondary mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="/paintings/starry-night"
            data-item-description={product.description.description}
            data-item-image={product.image.fluid.src}
            data-item-name={product.title}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product2
