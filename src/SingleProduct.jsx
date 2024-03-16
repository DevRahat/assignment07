import React from 'react';

const SingleProduct = ({product,handleCart}) => {
    
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                <img src={product.recipe_image} alt="Shoes" class="rounded-xl" />
                </figure>
            <div class="card-body items-center text-center">
            <h2 class="card-title">{product.recipe_name}</h2>
            <p>{product.short_description}</p>
             <hr />
             <div>
                 <ol>
                    <h4>Ingredients: 6</h4>
                     <li>1</li>
                 </ol>
                </div>
        <div className='time'>
            <p>{product.preparing_time}</p>
            <p>{product.calories}</p>
        </div>

    <div class="card-actions">
      <button onClick={(e) =>handleCart(product)} class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProduct;