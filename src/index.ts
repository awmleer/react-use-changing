import {useEffect, useState} from 'react'

export function useDelayed<T>(value: T, timeout: number) {
  const [delayed, setDelayed] = useState(value)
  useEffect(() => {
    setTimeout(() => {
      setDelayed(value)
    }, timeout)
  }, [value])
  return delayed
}
