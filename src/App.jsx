import './App.css'
import Navigation from './components/Navigation'
import TodoCards from './components/TodoCards'
import TopNav from './components/TopNav'

function App() {
  

  return (
    <div className='px-6 relative py-6'>
      <div className='container mx-auto relative'>
        <TopNav />
        <div className="flex gap-[15px] items-start flex-col md:flex-row">
          <Navigation />
          <TodoCards />
        </div>
      </div>
    </div>
  )
}

export default App
