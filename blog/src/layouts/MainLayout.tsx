import SideBar from './SideBar/SideBar'
// import ReactMarkdown from 'react-markdown'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='laptop:grid laptop:grid-cols-[18rem]'>
      <SideBar />
      <main className='laptop:col-start-2 desktop:max-w-[44rem] mx-8 py-8 pl-4 pr-8 max-w-[38rem] '>{children}</main>
    </div>
  )
}
