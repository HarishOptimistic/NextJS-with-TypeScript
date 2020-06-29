import React, { Component } from 'react';

class Orders extends Component <any, any> {

  render() {
    const { dataList, deleteOrder } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;