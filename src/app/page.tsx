import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TopMenu from '@/components/TopMenu'

export default function Home() {
  return (
    <main className='text-black bg-white h-screen pt-40 pl-20'>
      <TopMenu />
      <div className='flex'>
        <div className='text-2xl p-5'>
          MY BOOKING
        </div>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </main>
  )
}