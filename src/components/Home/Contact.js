import React from "react"

const Contact = props => {
  return (
    <section className="contact py-5">
      <h2 className="text-center mb-5 text-green">CONTACT US</h2>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            className="form"
            action="https://formspree.io/andrecasero@gmail.com"
            method="POST"
            target="_blank"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>

            {/* name */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>

            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="description"
                className="form-control"
                name="description"
                id="description"
                rows="5"
                placeholder="Insert your description"
              />
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-secondary btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
