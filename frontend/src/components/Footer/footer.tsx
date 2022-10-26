import { Link } from "react-router-dom"

const Footer = () => {

  const dropdownCategories: string[] = ['accessories', 'clothing']
  const mappingCategories = dropdownCategories.map((seachedWord,index) => <p key={index}>
    <Link to={`/search/${seachedWord}`} className="text-reset">{seachedWord.toLocaleUpperCase()} </Link>
  </p>)

  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section
          className="d-flex justify-content-center justify-content-lg-between p-2 ">

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Adidas
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  MORE PRODUCTS
                </h6>

                {mappingCategories}

              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">About us</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p> New York, NY 10012, US</p>
                <p>

                  info@example.com
                </p>
                <p> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/">Home</a>
        </div>
      </footer>
    </>
  )
}
export default Footer


//  <footer className="text-center text-white" >
//             <div className="container pt-4">
//             </div>
//             <div className="text-center text-dark p-3">
//                 © 2022 Copyright:
//                 <a className="text-dark" href="/"> home page</a>
//             </div>
//         </footer>