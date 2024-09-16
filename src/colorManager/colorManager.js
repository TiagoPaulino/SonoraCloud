import ColorThief from "colorthief";
import {store} from "@/store/store";
import {themeBackgroundUpdate,themeFontColorUpdate} from "@/store/theme.slice";
            

function colorPaletteToHex(palette) {
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
    return palette.map(x => rgbToHex(x[0], x[1], x[2]))
}

export const setThemeColor = (image) => {
    const colorThief = new ColorThief()
    const palette = colorThief.getPalette(image)
    const hexPalette = colorPaletteToHex(palette)

    const ColorFont = (palette) => {
       const [r,g,b] = palette[5]
       console.log(r,g,b)
       const brightness = (0.299 * r + 0.587 * g + 0.114 * b); 
       console.log(brightness)
       return !(brightness > 186) ? 'white' : 'black'
       
    }
    const background = {
        primary: hexPalette[5],
        secondary: hexPalette[4],
        tertiary: hexPalette[3],
        highlight: hexPalette[2]
        }
    const fontsColors = {
        dark: ColorFont(palette),
    }
        store.dispatch(themeFontColorUpdate(fontsColors))
        store.dispatch(themeBackgroundUpdate(background))
    
}
