import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
  config: {
    initialColorMode: 'dark'
  },
  colors:{
    primary: theme.colors.red
  }
})
