import {useEffect, useRef, useState} from 'react'

export function useChanging<T>(value: T, timeout: number) {
  const [changing, setChanging] = useState(true)
  const lastValueRef = useRef<T>(undefined)
  useEffect(() => {
    if (!changing) setChanging(true)
    const id = setTimeout(() => {
      setChanging(false)
    }, timeout)
    return () => {
      clearTimeout(id)
    }
  }, [value])
  if (lastValueRef.current !== value) {
    lastValueRef.current = value
    return true
  }
  return changing
}
