import SideBar from './SideBar/SideBar'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='flex flex-col h-full laptop:flex-row'>
      <SideBar />
      <main>{children}</main>
    </div>
  )
}
