import React, { useState } from "react"
import Img from "gatsby-image/withIEPolyfill"

const getCategories = prod => {
  let tempProd = prod.map(prod => {
    return prod.node.category
  })
  let tempCategory = new Set(tempProd)
  let categoryList = Array.from(tempCategory)
  categoryList = ["Tutti", ...categoryList]
  return categoryList
}

const Product = props => {
  const [product, setProduct] = useState({
    listaProdotti: props.items.edges,
    prodotti: props.items.edges,
    categorie: getCategories(props.items.edges),
  })

  const mostraProdotti = category => {
    let tempProdotti = [...product.listaProdotti]
    if (category === "Tutti") {
      setProduct(prev => {
        return { ...prev, prodotti: tempProdotti }
      })
    } else {
      let catProdotto = tempProdotti.filter(
        ({ node }) => node.category === category
      )
      setProduct(prev => {
        return { ...prev, prodotti: catProdotto }
      })
    }
  }

  if (product.prodotti.length > 0) {
    return (
      <section className="tosi-shop-1">
        <div className="container prodotti-section">
          <h5 className="text-center mb-5 text-green">VETRINA TEST</h5>

          {/* categorie */}
          <div className="row mb-5">
            <div className="col-12 mx-auto text-center">
              {product.categorie.map((categoria, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-transparent text-capitalize m-3"
                    onClick={() => {
                      mostraProdotti(categoria)
                    }}
                  >
                    {categoria}
                  </button>
                )
              })}
            </div>
          </div>
          {/* prodotti */}
          <div className="row prodotti-container">
            {product.prodotti.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="scheda-prodotto col-11 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} objectFit="contain" />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <small>
                        <h6 className="mb-0 text-green">{node.title}</h6>
                      </small>
                      <small>
                        <h6 className="mb-0 text-green">€{node.price}</h6>
                      </small>
                    </div>
                    <p className="text-muted product-description">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      className="btn btn-green mt-3 snipcart-add-item"
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="/paintings/starry-night"
                      data-item-description={node.description.description}
                      data-item-image={node.image.fixed.src}
                      data-item-name={node.title}
                    >
                      Aggiungi prodotto
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return <div>NO PRODOTTI</div>
  }
}

export default Product
