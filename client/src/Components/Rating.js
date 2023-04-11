import React, {useState, useImperativeHandle} from 'react';  
import { useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios'

function StarRating({
    count, 
    value, 
    inactiveColor='#ddd',
    size=24,
    activeColor='#f00', 
    onChange
    }) {

  const stars = Array.from({length: count}, () => '★')


  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:size, height:size, fontSize: size}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
      {/* {value} */}
    </div>
  )
}


const Rating = React.forwardRef(({outOf,count, question, list}, ref) => {
// function Rating({outOf,count, question, list},ref) {
  const navigate = useNavigate()

  const [showButton, setShowButton] = useState(true)
  const [track, setTrack ] = useState([])

  const [rating, setRating] = useState(0);
  const [description,setDescription] = useState(null)
  const [answerList, setAnswerList] = useState([])

  const [ratingList,setRatingList] = useState([])
  
  useEffect(() => {
    //  setRating(rating) 
    ratingList.length > 0 ? setRating(ratingList[count]) : setRating(0)
  }, [count])
  
  useEffect(()=>{
    track[count] && track[count].submit === true ? setShowButton(false) : setShowButton(true)
  })
  const onDescription=(e)=>{
    setDescription(e.target.value)
  }
  

  const handleChange = (value) => {
    setRating(value); 
  }

   const submitAnwser = ()=>{
    
      setAnswerList([...answerList, {question: question, rating: rating, description: description, marked: rating}])
      setTrack([...track, { count: count, submit: true }])
      setRatingList([...ratingList,rating])
    }


    useImperativeHandle(ref, 
      () => ({
          submitAnwser
    }))

 

  const storeData = ()=>{

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

    axios
    .post(`http://localhost:7000/api/session/add-session`,{
      survey: answerList
    },
    axiosConfig
    )
    .then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });


    navigate('/thanking')
  }
  
  return (<>
            <div>
              <div className="question-container">{question}</div>
        
               {outOf !==null ? <StarRating 
                count={outOf}
                size={40}
                value={rating}
                activeColor ={'#004488'}
                inactiveColor={'#ddd'}
                onChange={handleChange}  
                />:
                <input type='text' onChange={(e)=>onDescription(e)}/>}
              </div>
              
             {/* {showButton && <button onClick={submitAnwser} className='button shift'>Submit</button>} */}
              <button onClick={storeData} className='button add left'>StoreResult</button>
          </>
   
  )
})

export default Rating
 

