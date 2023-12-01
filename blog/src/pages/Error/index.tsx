import useThemeContext from '@hooks/useThemeContext'

export default function ErrorPage() {
  const { isDark } = useThemeContext()

  return (
    <div className={`flex justify-center items-center flex-col ${isDark ? 'text-custom-white' : 'text-custom-black'}`}>
      <p className='text-6xl'>404</p>
      <p>Not Found! Please try again</p>
    </div>
  )
}
