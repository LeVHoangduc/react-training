import { createPortal } from 'react-dom'

interface PortalProps {
  component: React.ReactNode
  className: string
}

/**
 * Portal component renders a React node as a portal, attaching it to a specified DOM element using createPortal.
 *
 * @param {PortalProps} param - Props containing the React node to be rendered as a portal and the target DOM element's class name.
 * @returns {JSX.Element} - React element representing the portal-rendered component.
 */
export default function Portal({ component, className }: PortalProps): JSX.Element {
  return <>{createPortal(component, document.querySelector(className) as HTMLElement)}</>
}
