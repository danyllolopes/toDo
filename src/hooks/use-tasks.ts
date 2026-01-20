import useLocalStorage from "use-local-storage"
import { TASK_KEY, type Task } from "../models/task"
import { useEffect, useState } from "react";
import { delay } from "../helpers/util";

const useTasks = () => {
  const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, []);
  const [tasks, setTask] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  const fetchTasks = async () => {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }
    setTask(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData])

  return {
    tasks,
    taskCount: tasks.length,
    concludedTaskCount: tasks.filter(task => task.concluded).length,
    isLoadingTasks,
  }
}

export default useTasks