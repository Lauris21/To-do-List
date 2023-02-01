import { useContext, useEffect } from "react";
import { Todo } from "../types/todo";
import { TaskContext } from "../context/tasksContext";
import trash from "../../public/trash-bin-outline-svgrepo-com.svg";

let local: Todo[] = [];

const List: React.FunctionComponent = () => {
  const { data, setData } = useContext(TaskContext);

  local = JSON.parse(localStorage.getItem("tasks") || "[]");
  local.length ? local : (local = [JSON.parse(localStorage.getItem("tasks") || "[]")]);

  useEffect(() => {
    local = JSON.parse(localStorage.getItem("tasks") || "[]");
    local.length ? local : (local = [JSON.parse(localStorage.getItem("tasks") || "[]")]);
  }, [data]);

  const handleClick = (item: string) => {
    const index = local.findIndex((t) => t.id === item);
    setData(local.splice(index, 1));
    localStorage.setItem("tasks", JSON.stringify(local));
    local = JSON.parse(localStorage.getItem("tasks") || "[]");
  };

  return (
    <div
      id="tasksList"
      className="flex flex-col gap-3 bg-zinc-700 max-w-md w-full p-10 overflow-y-auto"
    >
      {local.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-zinc-800 mb-1 p-4 rounded-lg hover:bg-zinc-600 hover:cursor-pointer gap-2"
        >
          <header className="flex justify-between item-center">
            <h2 className="text-lg">{item.task}</h2>
            <button
              onClick={() => handleClick(item.id)}
              className="bg-red-500 px-1 py-1 rounded-md"
            >
              <img src={trash} alt="trash icon" className="w-5" />
            </button>
          </header>
          <p className="text-gray-400 text-xs">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
