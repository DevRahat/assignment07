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
  const handleDelete= (id) =>{
    const newCart=cart.filter(item=> item.id!=id);
    setCart(newCart);
  }


  
  return (
    <>
      
      <div className='main '>
      <div className='navbar'>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Recipe Garden</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
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

      {/* Banner section */}
      <div className='banner-container'> 

      </div>


        <h2 className='Body-headings text-center font-extrabold'>Our Recipes</h2>
        <p className='body-text text-center'>Have a look to all of our Recipes & chose your's fav one. <br></br> We are always at your service </p>
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
                cart.map((item,index)=>(
                  <div className='cart-info2'>
                    <p>{index+1}</p>
                      <h5>{item.recipe_name}</h5>
                      <h5>{item.preparing_time}</h5>
                      <h5>{item.calories}</h5>
                      <button onClick={()=>handleDelete(item.id)} className='btn-primary bg-green-500 border rounded-xl text-white'>Preparing</button>
                      
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
