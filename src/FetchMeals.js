import axios from 'axios';

//GET
const getAllMeals = (setMeal) => {
    axios.get("https://meal-plan-99yy.onrender.com").then(({data}) => {console.log(data)
    setMeal(data)
})
}
 //POST
const addMeal = (title, setTitle, setMeal) => {
    axios.post("https://meal-plan-99yy.onrender.com/saveMeals", {title}).then((data) => {
        console.log(data);
            setTitle("");
            getAllMeals(setMeal)
    })
}
//EDIT
const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.put("https://meal-plan-99yy.onrender.com/editMeal", {_id: mealId, title}).then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
} 
//DELETE
const deleteMeal = (_id, setMeal) => {
    axios.post("https://meal-plan-99yy.onrender.com/deleteMeal", { _id }).then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}
//DELETE ALL
const deleteAll = (setMeal) => {
    axios.post('https://meal-plan-99yy.onrender.com/deleteAll')
    .then(() => {
            getAllMeals(setMeal);
        });
  }

export { getAllMeals, addMeal, editMeal, deleteMeal, deleteAll }