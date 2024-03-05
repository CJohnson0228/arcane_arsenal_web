import styled from '@emotion/styled'
import { colors, spacing } from '../../assets/theme/style.constants'

const BaseDivider = styled.hr({
  borderTop: '1px solid ' + colors.greys[600],
  width: '80%',
  margin: spacing(1) + ' auto',
})

const Divider = () => {
  return (
    <BaseDivider />
  )
}

export default Divider