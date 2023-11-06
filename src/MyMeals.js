import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export const MyMeals = ({text, updatingInInput, deleteMeal}) => {
    return(
        <div className='meal'>
            <p>{text}</p>
            <AiOutlineEdit className="btn" onClick={updatingInInput}/>
            <AiOutlineDelete className="btn" onClick={deleteMeal}/>
        </div>
    )
}
    
    
    
    
    
    
    


