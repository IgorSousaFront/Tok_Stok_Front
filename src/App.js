import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles'
import Layout from './components/Layout'
import List from './components/List'
import light from './styles/themes/light';

const App = () => {

  return(
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  )
}

export default App;
