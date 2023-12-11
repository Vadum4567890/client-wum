import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/user/userSlice";

import styles from "../../styles/Cart.module.css";
import TRASH from "../../images/additional/Trash.svg";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
    console.log("Total:", sumBy(cart));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const sumBy = (array) => {
    return array.reduce((total, currentItem) => {
      const { quantity, price } = currentItem;
      // Use nullish coalescing to provide a default value for price
      const prs = (price ?? '').replace(/\s/g, '');
      
      // Multiply quantity and price, and accumulate the result
      total += parseInt(quantity) * parseInt(prs);
      
      return total;
    }, 0);
  };

  const calculateTotalPrice = (item) => {
    const { quantity, price } = item;
    const prs = (price ?? '').replace(/\s/g, '');
    let total = parseInt(quantity) * parseInt(prs);
    return total;
  };



  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your cart</h2>

      {!cart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => {
              const { title, category, imageSrc, price, id, quantity } = item;
              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    ><img src={imageSrc} alt="" /></div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    {/* <div className={styles.category}>{category.name}</div> */}
                  </div>

                  <div className={styles.price}>{calculateTotalPrice}</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                        />
                      </svg>
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                        />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.total}>{calculateTotalPrice(item)}$</div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                  <img src={TRASH} alt="trash" />
                  
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <div className={styles.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart) }$
              </span>
            </div>

            <button className={styles.proceed}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;