import axios from 'axios';

//GET
const getAllMeals = (setMeal) => {
    axios.get("http://localhost:7000").then(({data}) => {console.log(data)
    setMeal(data)
})
}
 //POST
const addMeal = (title, setTitle, setMeal) => {
    axios.post("http://localhost:7000/saveMeals", {title}).then((data) => {
        console.log(data);
            setTitle("");
            getAllMeals(setMeal)
    })
}
//EDIT
const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.put("http://localhost:7000/editMeal", {_id: mealId, title}).then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
} 
//DELETE
const deleteMeal = (_id, setMeal) => {
    axios.post("http://localhost:7000/deleteMeal", { _id }).then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}
//DELETE ALL
const deleteAll = (setMeal) => {
    axios.post('http://localhost:7000/deleteAll')
    .then(() => {
            getAllMeals(setMeal);
        });
  }

export { getAllMeals, addMeal, editMeal, deleteMeal, deleteAll }