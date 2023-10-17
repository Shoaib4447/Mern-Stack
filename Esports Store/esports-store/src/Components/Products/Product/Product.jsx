import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/core';
import { AddShoppingCart } from '@mui/icons-material';

import useStyles from './Styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    // <Card className={classes.root}>
    //   <CardMedia className={classes.media} image={product.media.source} title={product.name} />
    //   <CardContent>
    //     <div className={classes.cardContent}>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {product.name}
    //       </Typography>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         ${product.price.formatted}
    //       </Typography>
    //     </div>
    //     <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
    //   </CardContent>
    //   <CardActions disableSpacing className={classes.cardActions}>
    //     <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
    //       <AddShoppingCart />
    //     </IconButton>
    //   </CardActions>
    // </Card>

    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="Product image" />
      <div className="card-body d-flex">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">$5</p>
      </div>
      <p className='card-text'></p>
    </div>

  );
};

export default Product;
