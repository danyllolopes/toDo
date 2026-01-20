import TrashIcon from '../assets/icons/trash-regular.svg?react';
import CircleIcon from '../assets/icons/circle-dutone.svg?react';
import PlusIcon from '../assets/icons/plus-regular.svg?react';
import Icon from '../components/icon';
import Badge from '../components/badge';
import Button from '../components/button';
import ButtonIcon from '../components/button-icon';
import Input from '../components/input';
import InputCheckbox from '../components/input-checkbox';
import Card from '../components/card';
import Container from '../components/container';
import Skeleton from '../components/skeleton';
import Text from '../components/text';

const PagesComponents = () => {
    return (
        <Container >
            <div className='grid gap-10'>
                <div className='flex flex-col gap-1'>
                    <Text variant="body-md-bold" className='text-pink-base'>Hello, World!</Text>
                    <Text className='text-green-base'>Hello, World!</Text>
                    <Text variant="body-sm-bold" className='text-pink-base'>Hello, World!</Text>
                </div>
                <div className='flex gap-1'>
                    <Icon svg={TrashIcon} className='w-6 h-6 text-gray-200 fill-pink-base' />
                    <Icon svg={CircleIcon} />
                </div>
                <div className='space-x-2 flex'>
                    <Badge variant='primary'>5</Badge>
                    <Badge variant='secondary' className='ml-2'>99+ de +100</Badge>
                    <Badge loading >5</Badge>
                </div>
                <div>
                    <Button icon={PlusIcon} handling>Nova Tarefa</Button>
                </div>
                <div className='flex gap-1'>
                    <ButtonIcon icon={TrashIcon} />
                    <ButtonIcon icon={TrashIcon} variant={'secondary'} />
                    <ButtonIcon icon={TrashIcon} variant={'tertiary'} />
                    <ButtonIcon icon={TrashIcon} loading />
                    <ButtonIcon icon={TrashIcon} handling />
                </div>
                <div>
                    <Input />
                </div>
                <div>
                    <InputCheckbox />
                    <InputCheckbox loading />
                </div>
                <div>
                    <Card size='md'>Ola mundo</ Card>
                </div>
                <div className='space-y-2'>
                    <Skeleton className='h-32' />
                    <Skeleton className='h-32' />
                </div>
            </ div>
        </Container>
    )
}

export default PagesComponents