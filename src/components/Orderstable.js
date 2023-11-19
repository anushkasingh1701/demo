import Sidebar from "./Sidebar";
// import "../css/ordertablecss/bootstrap.min.css";
// import "../css/ordertablecss/orderstyle.module.css"
import "../css/Userpage.css"

const Orderstable = () => {
  return (
       
        <div className="row" id="ordertable">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ORDER</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>TOTAL</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1001</th>
                    <td>June 23, 2023</td>
                    <td>
                        <a href="#" className="btn btn-success">
                        Progress
                      </a>
                    </td>
                    <td>$3000</td>
                    <td>
                      <a href="#" className="btn btn-view">
                        view
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1001</th>
                    <td>June 23, 2023</td>
                    <td>
                    <a href="#" className="btn btn-warning">
                        Exchange
                      </a>
                    </td>
                    <td>$3000</td>
                    <td>
                      <a href="#" className="btn btn-view">
                        view
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1001</th>
                    <td>June 23, 2023</td>
                    <td><a href="#" className="btn btn-danger">
                        Cancelled
                      </a></td>
                    <td>$3000</td>
                   
                    <td>
                      <a href="#" className="btn btn-view">
                        view
                      </a>
                    </td>
                  </tr>
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
    
  );
};

export default Orderstable;
