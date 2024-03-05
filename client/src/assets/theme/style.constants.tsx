type PaletteItem = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type ColorTypes = {
  common: {
    black: string,
    white: string,
    background: string,
    paper: string,
  },
  primary: PaletteItem,
  secondary: PaletteItem,
  warning: PaletteItem,
  caution: PaletteItem,
  note: PaletteItem,
  success: PaletteItem,
  greys: PaletteItem,
}

export const colors: ColorTypes = {
  common: {
    black: '#111111',
    white: '#eeeeee',
    background: '#131313',
    paper: '#222222',
  },
  greys: {
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
  primary: {
    100: "#dbe1ef",
    200: "#b7c3df",
    300: "#93a5cf",
    400: "#6f87bf",
    500: "#4b69af",
    600: "#3c548c",
    700: "#2d3f69",
    800: "#1e2a46",
    900: "#0f1523"
  },
  secondary: {
    100: "#effce6",
    200: "#e0f8cd",
    300: "#d0f5b3",
    400: "#c1f19a",
    500: "#b1ee81",
    600: "#8ebe67",
    700: "#6a8f4d",
    800: "#475f34",
    900: "#23301a"
  },
  warning: {
    100: "#ffdbdb",
    200: "#ffb8b8",
    300: "#ff9494",
    400: "#ff7171",
    500: "#ff4d4d",
    600: "#cc3e3e",
    700: "#992e2e",
    800: "#661f1f",
    900: "#330f0f"
  },
  caution: {
    100: "#fbf8e8",
    200: "#f7f1d1",
    300: "#f4eabb",
    400: "#f0e3a4",
    500: "#ecdc8d",
    600: "#bdb071",
    700: "#8e8455",
    800: "#5e5838",
    900: "#2f2c1c"
  },
  note: {
    100: "#f3f0ee",
    200: "#e7e2dc",
    300: "#dcd3cb",
    400: "#d0c5b9",
    500: "#c4b6a8",
    600: "#9d9286",
    700: "#766d65",
    800: "#4e4943",
    900: "#272422"
  },
  success: {
    100: "#eaf3ea",
    200: "#d5e7d4",
    300: "#c1dabf",
    400: "#accea9",
    500: "#97c294",
    600: "#799b76",
    700: "#5b7459",
    800: "#3c4e3b",
    900: "#1e271e"
  },
}

type BreakpointTypes = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  max: number
}

export const breakpoints: BreakpointTypes = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1540,
  max: 1800,
}

type ShadowTypes = {
  boxShadows: {
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  },
  textShadows: {
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  },
}

export const shadows: ShadowTypes = {
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
    100: '1px 1px 1px #000000',
    200: '2px 2px 2px #000000',
    300: '3px 3px 3px #000000',
    400: '4px 4px 4px #000000',
    500: '5px 5px 5px #000000',
    600: '6px 6px 6px #000000',
    700: '7px 7px 7px #000000',
    800: '8px 8px 8px #000000',
    900: '9px 9px 9px #000000',
  },
}

type ZIndexTypes = {
  appBar: number,
  drawer: number,
  modal: number,
  sidebar: number,
  snackbar: number,
  subappbar: number,
  tooltip: number,
}

export const zIndex: ZIndexTypes = {
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  sidebar: 1000,
  snackbar: 1400,
  subappbar: 1050,
  tooltip: 1500,
}

type SpacingTypes = (value: number) => string

export const spacing: SpacingTypes = (value) => {
  const newValue = value * 8
  return ( newValue + 'px' )
} 

type FontSizeTypes = (value: number) => string

export const fontSize: FontSizeTypes = (value) => {
  const newValue = value * 4
  return ( newValue + 'px')
}

const hexToRgb = (hexInput: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexInput)
  if (result !== null) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
  } else {
    return { r: 0, g: 0, b: 0}
  }
}

const luminance = (hexInput: string) => {
  const sRGB = hexToRgb(hexInput)
  const R = ((sRGB.r / 255) <= 0.04045) ? (sRGB.r / 255) / 12.92 : (((sRGB.r / 255) + 0.055) / 1.055) ** 2.4
  const G = ((sRGB.g / 255) <= 0.04045) ? (sRGB.g / 255) / 12.92 : (((sRGB.g / 255) + 0.055) / 1.055) ** 2.4
  const B = ((sRGB.b / 255) <= 0.04045) ? (sRGB.b / 255) / 12.92 : (((sRGB.b / 255) + 0.055) / 1.055) ** 2.4
  const L = (0.2126 * R) + (0.7152 * G) + (0.0722 * B)
  return L
}

const calcContrastText = (background: string, text: string) => {
  const lum1 = luminance(background)
  const lum2 = luminance(text)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  const value = brightest/darkest
  return value
}

export const contrastText = (hexColor: string) => {
  const blackContrast = calcContrastText(hexColor, '#222222')
  const whiteContrast = calcContrastText(hexColor, '#DDDDDD')
  if (blackContrast > whiteContrast) {
    return '#222222'
  } else {
    return '#DDDDDD'
  }
} 