import { useRef } from 'react'
import gsap from 'gsap'
import styled from '@emotion/styled'
import { useTheme } from '../../../styles/ThemeProvider'
import 'the-new-css-reset'

type TextFieldProps = {
  type: 'text' | 'email' | 'password'
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'purple' | 'pink' | 'grey'
  value?: string,
  label: string,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const TextFieldGroup = styled.div({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
})

const Label = styled.label({
  position: 'absolute',
  top: 23,
  left: 17,
  pointerEvents: 'none',
})

const Input = styled.input({
  width: '100%',
  height: '34px',
  margin: '16px 0 24px',
  padding: '16px',
  borderRadius: '16px',
  resize: 'none',
  outline: 'none',
})

const TextField = (props: TextFieldProps) => {
  const theme = useTheme()
  const LabelRef = useRef(document.createElement('label'))
  const InputRef = useRef(document.createElement('input'))
  const {
    type = 'text',
    color = 'orange',
    value = '',
    label,
    onChange
  } = props

  const focusAnimation = () => {
    gsap.to([LabelRef.current], {
      top: theme.spacing(-0.5),
      color: theme.colors[color][500],
      duration: 0.1,
      ease: 'linear',
    })
    gsap.to([InputRef.current], {
      borderColor: theme.colors[color][500],
      duration: 0.1,
      ease: 'linear',
    })
  }

  const blurAnimation = () => {
    const value = InputRef.current.value
    
    gsap.to([LabelRef.current], {
      top: (value === '') ? theme.spacing(2.9) : theme.spacing(-0.5),
      color: (value === '') ? theme.colors.common.text : theme.colors[color][500],
      duration: 0.1,
      ease: 'linear',
    })
    gsap.to([InputRef.current], {
      borderColor: theme.colors.common.text,
      duration: 0.1,
      ease: 'linear',
    })
  }
  
  return (
    <TextFieldGroup className="form__group field" >
      <Input
        ref={InputRef}
        type={type}
        value={value}
        className='form__field'
        onChange={onChange}
        onFocus={focusAnimation}
        onBlur={blurAnimation}
        autoComplete="one-time-code"
        style={{
          border: '1px solid ' + theme.colors.common.text,
          background: theme.colors.common.background,
        }}
      />
      <Label
        ref={LabelRef}
        className='form__label'>
          {label}  
      </Label>
    </TextFieldGroup>
  )
}

export default TextField