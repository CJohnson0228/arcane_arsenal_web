import { useRouteError } from "react-router-dom"
import styled from "@emotion/styled"
import { useTheme } from "../styles/ThemeProvider"

function ErrorPage() {
  const theme = useTheme()
  const error: unknown = useRouteError()
  console.error(error)

  const Page = styled.div({
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.colors.common.paper,
    color: theme.colors.common.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })

  const Heading = styled.h1({
    fontSize: theme.spacing(10),
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  })
  
  const Para = styled.p({
    fontSize: theme.spacing(5),
    margin: theme.spacing(1),
    color: theme.colors.grey[200],
  })

  const Information = styled.i({
    textTransform: 'uppercase',
    color: theme.colors.red[300],
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