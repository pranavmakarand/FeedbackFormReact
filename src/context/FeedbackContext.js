import {createContext, useEffect, useState} from 'react'

const FeedBackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)

    const[feedback, setFeedback] = useState([{
        id:1,
        text: 'This item is from context',
        rating: 10
    }])

    useEffect(() => {
        fetchFeedback()
    },[])

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data);
        setIsLoading(false);
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
        })

    const deleteFeedback = async(id) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
        }
          setFeedback(feedback.filter((item) => item.id !== id))
      }

      //add feedback
    const addFeedback = async (newFeedback) => {

        const response = await fetch('/feedback', {
            method: 'Post', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
    }

    //update feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch('/feedback/${id}', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data } : item)))
        // setFeedback(feedback.map((item) => item.id === id ? {... item, ...updItem} : item))
    }
    
    return <FeedBackContext.Provider value = {{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback,isLoading}}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext