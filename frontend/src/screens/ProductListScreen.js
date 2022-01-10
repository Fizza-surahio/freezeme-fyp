import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createProduct,   deleteProduct, listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_CREATE_RESET  ,PRODUCT_DELETE_RESET } from '../constants/productConstants';
import {GiMeltingIceCube} from "react-icons/gi"
import {MdCreateNewFolder} from "react-icons/md"
import {MdOutlineDriveFileRenameOutline} from "react-icons/md"
import {MdOutlinePriceChange} from "react-icons/md"
import {BiCategory} from "react-icons/bi"
import {MdOutlinePendingActions} from "react-icons/md"
import {RiDeleteBin5Line} from "react-icons/ri"
import {BiEdit} from "react-icons/bi"

export default function ProductListScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/product/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts());
  }, [createdProduct, dispatch, props.history, successCreate, successDelete]);

  const deleteHandler = (product) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(product._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduct());
  };
  return (
    <div>
       <div className="row">
        <h1><GiMeltingIceCube/> Products</h1>
        <button type="button" className="primary" onClick={createHandler}>
         <MdCreateNewFolder/> Create Product
        </button>
      </div>
      <div className='style'>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th> <MdOutlineDriveFileRenameOutline/> NAME</th>
              <th><MdOutlinePriceChange/>PRICE</th>
              <th><BiCategory/>CATEGORY</th>
              <th><MdOutlinePendingActions/>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                {/* <td>{product._id}</td> */}
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/product/${product._id}/edit`)
                    }
                  ><BiEdit/>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                   <RiDeleteBin5Line/> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
}