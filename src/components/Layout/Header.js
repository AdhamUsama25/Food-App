import React, {Fragment} from "react";
import mealsImage from "../../assets/meals.jpg"
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Food Order App</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>

            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table fall of delicious food."/>
            </div>
        </Fragment>
    );
};

export default Header