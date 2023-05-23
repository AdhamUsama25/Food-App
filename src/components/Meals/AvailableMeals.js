import styles from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Burger',
        description: 'Juicy beef patty with cheese and toppings',
        price: 12.99,
    },
    {
        id: 'm3',
        name: 'Pasta',
        description: 'Italian pasta with rich tomato sauce',
        price: 15.99,
    },
    {
        id: 'm4',
        name: 'Salad',
        description: 'Fresh greens with assorted vegetables',
        price: 9.99,
    },
    {
        id: 'm5',
        name: 'Pizza',
        description: 'Delicious pizza with various toppings',
        price: 18.99,
    },
    {
        id: 'm6',
        name: 'Steak',
        description: 'Grilled steak with a side of mashed potatoes',
        price: 29.99,
    },
    {
        id: 'm7',
        name: 'Chicken Curry',
        description: 'Spicy chicken curry served with rice',
        price: 13.99,
    },
    {
        id: 'm8',
        name: 'Fish and Chips',
        description: 'Classic fish and chips with tartar sauce',
        price: 11.99,
    },
    {
        id: 'm9',
        name: 'Taco',
        description: 'Tortilla filled with seasoned meat and toppings',
        price: 8.99,
    },
    {
        id: 'm10',
        name: 'Sushi Bowl',
        description: 'Deconstructed sushi in a bowl',
        price: 16.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (<MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return <section className={styles.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;