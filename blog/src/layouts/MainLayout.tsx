import SideBar from './SideBar'
interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='mainLayout'>
      <SideBar />
      <main className='laptop:col-start-2 desktop:max-w-[44rem] tablet:mx-8 tablet:pr-8 max-w-[38rem] py-8 px-4'>
        <div className='content'>{children}</div>
      </main>
    </div>
  )
}
