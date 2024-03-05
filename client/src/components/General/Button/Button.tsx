import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '../../../styles/ThemeProvider'
import gsap from 'gsap'
import 'the-new-css-reset'

type ButtonProps = {
  color?: 'red'|'orange'|'yellow'|'green'|'blue'|'violet'|'purple'|'pink'|'grey'
  label: string,
  variant?: 'filled' | 'outlined' | 'text'
  shape?: 'round'|'semi-round'|'square'
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const {
    color = 'blue',
    label = 'Button',
    variant = 'text',
    shape = 'round',
    onClick,
  } = props

  const theme = useTheme()
  const [diameter, setDiameter] = useState<number>(0)
  const ButtonRef = useRef<null | HTMLButtonElement>(null)
  const RippleRef = useRef<null | HTMLSpanElement>(null)
  
  useEffect(() => {
    if (ButtonRef.current) {
      setDiameter(Math.max(ButtonRef.current.clientWidth, ButtonRef.current.clientHeight))
    }
  }, [])

  const ButtonBase = styled.button({
    padding: theme.spacing(1.25) + ' ' + theme.spacing(2.5),
    textTransform: 'uppercase',
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: (shape === 'square') ? '0' : theme.spacing((shape === 'round') ? 3 : 1.5),
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
  })

  const ButtonWrapper = styled.div({
    position: 'relative',
  })

  const Ripple = styled.span({
    position: 'absolute',
    borderRadius: '50%',
    transform: 'scale(0)',
    width: `${diameter}px`,
    height: `${diameter}px`,
    backgroundColor: theme.colors[color][200] + '55',
  })

  const TextButton = styled(ButtonBase)({
    backgroundColor: theme.colors[color][500] + '00',
    color: theme.colors[color][500],
    fontWeight: 700,
  })

  const Filled = styled(ButtonBase)({
    backgroundColor: theme.colors[color][500],
    color: theme.colors.common.white,
  })

  const OutlinedButton = styled(ButtonBase)({
    color: theme.colors[color][500],
    backgroundColor: theme.colors[color][500] + '00',
    border: '1px solid ' + theme.colors[color][500],
    fontWeight: 700,
  })

  const hoverOn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: (variant === 'filled') ? theme.colors[color][600] : theme.colors[color][600] + '22',
      borderColor: (variant !== 'text') ? theme.colors[color][600] : theme.colors[color][600] + '22',
      duration: 0.3,
      ease: 'power1.inOut'
    })
  }

  const hoverOff = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: (variant === 'filled') ? theme.colors[color][500] : theme.colors[color][500] + '00',
      borderColor: (variant === 'text') ? 'transparent' : theme.colors[color][500],
      duration: 0.3,
      ease: 'power1.inOut'
    })
  }

  const clickAnim = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget
    const buttonbox = button.getBoundingClientRect()
        
    if (button) {
      gsap.fromTo([RippleRef.current], {
        left: e.clientX - (buttonbox.left + (diameter/2)),
        top: e.clientY - (buttonbox.top + (diameter/2)),
        opacity: 1,
        scale: 0,
      }, {
        scale: 3,
        opacity: 0,
        duration: 0.5,
        ease: 'linear',
        onComplete: onClick,
      })
      gsap.to([RippleRef.current], {
        opacity: 0,
        scale: 0,
        duration: 0,
        delay: 0.8,
      })
    }
  }

  if (variant === 'text') {
    return (
      <ButtonWrapper>
        <TextButton ref={ButtonRef}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          onClick={clickAnim}
        >
          <Ripple ref={RippleRef} />
          {label}
        </TextButton>
      </ButtonWrapper>
    )
  } else if (variant === 'outlined') {
    return (
      <ButtonWrapper>
        <OutlinedButton ref={ButtonRef}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          onClick={clickAnim}
        >
          <Ripple ref={RippleRef} />
          {label}
        </OutlinedButton>
      </ButtonWrapper>
    )
  } 

  return (
    <ButtonWrapper>
      <Filled ref={ButtonRef}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        onClick={clickAnim}
      >
        <Ripple ref={RippleRef} />
        {label}
      </Filled>
    </ButtonWrapper>
  )
}

export default Button