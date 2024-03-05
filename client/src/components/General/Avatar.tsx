import styled from "@emotion/styled"
import { colors, spacing, fontSize } from "../../assets/theme/style.constants"

type AvatarProps = {
  imageUrl: string | null
  initials: string | null
}


const Avatar = (props: AvatarProps) => {
  const { imageUrl, initials } = props

  const MainAvatar = styled.div({
    height: '130px',
    width: '130px',
    backgroundColor: colors.note[800],
    color: colors.common.white,
    borderRadius: '50%',
    border: '5px solid ' + colors.common.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    fontSize: fontSize(16),
    fontFamily: '"Cinzel"'
  })

  console.log()
  
  return (
    <MainAvatar style={{ backgroundImage: (imageUrl !== null) ? `url(${imageUrl})` : 'none' }}>
      {imageUrl && ''}
      {initials && initials}
    </MainAvatar>
  )
}

export default Avatar