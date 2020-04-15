import ThemeContext from '../../utils/context/theme'
import { Toggle, Spacer } from '@zeit-ui/react'
import { Moon, Sun } from 'react-feather'

export default function ToggleTheme() {
  const { switchThemes, themeType } = React.useContext(ThemeContext)

  return (
    <>
      <Moon size={20} />
      <Spacer x={0.5} />
      <Toggle initialChecked={themeType === 'light'} onChange={switchThemes} />
      <Spacer x={0.5} />
      <Sun size={20} />
      <style jsx>{``}</style>
    </>
  )
}
