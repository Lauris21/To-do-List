import { useState, useContext } from 'react'
import { Todo, HandleFunction } from '../types/todo'
import { TaskContext } from '../context/tasksContext'
import { v4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

let localSt: Todo[] = []

const Form: React.FunctionComponent = () => {
  const { setData } = useContext(TaskContext)

  const [task, setTask] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleChange: HandleFunction = (e) => {
    setTask(e.target.value)
  }

  const handleOnChange: HandleFunction = (e) => {
    setDescription(e.target.value)
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.reset()

    if (task.trim().length === 0) {
      toast.error('The task is empty!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      return
    }

    const todo: Todo = {
      task,
      description,
      id: v4(),
    }

    localSt = JSON.parse(localStorage.getItem("tasks") || "[]");

    localStorage.clear()

    localSt.push(todo)

    localStorage.setItem("tasks", JSON.stringify(localSt));
    setData(localSt)
    setTask('')
    toast.success('The task is empty!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <form
          id="taskForm"
          className="bg-zinc-700 p-10 rounded-md max-w-md"
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="bg-zinc-800 px-1 py-2 w-full rounded-md mb-2"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label htmlFor="description" className="block">
            Description:
          </label>
          <textarea
            name="description"
            className="bg-zinc-800 px-1 py-5 w-full rounded-md mb-2"
            onChange={(e) => {
              handleOnChange(e)
            }}
          ></textarea>
          <button
            className="bg-purple-400 px-3 py-1 rounded-md hover:bg-purple-300"
            type="submit"
          >
            SAVE
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  )
}

export default Form
