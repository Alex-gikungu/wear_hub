// // CartDetails.js
// import React from 'react';

// const CartDetails = ({ cartItems = [], totalPrice = 0, onGoBack }) => {
//   return (
//     <div className="cart-details">
//       <h2>Cart Items</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.image} alt={item.title} />
//             <div>
//               <p>Price: ${item.price}</p>
//             </div>
//           </div>
//         ))
//       )}
//       <div className="total-price">
//         <p>Total Price: ${totalPrice}</p>
//         <button onClick={onGoBack}>Go Back</button>
//       </div>
//     </div>
//   );
// };

// export default CartDetails;
