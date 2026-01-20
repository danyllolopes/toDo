import React, { useState } from 'react';
import { cx } from 'class-variance-authority'
import ButtonIcon from '../components/button-icon';
import Card from '../components/card';
import InputCheckbox from '../components/input-checkbox';
import Input from '../components/input';
import Text from '../components/text';
import Trash from '../assets/icons/trash-regular.svg?react';
import Pencil from '../assets/icons/pencil-simple-regular.svg?react';
import XIcon from '../assets/icons/x-regular.svg?react';
import CheckIcon from '../assets/icons/check-regular.svg?react';
import { TaskState, type Task } from '../models/task';
import useTask from '../hooks/use-task';
import Skeleton from '../components/skeleton';

interface TaskItemProps {
    task: Task;
    isLoading?: boolean;
}

const TaskItem = ({ task, isLoading }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);
    const [taskTitle, setTaskTitle] = useState(task.title || '');
    const { updateTask, updateTaskStatus, deleteTask, isUpdatingTask, isDeletingTask } = useTask();

    const handleEditTask = () => {
        setIsEditing(true);
    }

    const handleExitEditTask = () => {
        if (task.state === TaskState.Creating) {
            deleteTask(task.id);
        }
        setIsEditing(false);
    }

    const handleChangeTaskTile = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(target.value || '');
    }

    const handleSaveTask = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateTask(task.id, { title: taskTitle });
        setIsEditing(false);
    }

    const handleUdpateTaskStatus = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        updateTaskStatus(task.id, target.checked);
    }

    const handleClickDeleteTask = async () => {
        await deleteTask(task.id);
    }

    return (
        <Card size='md'>
            {!isEditing ? (
                <div className='flex items-center gap-4'>
                    <InputCheckbox checked={task?.concluded} onChange={handleUdpateTaskStatus} loading={isLoading} />
                    {!isLoading ? (
                        <Text className={cx('flex-1', { 'line-through': task?.concluded })}>{task?.title}</Text>
                    ) :
                        <Skeleton className='flex-1 h-6' />
                    }
                    <div className='flex gap-1'>
                        <ButtonIcon icon={Trash} variant='tertiary' onClick={handleClickDeleteTask} loading={isLoading} handling={isDeletingTask} />
                        <ButtonIcon icon={Pencil} variant='tertiary' onClick={handleEditTask} loading={isLoading} />
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSaveTask} className='flex items-center gap-4'>
                    <Input className='flex-1' onChange={handleChangeTaskTile} value={taskTitle} required autoFocus />
                    <div className='flex gap-1'>
                        <ButtonIcon type='button' icon={XIcon} variant='secondary' onClick={handleExitEditTask} />
                        <ButtonIcon type='submit' icon={CheckIcon} variant='primary' handling={isUpdatingTask} />
                    </div>
                </form>
            )}
        </Card>
    )
}

export default TaskItem