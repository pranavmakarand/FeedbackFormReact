import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedBackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const[text, setText] = useState('')
    const[btnDisabled, setBtnDisabled] = useState(true)
    const[message, setMessage] = useState('')
    const[rating, setRating] = useState(10)
    const{addFeedback, feedbackEdit, updateFeedback} = useContext(FeedBackContext)

    // useEffect(()=> {
    //     if(feedbackEdit.edit === true) {
    //         setBtnDisabled(false)
    //         setText(feedbackEdit.item.text)
    //         setRating(feedbackEdit.item.rating)
    //     }
    // }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(true)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback= {
                text: text,
                rating: rating
            }

            console.log(newFeedback.rating)

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }
  return (
  <Card>
    <form action ="true" onSubmit={handleSubmit}>
        <h2>
            How would you rate your service with us ?
            <RatingSelect select={(rating) => setRating(rating)} />
            {/*@todo - rating select component */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                <Button type='submit' isDisabled={btnDisabled} version='secondary' >Send</Button>
            </div>
        </h2>
        {message && <div className='message'>{message}</div>}
    </form>
  </Card>
  )
}

export default FeedbackForm