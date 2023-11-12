
import './App.css';
import { MyMeals } from './MyMeals';
import { useEffect, useState } from 'react';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';

function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMeal)
  }, []);

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }
const onFormSubmit = (e) =>{
  e.preventDefault();
}

const deleteAllMeals = () => {
const deleteMeals = [];
setMeal(deleteMeals)
}


  return (
    <div className="App">
<form onSubmit={onFormSubmit}>
      <div className="container">
      <h1>MEAL PLAN</h1>
      <input type="text" 
      placeholder="Add a meal" 
      value ={title} 
      onChange={(e) => setTitle(e.target.value)}/>

      <button disabled= {!title} 
      onClick={editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) : () => addMeal(title, setTitle, setMeal)}>
      {editing ? "Edit" : "Add"}</button>

     {myMeal.map((meal) => <MyMeals text={meal.title} key={meal._id} 
    updatingInInput ={() => updatingInInput(meal._id, meal.title)} 
    deleteMeal={() => deleteMeal(meal._id, setMeal)}/>
    )} 
<button onClick={deleteAllMeals}>Delete all</button>
      </div>
      </form>
    </div>
  );
}

export default App;
