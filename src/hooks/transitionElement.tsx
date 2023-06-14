import { useEffect, useState } from "react"

export const useTransitionElement = () => {
    const [showClass, setShowClass] = useState('content')

    useEffect (() => {
      setShowClass('content content__active')
    }, [])

    return showClass
}