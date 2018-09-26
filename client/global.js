import { injectGlobal } from 'styled-components'
import { font } from 'styled-theme'


export const global = () => injectGlobal`
  html {
    font-size: 15px;
    font-family: ${font('quote')};
  }
  body {
    margin:0;
  }

  html, body {
    height: 100%;
}
`
