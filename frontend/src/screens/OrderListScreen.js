import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';
import {MdOutlinePendingActions} from "react-icons/md"
import {BiEdit} from "react-icons/bi"
import {CgDetailsMore} from "react-icons/cg"
import {BiUserCheck} from "react-icons/bi"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {BsCashCoin} from "react-icons/bs"
import {MdOutlineLocalAtm} from "react-icons/md"
import {GrDeliver} from "react-icons/gr"
import {FaBoxes} from "react-icons/fa"

export default function OrderListScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  console.log("fizza")
  console.log(orders)
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch, successDelete]);
  const deleteHandler = (order) => {
    // TODO: delete handler
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  const displayOrder= () => (
  
    orders.map((order) => (  
      order.user ?
      <tr key={order._id}>
        {/* <td>{order._id}</td> */}
        <td>{order.user.name}</td>
        <td>{order.createdAt.substring(0, 10)}</td>
        <td>{order.totalPrice.toFixed(2)}</td>
        <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
        <td>
          {order.isDelivered
            ? order.deliveredAt.substring(0, 10)
            : 'No'}
        </td>
        <td>
          <button
            type="button"
            className="small"
            onClick={() => {
              props.history.push(`/order/${order._id}`);
            }}
          >
          <CgDetailsMore/>  Details
          </button>
          <button
            type="button"
            className="small"
            onClick={() => deleteHandler(order)}
          >
           <BiEdit/> Delete
          </button>
        </td>
      </tr> 
      : ""
       
    )))
  
  return (
    <div>
      <h1 ><FaBoxes/> Orders</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th><BiUserCheck/> USER</th>
              <th><BsFillCalendarDateFill/> DATE</th>
              <th><BsCashCoin/> TOTAL</th>
              <th><MdOutlineLocalAtm/> PAID</th>
              <th><GrDeliver/> DELIVERED</th>
              <th>< MdOutlinePendingActions/> ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {
            displayOrder()
          }
          </tbody>
        </table>
      )}
    </div>
  );
}