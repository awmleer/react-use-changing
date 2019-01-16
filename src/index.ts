import {useEffect, useRef, useState} from 'react'

export function useChanging<T>(value: T, timeout: number) {
  const [changing, setChanging] = useState(true)
  const lastValueRef = useRef<T>(undefined)
  if (lastValueRef.current !== value) {
    lastValueRef.current = value
    if (!changing) setChanging(true)
  }
  useEffect(() => {
    const id = setTimeout(() => {
      setChanging(false)
    }, timeout)
    return () => {
      clearTimeout(id)
    }
  }, [value])
  return changing
}
