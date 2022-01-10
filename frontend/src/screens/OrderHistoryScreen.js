import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {FaHistory} from "react-icons/fa"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {BsCashCoin} from "react-icons/bs"
import {MdOutlineLocalAtm} from "react-icons/md"
import {GrDeliver} from "react-icons/gr"
import {CgDetailsMore} from "react-icons/cg"
import {MdOutlinePendingActions} from "react-icons/md"

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div>
     <center><h1><FaHistory/> Order History</h1></center>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th> <BsFillCalendarDateFill/> DATE</th>
              <th><BsCashCoin/> TOTAL</th>
              <th><MdOutlineLocalAtm/> PAID</th>
              <th><GrDeliver/> DELIVERED</th>
              <th><MdOutlinePendingActions/> ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                {/* <td>{order._id}</td> */}
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt?.split("T")[0] : 'No'}</td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}