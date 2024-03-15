import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts]=useState([]);
  
  useEffect(() =>{
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => setProducts(data));
  },[])
  console.log(products);
  return (
    <>
      
      
      <div className='main-container'>
          <div className='cards-container'>
              {/* <div className="card">
                <img src="https://as1.ftcdn.net/v2/jpg/05/85/96/36/1000_F_585963607_xQsj0pNYSRoT4dzKFXqJyUaj5TrMcLY9.jpg" alt="" />
                <h1>Test name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr />
                <div>
                  <ol>
                    <h1>Ingredients: 6</h1>
                    <li>1</li>
                  </ol>
                </div>
                <div className="card-footer">
                  <h1>520 $</h1>
                  <button className='add-btn'>Add to cart</button>
                </div>
              </div> */}

{
  products.map(pd=> <SingleProduct product={pd}></SingleProduct>)
}





          </div>
          <div className='cart-container'>
              <div className='cook'>
                  <h3>Want to cook: </h3>
                  <hr />
                  <div className='cook-container'>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                  </div>
              </div>
              <div className='cooking:'>
                  <h3>Currently cooking:</h3>
                  <div className='cook-container'>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
