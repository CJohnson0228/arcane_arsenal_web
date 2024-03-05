import { useRef } from 'react'

// === styling imports
import styled from "@emotion/styled"
import { colors, spacing, fontSize } from '../../assets/theme/style.constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// === typing
type TextInputProps = {
  label: string
  placeholder: string
  value?: string
  type?: 'email' | 'password' | 'text' | 'search'
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

// === styled Components
const FormGroup = styled.div({
  position: 'relative',
  padding: '15px 0 10px',
  marginTop: '10px',
  width: '100%',
})

const FormField = styled.input({
  fontFamily: 'inherit',
  width: '100%',
  border: 0,
  borderBottom: '1px solid ' + colors.greys[400],
  outline: 0,
  fontSize: fontSize(4),
  color: colors.greys[100],
  padding: '7px 0',
  background: 'transparent',
  '&::placeholder': {
    color: 'transparent',
  },
  '&:placeholder-shown ~ .form__label': {
    fontSize: fontSize(4),
    cursor: 'text',
    top: '20px',
  },
})

const FormLabel = styled.label({
  position: 'absolute',
  top: 0,
  display: 'block',
  fontSize: fontSize(4),
  color: colors.greys[300],
}) 

const TextInput = (props: TextInputProps) => {
  const { 
    label,
    placeholder,
    value = '',
    type = 'text',
    onChange
  } = props
  const LabelRef = useRef(document.createElement('label'))
  const InputRef = useRef(document.createElement('input'))

  const focusAnimation = gsap.timeline({ paused: true })

  useGSAP(() => {
    focusAnimation.to([InputRef.current], {
      paddingBottom: spacing(0.75),  
      borderWidth: '2px',
      borderImage: `linear-gradient(to right, ${colors.primary[500]}, ${colors.secondary[400]}) 1`,
      duration: 0.2,
    })
    focusAnimation.to([LabelRef.current], {
      position: 'absolute',
      top: 0,
      display: 'block',
      fontSize: fontSize(3),
      color: colors.primary[400],
      duration: 0.2,
    }, 0)
  })

  
  function FocusAnimation() {
    focusAnimation.play()
    InputRef.current.focus()  
  }

  function BlurAnimation() {
    const value = InputRef.current.value
    if (value === '') {
      focusAnimation.reverse()
    }
  }
  
  return (
    <FormGroup className="form__group field">
      <FormField
        ref={InputRef}
        type={type}
        className='form__field'
        onFocus={FocusAnimation}
        onBlur={BlurAnimation}
        autoComplete='one-time-code'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required />
      <FormLabel
        ref={LabelRef}
        onClick={FocusAnimation}
        className='form__label'>
        {label}
      </FormLabel>
    </FormGroup>
  )
}

export default TextInput