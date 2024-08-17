
const colorPickerEl = document.getElementById("color-picker")
const colorSchemeEl = document.getElementById("color-scheme")
const getColorSchemeBtn = document.getElementById("get-color-scheme")
const colorPaletteEl = document.getElementById("color-palette")

let colorScheme = []

getColorSchemeBtn.addEventListener("click", () => {
    let color = colorPickerEl.value
    let formattedColor = color.slice(1).toUpperCase()
    const mode = colorSchemeEl.value

    colorScheme = []
    fetch(`https://www.thecolorapi.com/scheme?hex=${formattedColor}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            colorScheme = data.colors.map(color => color.hex.clean)
            displayColorPalette(colorScheme)
        })
})


function displayColorPalette(colors) {
    colorPaletteEl.innerHTML = ""
    for (let color of colors) {
        const block = document.createElement('div');
        block.className = 'palette-block';
        block.id = `palette-block-${color}`;
        block.textContent = `#${color}`;
        block.style.backgroundColor = `#${color}`;
        block.style.color = getContrastingGreyscale(color)
        colorPaletteEl.appendChild(block);
    }
}

function getContrastingGreyscale(hexColor) {
    // Remove the # if present
    hexColor = hexColor.replace(/^#/, '');
  
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
  
    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Return white for dark colors, black for light colors
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  }