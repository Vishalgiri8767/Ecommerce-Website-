import React, { useEffect, useState } from 'react'
import MyContext from "../data/myContext"
import { useHref } from 'react-router-dom';


import { QuerySnapshot, Timestamp, addDoc, doc, collection, deleteDoc, onSnapshot, orderBy, query, setDoc, getDocs, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
  
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  
  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor="rgb(17, 24, 39)"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  };

  const [products, setProducts] = useState({
    title:null,
    prize:null,
    imageUrl:null,
    category:null,
    description:null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })

    // ********************** Add Product Section  **********************
  const addProduct = async()=>{
    if(products.title==null || products.prize==null || products.imageUrl==null || products.category==null || products.description==null){
      return toast.error("please fill all fields");
    }

    const productRef = collection(fireDB, 'products');
    setLoading(true);
    try {
      
      await addDoc(productRef, products);
      toast.success("product added successfully");

      setTimeout(()=>{
        window.location.href = "/dashboard"
      },1000);

      getProductData();
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    } 
    
  }
  //  get products
  const getProductData = async()=>{
    //setLoading(true);
    try {
      const q = query(
        collection(fireDB,"products"),
        orderBy("time")
        //limit 5
      );
      const data = onSnapshot(q, (QuerySnapshot)=>{
        let productsArray = [];
        QuerySnapshot.forEach((doc) =>{
          productsArray.push({...doc.data(), id:doc.id});
          setProduct(productsArray);
          setLoading(false);
        });
        return ()=> data;
      })
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  
  //update product function.
  const editHandle = (item)=>{
    setProducts(item);
  }

  //update product
  const updateProduct = async(item)=>{
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("product update successful")
      
      setTimeout(()=>{
        window.location.href="/dashboard"
      },1000);

      getProductData();

      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteProduct = async(item)=>{
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted Successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  };
 
  const [order, setOrder] = useState([]);
    const getOrderData = async () => {
        setLoading(true);

        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });

            setOrder(ordersArray);
          //  console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    };

    const [user, setUser] = useState([]);

    const getUserData = async () => {
      setLoading(true)
      try {
        const result = await getDocs(collection(fireDB, "users"))
        const usersArray = [];
        result.forEach((doc) => {
          usersArray.push(doc.data());
          setLoading(false)
        });

        setUser(usersArray);
        //console.log(usersArray)
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
  
    useEffect(()=>{
      getProductData();
      getOrderData();
      getUserData();
    },[]);


  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product, editHandle, updateProduct, deleteProduct,order,user,searchkey,setSearchkey,filterType,setFilterType,filterPrice,setFilterPrice}}>
        {props.children}
    </MyContext.Provider>

  )
}

export default MyState