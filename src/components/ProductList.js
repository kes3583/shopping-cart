import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductComponents } from '.';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction';

const productListurl = 'https://fakestoreapi.com/products'

const ProductList = () => {
  const productList = useSelector(state => state.products.data)
  const dispatch = useDispatch()
  console.log('productList 1:>> ', productList);

  useEffect(() => {
    let ignore = false; 

    async function fetchData() {
      try {
        const result = await axios.get(productListurl)
        .catch((error) => {
          if (error.response) {
              // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
            else if (error.request) {
              // 요청이 이루어 졌으나 응답을 받지 못했습니다.
              // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
              // Node.js의 http.ClientRequest 인스턴스입니다.
              console.log(error.request);
            }
            else {
              // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
              console.log('Error', error.message);
            }
            console.log(error.config);
        
        })
        if (!ignore) {
          console.log('result',result.data);
          dispatch(setProducts(result.data));
        }
      } catch (error) {
        console.log(error)
      }      
    }

    fetchData();
    return () => { ignore = true; }
  }, [dispatch]);
 
  return(
       <div className="ui grid container">
        <ProductComponents />
      </div>
  )
}

export { ProductList };