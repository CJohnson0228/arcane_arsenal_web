import styled from '@emotion/styled'
import { colors, spacing } from '../../assets/theme/style.constants'

const BaseDivider = styled.hr({
    borderLeft: '1px solid ' + colors.greys[600],
    height: '60%',
    margin: 'auto ' + spacing(1),
  })

const VerticalDivider = () => {
  return (
    <BaseDivider />
  )
}

export default VerticalDivider