const OrderStatusButtonWithLogic = ({ status }) => {
    const styles = {
      order__info__button: {
        background: "orange",
      },
    };
  
    const getBackgroundColor = (status) => {
      switch (status) {
        case "В ОБРОБЦІ":
          return "#F79E1B";
        case "Очікує доставку":
          return "#a32527";
        case "Доставлено":
          return "#A41F02";
        default:
          return "orange";
      }
    };
  
    return (
      <div className={styles.order__info__button}>
        <button style={{backgroundColor: getBackgroundColor(status)}}>{status}</button>
      </div>
    );
  };
  export default OrderStatusButtonWithLogic;