import { useState } from 'react'

interface ComponentHookUseCallbackProps {}

function Button({ incrementButton }: { incrementButton: (num: number) => void }) {
  return <button onClick={() => incrementButton(10)}>+</button>
}

export function ComponentHookUseCallbackProps({}: ComponentHookUseCallbackProps) {
  const [count, setCount] = useState(0)

  function incrementCounter(num: number) {
    setCount(prevCount => prevCount + num)
  }

  return (
    <div>
      <h1>Hello, useCallback</h1>
      <h1>C1: {count}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  )
}
