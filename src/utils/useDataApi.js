// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productAction';
 
const useSelectedDataApi = (initialUrl, initialData) => {
  const dispatch = useDispatch()
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await axios(url);
 
        setData(result.data);
        dispatch(selectedProduct(result.data));
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }; 
    fetchData();

    return () => {
      dispatch(removeSelectedProduct())
    };

  }, [dispatch, url]);
 
  return [{ data, isLoading, isError }, setUrl];
};

export { useSelectedDataApi };