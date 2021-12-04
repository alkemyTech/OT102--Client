import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    text: 'Atma',
  },
  styles: {
    global: {
    // styles for the `body`
      body: {
        bg: 'gray.100',
      },

    },
  },
})

export default theme
