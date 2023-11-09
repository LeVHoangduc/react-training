import SideBar from './SideBar/SideBar'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='laptop:grid laptop:grid-cols-[18rem]'>
      <SideBar />
      <main className='laptop:col-start-2'>{children}</main>
    </div>
  )
}
