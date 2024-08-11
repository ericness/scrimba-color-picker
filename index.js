document.addEventListener('DOMContentLoaded', () => {
    const colorPreview = document.querySelector('.color-preview');
    const colorSchemeSelect = document.getElementById('colorScheme');
    const getColorSchemeButton = document.getElementById('getColorScheme');
    const colorPalette = document.querySelector('.color-palette');

    const initialColors = ['#F55A5A', '#2B283A', '#FBF3AB', '#AAD1B6', '#A626D3'];

    function updateColorPalette(colors) {
        colorPalette.innerHTML = '';
        colors.forEach(color => {
            const colorItem = document.createElement('div');
            colorItem.className = 'color-item';
            colorItem.innerHTML = `
                <div class="color-box" style="background-color: ${color};"></div>
                <span>${color}</span>
            `;
            colorPalette.appendChild(colorItem);
        });
    }

    function updateColorPreview(color) {
        colorPreview.style.backgroundColor = color;
    }

    getColorSchemeButton.addEventListener('click', () => {
        // In a real application, you would fetch the color scheme from an API
        // For this example, we'll just use the initial colors
        updateColorPalette(initialColors);
    });

    colorSchemeSelect.addEventListener('change', () => {
        // In a real application, you would update the color scheme based on the selection
        // For this example, we'll just log the selected value
        console.log('Selected color scheme:', colorSchemeSelect.value);
    });

    // Initialize with default colors
    updateColorPreview(initialColors[0]);
    updateColorPalette(initialColors);
});
