import { memo, useCallback, useState } from 'react'

interface ComponentHookUseCallbackProps {}

const Button = memo(({ incrementButton }: { incrementButton: (num: number) => void }) => {
  console.log('filho renderizou')
  return <button onClick={() => incrementButton(10)}>+</button>
})

export function ComponentHookUseCallbackProps({}: ComponentHookUseCallbackProps) {
  const [count, setCount] = useState(0)

  const incrementCounter = useCallback((num: number) => {
    setCount(prevCount => prevCount + num)
  }, [])

  console.log('pai renderizou')

  return (
    <div>
      <h1>Hello, useCallback</h1>
      <h1>C1: {count}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  )
}
