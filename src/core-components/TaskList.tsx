import Button from '../components/button'
import PlusIcon from '../assets/icons/plus-regular.svg?react';
import TaskItem from './TaskItem';
import useTasks from '../hooks/use-tasks';
import useTask from '../hooks/use-task';
import { TaskState, type Task } from '../models/task';

const TaskList = () => {
    const { tasks, isLoadingTasks } = useTasks();
    const { prepareTask } = useTask();

    return (
        <>
            <section>
                <Button icon={PlusIcon} variant='primary' className='w-full' disabled={tasks.some(task => task.state === TaskState.Creating) || isLoadingTasks} onClick={prepareTask}>Nova tarefa</Button>
            </section>
            <section className='space-y-2'>
                {!isLoadingTasks &&
                    tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))
                }
                {isLoadingTasks && <>
                    <TaskItem task={{} as Task} isLoading={isLoadingTasks} />
                    <TaskItem task={{} as Task} isLoading={isLoadingTasks} />
                    <TaskItem task={{} as Task} isLoading={isLoadingTasks} />
                </>}
            </section>
        </>
    )
}

export default TaskList