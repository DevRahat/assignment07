import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts]=useState([]);
  const [cart,setCart]=useState([]);


  
  useEffect(() =>{
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => setProducts(data));
  },[])

  const handleCart=(p) =>{
    const isExist=cart.find(pd=>pd.recipe_id==p.recipe_id);
    if(!isExist){
      setCart([...cart,p]);
    }
    else{
      alert("Already Exist");
    }
  }
  console.log(products);
  return (
    <>
      
      <div className='main'>
        <div>
        <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Recipe Garden</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

        </div>

      <div className='main-container'>
          <div className='cards-container'>
          {
            products.map(pd=> <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>)
          }
        </div>
          <div className='cart-container'>
              <div className='cook'>
              <h2>Want to cook: </h2>
              <hr />
              
              <div className='cart-info'>
              {
                cart.map((item)=>(
                  <div className='cart-info2'>
                      <h5>{item.recipe_name}</h5>
                      <h5>{item.preparing_time}</h5>
                      <h5>{item.calories}</h5>
                      <button className='btn-primary bg-green-500 border rounded-xl text-white'>Preparing</button>
                      
                  </div>
                ))}
              </div>
          <div className='cooking'>
          <h2>Want to cook: </h2>
              <hr />
             
          </div>
              </div>
          </div>
          
      </div>

      </div>

    </>
  )
}

export default App
