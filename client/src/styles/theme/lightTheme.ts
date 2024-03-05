import type { ThemeTypes } from './ThemeTypes'
import { calcContrastText } from './ThemeTypes'

export const lightTheme: ThemeTypes = {
  colors: {
    mode: 'light',
    common: {
      black: '#111111',
      white: '#eeeeee',
      background: '#dedede',
      paper: '#fefefe',
      text: '#1e1e1e'
    },
    contrastText: (hexColor: string) => {
      const blackContrast = calcContrastText(hexColor, '#28303d')
      const whiteContrast = calcContrastText(hexColor, '#f2f3f4')
      if (blackContrast > whiteContrast) {
        return '#28303d'
      } else {
        return '#f2f3f4'
      }
    },
    grey: {
      100: '#C5C8D0',
      200: '#ACAFB6',
      300: '#92969C',
      400: '#5E6368',
      500: '#494D53',
      600: '#34373E',
      700: '#2D2F36',
      800: '#25272D',
      900: '#1B1C1F'
    },
    red: {
      100: "#fcd6d9",
      200: "#f9adb3",
      300: "#f7848e",
      400: "#f45b68",
      500: "#f13242",
      600: "#c12835",
      700: "#911e28",
      800: "#60141a",
      900: "#300a0d"
    },
    orange: {
      100: "#ffe7d8",
      200: "#ffcfb0",
      300: "#ffb789",
      400: "#ff9f61",
      500: "#ff873a",
      600: "#cc6c2e",
      700: "#995123",
      800: "#663617",
      900: "#331b0c"
    },
    yellow: {
      100: "#fff1cc",
      200: "#ffe299",
      300: "#ffd466",
      400: "#ffc533",
      500: "#ffb700",
      600: "#cc9200",
      700: "#996e00",
      800: "#664900",
      900: "#332500"
    },
    green: {
      100: "#cdf2de",
      200: "#9ae5bd",
      300: "#68d79d",
      400: "#35ca7c",
      500: "#03bd5b",
      600: "#029749",
      700: "#027137",
      800: "#014c24",
      900: "#012612"
    },
    blue: {
      100: "#cde8fa",
      200: "#9cd1f4",
      300: "#6abaef",
      400: "#39a3e9",
      500: "#078ce4",
      600: "#0670b6",
      700: "#045489",
      800: "#03385b",
      900: "#011c2e"
    },
    violet: {
      100: "#e4dcfc",
      200: "#c9b9fa",
      300: "#af96f7",
      400: "#9473f5",
      500: "#7950f2",
      600: "#6140c2",
      700: "#493091",
      800: "#302061",
      900: "#181030"
    },
    purple: {
      100: "#efd8f4",
      200: "#dfb2e9",
      300: "#ce8bdf",
      400: "#be65d4",
      500: "#ae3ec9",
      600: "#8b32a1",
      700: "#682579",
      800: "#461950",
      900: "#230c28"
    },
    pink: {
      100: "#ffe0ed",
      200: "#ffc1db",
      300: "#ffa2c9",
      400: "#ff83b7",
      500: "#ff64a5",
      600: "#cc5084",
      700: "#993c63",
      800: "#662842",
      900: "#331421"
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1540,
    max: 1800,
  },
  shadows: {
    boxShadows: {
      100: '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001f',
      200: '0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f',
      300: '0px 4px 5px -2px #00000033, 0px 7px 10px 1px #00000024, 0px 2px 16px 1px #0000001f',
      400: '0px 6px 6px -3px #00000033, 0px 10px 14px 1px #00000024, 0px 4px 18px 3px #0000001f',
      500: '0px 7px 8px -4px #00000033, 0px 13px 19px 2px #00000024, 0px 5px 24px 4px #0000001f',
      600: '0px 8px 10px -5px #00000033, 0px 16px 24px 2px #00000024, 0px 6px 30px 5px #0000001f',
      700: '0px 9px 12px -6px #00000033, 0px 19px 29px 2px #00000024, 0px 7px 36px 6px #0000001f',
      800: '0px 10px 14px -6px #00000033, 0px 22px 35px 3px #00000024, 0px 8px 42px 7px #0000001f',
      900: '0px 11px 15px -7px #00000033, 0px 24px 38px 3px #00000024, 0px 9px 46px 8px #0000001f',
    },
    textShadows: {
      100: '1px 1px 1px #00000080',
      200: '2px 2px 2px #00000080',
      300: '3px 3px 3px #00000080',
      400: '4px 4px 4px #00000080',
      500: '5px 5px 5px #00000080',
      600: '6px 6px 6px #00000080',
      700: '7px 7px 7px #00000080',
      800: '8px 8px 8px #00000080',
      900: '9px 9px 9px #00000080',
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    sidebar: 1000,
    snackbar: 1400,
    subappbar: 1050,
    tooltip: 1500,
  },
  spacing: (value: number) => {
    const newValue = value * 8
    return (newValue + 'px')
  }
}