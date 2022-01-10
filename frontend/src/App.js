import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import DashboardScreen from './screens/DashboardScreen';
import AboutScreen from './screens/AboutScreen';
import TeamScreen from './screens/TeamScreen';
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import {FaSignOutAlt} from "react-icons/fa";
import {GoDashboard} from "react-icons/go";
import { FaCubes } from "react-icons/fa";
import {FaShoppingBasket } from "react-icons/fa";
import {FaUsers } from "react-icons/fa";
import { BsChatRightTextFill } from "react-icons/bs";
import {FaBuilding} from "react-icons/fa";
import {RiAdminFill} from "react-icons/ri";
import {GiTeamIdea} from "react-icons/gi";
import {FaUserCheck} from "react-icons/fa";
import {FaSignInAlt} from "react-icons/fa";
import { GiCubes } from "react-icons/gi";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
             <GiCubes/> FreezeME
            </Link>
          </div>
          <div>
             <Link to="/cart">
            <FaShoppingCart/> Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#"><FaUserCheck/>
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile"><FaUserAlt/>UserProfile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory"><FaHistory/>History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      <FaSignOutAlt/>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin"><FaSignInAlt/>Sign In</Link>
            )}
            
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin"> <RiAdminFill/>
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">
                      <GoDashboard/>Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist"><FaCubes/>Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist"><FaShoppingBasket/>Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist"><FaUsers/>Users</Link>
                  </li>
                  <li>
                    <Link to="/support"><BsChatRightTextFill/>Support</Link>
                  </li>
                </ul>
              </div>
            )}
             <Link to="/about"> <FaBuilding/> About</Link>
             <Link to="/team"> <GiTeamIdea/>Team </Link>
              </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/about" component={AboutScreen}></Route>
          <Route path="/team" component={TeamScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          
          <AdminRoute path="/dashboard" component={DashboardScreen}></AdminRoute>
          <AdminRoute path="/productlist" component={ProductListScreen} ></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderListScreen}></AdminRoute>
          <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div>{' '}
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;