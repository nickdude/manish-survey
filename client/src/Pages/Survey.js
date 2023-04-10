import React, { useState, useEffect } from 'react'
import { useNavigate} from "react-router-dom";
import Rating from '../Components/Rating';

const Questions= [
    {
        question: 'How satisfied are you with our products?',
        rating: '5',
        description: null
    },
    {
        question: 'How fair are the prices compared to similar retailers?',
        rating: '5',
        description: null
    },
    {
        question: 'How satisfied are you with the value for money of your purchase?',
        rating: '5',
        description: null
    },
    {
        question: 'On a scale of 1-10 how would you recommend us to your friends and family?',
        rating: '10',
        description: null
    },
    {
        question: 'What could we do to improve our service?',
        rating: null,
        description: 1
    },
]

const Survey = () => {
    const navigate = useNavigate()
    const [doneSurvey, setDoneSurvey ] = useState(false)
    const [count, setCount] = useState(0)
    const [list, setList] = useState(Questions)
    const [showTextBox, setShowTextBox] = useState(false)

    const [newQuestion, setNewQuestion] = useState('')
    const [newRating, setRating] = useState(null)
    const [newDescription, setNewDescription] = useState(null)

    useEffect(() => {    
        doneSurvey && navigate('/thanking')
       }, [doneSurvey])

    const prev = ()=>{
      count > 0 && setCount(count - 1)
    }
    const next = ()=>{
      count < list.length - 1 &&  setCount(count + 1)
    }
    const addTrigger = ()=>{
        setShowTextBox(true)
    }
    const onChangeQuestion = (e)=>{
        setNewQuestion(e.target.value)
    }
    const onChangeRating = (e)=>{
        // e.target.value === '' ? setRating(null) : 
        setRating(e.target.value)
    }
    const onChangeDescription = (e)=>{
      
        // e.target.value === '' ? setNewDescription(null):
         setNewDescription(e.target.value)
    }
    const add = ()=>{
        setList([...list,{question:newQuestion,rating: newRating,description: newDescription }])
        setShowTextBox(false)
    }
 
  return (
    <>
    <div className='upper-container'>
        <div className='queue'>
                {count+1}/{list.length}
        </div>
        <Rating outOf={list[count].rating} count={count} question={list[count].question}/>
        {!showTextBox && <button onClick={addTrigger} className='button add right'>Add Question</button>}
        {showTextBox && <input type='text' onChange={(e)=>onChangeQuestion(e)} placeholder="Enter Question"/>}
        {showTextBox && <input type='number' onChange={(e)=>onChangeRating(e)} placeholder="Enter Rating"/>}
        {showTextBox && <input type='number' onChange={(e)=>onChangeDescription(e)} placeholder="Enter 1 for description"/>}
        {showTextBox &&  <button onClick={add} className='button add right'>Add</button>}
    
    </div>
    <div className='lower-container'>
        <button onClick={prev} className='button'>Prev</button>
        <button onClick={next} className='button'>Next</button>
    </div>
    </>
   
  )
}

export default Survey