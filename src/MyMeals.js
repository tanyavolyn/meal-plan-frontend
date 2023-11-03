import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export const MyMeals = ({text, updatingInInput, deleteMeal}) => {
    return(
        <div className='meal'>
            <p>My Meal</p>
            <AiOutlineEdit onClick={updatingInInput}/>
            <AiOutlineDelete onClick={deleteMeal}/>
        </div>
    )
}
    
    
    
    
    
    
    


