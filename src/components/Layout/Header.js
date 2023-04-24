import mealsImage from "../../assets/mealsImg.jpeg";
import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
