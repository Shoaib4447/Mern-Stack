import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product/Product';

const products = [
    {id:1, name:'shoes', description:'Running Shoes', price:'$5'},
    {id:2, name:'shirt', description:'Beach Shirts', price:'$12'}
]

const Products = () => {
  return (
    //main kind of div
    <main> 
      {/* <Grid container justify='center' spacing={4}>
        {products.map((product)=>{
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                <Product product={product}/>
            </Grid>
        })}
      </Grid> */}

     <div className="grid justify-content-center gap-4">
        {products.map((product)=>{
          <div className="grid col-xs-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Product product={product}/>
          </div>
        })}
     </div>
    </main>
  )
}

export default Products
