// tailwind.config.js
module.exports = {
    theme: {
      extend: {},
    },
    plugins: [
      function ({ addBase, addUtilities }) {
        addBase({
          'button': {
            padding: '.5rem 1rem',
            borderRadius: '.25rem',
            fontWeight: '500',
          },
        });
  
        const customButtonUtilities = {
          '.custom-button-blue': {
            backgroundColor: 'blue-500',
            color: 'white',
          },
          // You can add more custom button classes here
        };
  
        addUtilities(customButtonUtilities, ['responsive', 'hover']);
      },
    ],
  };



  let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

//swiperv......

