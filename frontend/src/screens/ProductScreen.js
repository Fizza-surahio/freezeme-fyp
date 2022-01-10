/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {GiReturnArrow} from "react-icons/gi";
import {BsFillCartCheckFill} from "react-icons/bs"
import {MdProductionQuantityLimits} from "react-icons/md"
import {GrStatusUnknown} from "react-icons/gr"
import {CgUnavailable} from "react-icons/cg"
import {MdEventAvailable} from "react-icons/md"
import {ImPriceTag} from "react-icons/im"
import {MdDescription} from "react-icons/md"

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
 
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/"><button
          className="primary "><GiReturnArrow/> Back to result</button></Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
               
                <li> <ImPriceTag/> Price : ${product.price}</li>
                <li> <MdDescription/> Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  
                  <li>
                    <div className="row">
                      <div><ImPriceTag/> Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div> <GrStatusUnknown/> Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success"> <MdEventAvailable/> In Stock</span>
                        ) : (
                          <span className="danger"> <CgUnavailable/> Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div><MdProductionQuantityLimits/> Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          <BsFillCartCheckFill/> Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}