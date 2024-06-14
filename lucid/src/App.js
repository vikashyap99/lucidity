

import Header from './Components/Header/Header';
import Table from './Components/Table/Table';
import Widget from './Components/Widget/Widget';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [products, setProducts] = useState([])
  const [showProducts, setShowProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [outOfStock, setOutOfStock] = useState(0)
  const [totalCategory, setTotalCategory] = useState(0)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {

    fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory')
    .then((res) => 
       res.json()
    )
    .then((res) => {
      setProducts(res)
      setShowProducts(res)
    })

  }, [])

  useEffect(() => {

    let tProducts = 0
    let tValue = 0
    let oos = 0
    let tCategory = []

    products.forEach((product) => {
      tProducts += product.quantity
      tValue += product.quantity * parseInt(product.price.substring(1))
      oos += product.quantity === 0 ? 1 : 0
      if(!tCategory.includes(product.category)){
        tCategory.push(product.category)
      }
    })

    setTotalProducts(tProducts)
    setTotalValue(tValue)
    setOutOfStock(oos)
    setTotalCategory(tCategory.length)

  },[products])

  return (
    <div className="App">
      <Header
        setIsUser={setIsUser}
       />

      <Widget 
      totalProducts={totalProducts}
      totalValue={totalValue}
      outOfStock={outOfStock}
      totalCategory={totalCategory}
      />

      <Table 
      products={products}
      setProducts={setProducts}
      isUser={isUser}
      showProducts={showProducts}
      setShowProducts={setShowProducts}
      />
    </div>
  );
}

export default App;
