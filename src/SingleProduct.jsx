import React from 'react';

const SingleProduct = ({product}) => {
    console.log(product);
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                <img src="https://as1.ftcdn.net/v2/jpg/05/85/96/36/1000_F_585963607_xQsj0pNYSRoT4dzKFXqJyUaj5TrMcLY9.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
            <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
             <hr />
             <div>
                 <ol>
                    <h4>Ingredients: 6</h4>
                     <li>1</li>
                 </ol>
                </div>
        <div className='time'>
            <p>time</p>
            <p>caloties</p>
        </div>

    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProduct;