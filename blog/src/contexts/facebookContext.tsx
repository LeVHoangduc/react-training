import { FacebookProvider } from 'react-facebook'

interface FacebookContextProviderProps {
  children: React.ReactNode
}
const FacebookContextProvider = ({ children }: FacebookContextProviderProps) => {
  return <FacebookProvider appId='1302726233707586'>{children}</FacebookProvider>
}

export default FacebookContextProvider
