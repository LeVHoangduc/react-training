import SideBar from './SideBar/SideBar'
// import ReactMarkdown from 'react-markdown'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='laptop:grid laptop:grid-cols-[18rem]'>
      <SideBar />
      <main className='laptop:col-start-2 desktop:max-w-[44rem] tablet:mx-8 tablet:pr-8 py-8 px-4 max-w-[38rem] '>
        {children}
      </main>
    </div>
  )
}
