import { useRef, useEffect, useState } from 'react'

// === styling imports
import styled from '@emotion/styled'
import gsap from 'gsap'
import { colors, spacing, fontSize, contrastText } from '../../assets/theme/style.constants';

// === component type assignments
interface ButtonProps {
  label: string,
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean | null
  variant?: 'primary' | 'secondary' | 'warning' | 'caution' | 'note' | 'success' | 'greys'
  onClick?: () => void 
}


// === main function
const Button = (props: ButtonProps) => {
  const {
    label,
    type = 'button',
    variant = 'primary',
    disabled = false,
    onClick = () => console.log(label + ' clicked'),
  } = props
  const ButtonRef = useRef<null | HTMLButtonElement>(null)
  const RippleRef = useRef<null | HTMLSpanElement>(null)
  const [diameter, setDiameter] = useState<number>(0)
  
  useEffect(() => {
    if (ButtonRef.current) {
      setDiameter(Math.max(ButtonRef.current.clientWidth, ButtonRef.current.clientHeight))
    }
  },[])
  
  // === styled components
  const ButtonWrapper = styled.div({
    position: 'relative',
  })

  const ButtonBase = styled.button({
    color: contrastText(colors[variant][700]),
    backgroundColor: colors[variant][500],
    border: '1px solid',
    borderColor: colors[variant][500],
    fontSize: fontSize(4),
    padding: spacing(1),
    textAlign: 'center',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    width: '100%',
  })

  const Ripple = styled.span({
    position: 'absolute',
    borderRadius: '50%',
    transform: 'scale(0)',
    width: `${diameter}px`,
    height: `${diameter}px`,
    backgroundColor: colors[variant][100] + '55',
  })

  // === animations
  const hoverOn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: colors[variant][600],
      color: contrastText(colors[variant][700]),
      borderColor: colors[variant][600],
      duration: 0.3,
      ease: 'power1.inOut'
    })
  }

  const hoverOff = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      backgroundColor: colors[variant][500],
      color: contrastText(colors[variant][700]),
      borderColor: colors[variant][500],
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
      gsap.to([ButtonRef.current], {
        borderColor: colors[variant][200],
        duration: 0.2,
      })
      gsap.to([ButtonRef.current], {
        borderColor: colors[variant][400],
        duration: 0.2,
        delay: 0.3,
      })
    }
  }


  return (
    <ButtonWrapper>
      <ButtonBase
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        onClick={clickAnim}
        disabled={(disabled === null) ? false : disabled }
        ref={ButtonRef}
        type={type}
      >
        <Ripple ref={RippleRef} />
        { label }
      </ButtonBase>
    </ButtonWrapper>
  )
}

export default Button