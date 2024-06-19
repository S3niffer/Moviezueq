import { ReactNode } from "react"
import { createPortal } from "react-dom"

const container = document.getElementById("root2")!

const Parent = ({ children }: { children: ReactNode }) => (
    <div className='fixed z-40 top-0 left-0 bottom-0 right-0'>{children}</div>
)

const Portal = ({ children }: { children: ReactNode }) => createPortal(<Parent>{children}</Parent>, container)

export default Portal
