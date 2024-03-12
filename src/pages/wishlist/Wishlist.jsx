import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {

    const productId = useSelector(cart=>cart.ProductWishlist);
    console.log(productId);

  return (
    <div>
        This is wish list page.
        here you see liked products.
    </div>
  )
}

export default Wishlist