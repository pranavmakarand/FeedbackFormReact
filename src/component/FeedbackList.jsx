import React from 'react'
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackList() {

    const{feedback, isLoading} = useContext(FeedbackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feeback</p>
    }

    console.log('feedback hello')

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key = {item.id} item = {item}/>
            ))}
        </div>
    )
}
