import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/user/userSlice";

import styles from "../../styles/Cart.module.css";
import TRASH from "../../images/additional/Trash.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import PLUS from "../../images/additional/plus.svg";
import MINUS from "../../images/additional/minus.svg";


const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const sumBy = (array) => {
    return array.reduce((total, currentItem) => {
      const { quantity, price } = currentItem;
      total += parseInt(quantity) * parseInt(price);
      return total;
    }, 0);
  };

  const calculateTotalPrice = (item) => {
    const { quantity, price } = item;
    const prs = price
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
              const { name, imagePath, uploadedFiles, id, quantity } = item;
              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    ><img src={imagePath || uploadedFiles.filePath} alt="" /></div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{name}</h3>
                  </div>

                  <div className={styles.price}>{calculateTotalPrice(item)}</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <img className="icon" src={MINUS} alt="minus" />
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <img className="icon" src={PLUS} alt="plus" />
                    </div>
                  </div> 

                  <div className={styles.total}>{calculateTotalPrice(item)}₴</div>

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
            <div className={styles.totals}>
              <p>TOTAL PRICE:{" "}</p>
              <span>
                {sumBy(cart) }₴
              </span>
            </div>

            <button className={styles.proceed}><Link to={ROUTES.CHECKOUT}>Proceed to checkout</Link></button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;