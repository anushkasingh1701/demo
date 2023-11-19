
const Sidebar = () => {
    return(
        <section id="sidebar">
            <h3 className="my-acc-title"><b>My Account</b></h3>
            <ul class="side-menu top">
              <li class="active">
                <a href="/Userpage">
                  <i class="bx bxs-dashboard"></i>
                  <span class="text">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/Orders">
                  <i class="bx bxs-shopping-bag-alt"></i>
                  <span class="text">Orders</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-doughnut-chart"></i>
                  <span class="text">Addresses</span>
                </a>
              </li>
              <li>
                <a href="/Accountdetails">
                  <i class="bx bxs-message-dots"></i>
                  <span class="text">Account details</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-group"></i>
                  <span class="text">Logout</span>
                </a>
              </li>
            </ul>
          </section>
    )
}

export default Sidebar;