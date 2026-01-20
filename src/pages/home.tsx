import TaskSummary from '../core-components/TaskSummary'
import Container from '../components/container'
import TaskList from '../core-components/TaskList'

const Home = () => {
  return (
    <Container as='article' className='space-y-3'>
      <header className='flex justify-between items-center'>
        <TaskSummary />
      </header>

      <TaskList />
    </Container>
  )
}

export default Home