import {useEffect, useRef, useState} from 'react'

export function useChanging<T>(value: T, timeout: number) {
  const [changing, setChanging] = useState(true)
  useEffect(() => {
    if (!changing) setChanging(true)
    const id = setTimeout(() => {
      setChanging(false)
    }, timeout)
    return () => {
      clearTimeout(id)
    }
  }, [value])
  return changing
}
