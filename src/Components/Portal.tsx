import { ReactNode } from "react"
import { createPortal } from "react-dom"

const container = document.getElementById("root2")!

const Portal = ({ children }: { children: ReactNode }) => createPortal(children, container)

export default Portal
