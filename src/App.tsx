import { AppRoutes } from "./routes"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
        <AppRoutes />
    </ThemeProvider>
  )
}

export default App
