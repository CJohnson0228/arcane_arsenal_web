import { useRouteError } from "react-router-dom"
import styled from "@emotion/styled"
import { colors, spacing, fontSize } from "./assets/theme/style.constants"

function ErrorPage() {
  const error: unknown = useRouteError()
  console.error(error)

  const Page = styled.div({
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.common.paper,
    color: colors.common.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })

  const Heading = styled.h1({
    fontSize: fontSize(20),
    fontWeight: 'bold',
    marginBottom: spacing(2),
  })
  
  const Para = styled.p({
    fontSize: fontSize(10),
    margin: spacing(1),
    color: colors.greys[200],
  })

  const Information = styled.i({
    textTransform: 'uppercase',
    color: colors.warning[300],
  })

  return (
    <Page id='error-page'>
      <Heading>Oops!</Heading>
      <Para>Sorry, an unexpected error has occurred.</Para>
      <Para>
        <Information>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </Information>
      </Para>
    </Page>
  )
}

export default ErrorPage