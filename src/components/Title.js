import BreadCrumb from "./BreadCrumb";
const Title = () => {
    return(
        <>
         <div className="cart-title">
          <h1 className="my-acc-heading">My Account</h1>
          <ul className="collapsed">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  {/*
                   */}
                  <li>
                    <a href="#">My Account</a>
                  </li>
                </ul>
        </div>
        </>
    )
}

export default Title;