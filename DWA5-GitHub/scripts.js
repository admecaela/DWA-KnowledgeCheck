// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    result.innerText = Math.floor(dividend / divider);
    
    if (!dividend || !divider) {
      result.innerText = 'Division not performed. Both values are required in inputs. Try again'
    }

    if (result.innerText < 0) {
      result.innerText = 'Division not performed. Invalid number provided. Try again'
      throw new Error('Invalid number provided');
    };

    if ((typeof dividend !== Number && dividend !== null) 
    || (typeof divider !== Number && divider !== null)) {
      document.body.innerHTML = '<h1 style="color: red">Something critical went wrong. Please reload the page</h1>'
      throw new Error('No number detected')
    }

  } catch (error) {
      console.error(error);  

      if (!event.defaultPrevented) {
        event.preventDefault();
      }
      throw error;
  };
});

