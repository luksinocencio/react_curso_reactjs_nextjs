import { createContext, useContext, useState } from 'react'

interface ComponentHookUseContextProps {}

const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
}

const GlobalContext = createContext({})

function Title() {
  const theContext = useContext(GlobalContext)
  const {
    contextState: { title, counter },
  } = theContext
  return (
    <h1>
      {title} {counter}
    </h1>
  )
}

function Paragraph() {
  const theContext = useContext(GlobalContext)
  const {
    contextState: { body, counter },
    setContextState,
  } = theContext
  return (
    <p onClick={() => setContextState(s => ({ ...s, counter: s.counter + 1 }))}>
      {body} {counter}
    </p>
  )
}

function Div() {
  return (
    <div>
      <Title />
      <Paragraph />
    </div>
  )
}

export function ComponentHookUseContext({}: ComponentHookUseContextProps) {
  const [contextState, setContextState] = useState(globalState)

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  )
}
