const Account = () => {
    return(
        <div className="acc-content">
        <p>
          Hello <b>username</b>(not <b>username</b> Log out)
        </p>
        <br />
        <p>
          From your account dashboard you can view your recent orders,
          manage your shipping and billing addresses, and edit your password
          and account details.
        </p>
        <div className="dashboard-links">
          <ul class="box-info">
            <li>
              <ion-icon name="reader-outline" size="large"></ion-icon>
              <span class="text">
                <p>Orders</p>
              </span>
            </li>
            <li>
            <ion-icon name="location-outline" size="large"></ion-icon>
              <span class="text">
                <p>Addresses</p>
              </span>
            </li>
            <li>
            <ion-icon name="person-circle-outline" size="large"></ion-icon>
              <span class="text">
                <p>Account details</p>
              </span>
            </li>
            <li>
            <ion-icon name="log-out-outline" size="large"></ion-icon>
              <span class="text">
                <p>Logout</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Account;