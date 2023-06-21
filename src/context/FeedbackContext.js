import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedBackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const[feedback, setFeedback] = useState([{
        id:1,
        text: 'This item is from context',
        rating: 10
    }])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
        })

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete ?'))
          setFeedback(feedback.filter((item) => item.id !== id))
      }

      //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //update feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = (id, updItem) => {
        console.log(id, updItem)
        // setFeedback(feedback.map((item) => item.id === id ? {... item, ...updItem} : item))
    }
    
    return <FeedBackContext.Provider value = {{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback,}}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext