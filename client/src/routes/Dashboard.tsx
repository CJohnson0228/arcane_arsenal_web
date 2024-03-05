import { useState, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../styles/ThemeProvider'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styled from '@emotion/styled'

const DashboardMain = styled.div({
  height: '100vh',
  width: '100vw',
  position: 'relative',
  display: 'flex',
})

const DashboardContainer = styled.div({
  display: 'flex'
})

const Dashboard = () => {
  const theme = useTheme()

  return (
    <DashboardMain
      className='content'
      style={{
        backgroundColor: theme.colors.common.background,
      }}
    >
      <DashboardContainer>
        Dashboard : Home
        <Outlet />
      </DashboardContainer>
    </DashboardMain>
  )
}

export default Dashboard