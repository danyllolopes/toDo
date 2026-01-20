import Badge from "../components/badge"
import Text from "../components/text"
import useTasks from "../hooks/use-tasks"

const TaskSummary = () => {
    const { taskCount, concludedTaskCount, isLoadingTasks } = useTasks();

    return (
        <>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
                <Badge variant='secondary' loading={isLoadingTasks}>{taskCount}</Badge>
            </div>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
                <Badge variant='primary' loading={isLoadingTasks}>{concludedTaskCount} de {taskCount}</Badge>
            </div>
        </>
    )
}

export default TaskSummary