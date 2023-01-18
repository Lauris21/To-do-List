import Form from './components/Form';
import List from './components/List';
import { TasksProvider } from './context/tasksContext';

function App() {

  return (
    <TasksProvider>
    <div className="h-screen bg-zinc-900 text-yellow-50 flex justify-around items-center gap-x-3 gap-y-3 flex-wrap px-3 py-3 overflow-y-auto">
    <Form  />
    <List />
    </div>
    </TasksProvider>
   
  )
}

export default App
