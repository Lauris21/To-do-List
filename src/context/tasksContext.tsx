import { createContext, useState } from 'react'
import { Todo, TasksContext, Props } from '../types/todo'

export const TaskContext = createContext<TasksContext>({} as TasksContext)

export const TasksProvider = ({ children }: Props) => {
    const [data, setData] = useState<Todo[]>([])
    return (
    <TaskContext.Provider value={{ data, setData }}>
      {children}
    </TaskContext.Provider>
    )
}
