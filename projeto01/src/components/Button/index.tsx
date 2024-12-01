import './styles.css'

interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

export function Button({ text, onClick, disabled = false }: ButtonProps) {
  return (
    <button className='button' onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
