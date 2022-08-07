const your_money = document.getElementById("currency-one");
const your_count = document.getElementById("input_one");
const their_money = document.getElementById("currency-two");
const their_count = document.getElementById("input_two");

const rate_el = document.getElementById("rate");
const xchange = document.getElementById("xchange");

//Fetch exchange rate and update the DOM
function calculate(){
  const your_currency = your_money.value;
  const their_currency= their_money.value;
  
  fetch(`https://v6.exchangerate-api.com/v6/15480e98d8e772824d830821/latest/${your_currency}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.conversion_rates[their_currency];
      
      rate_el.innerText = `1 ${your_currency} = ${rate} ${their_currency}`;

      their_count.value =(your_count.value * rate).toFixed(2);

    });

}

//Event Listeners
your_money.addEventListener("change", calculate);
your_count.addEventListener("input", calculate);
their_money.addEventListener("change", calculate);
their_count.addEventListener("input", calculate);

xchange.addEventListener("click", () =>{
    const swap = your_money.value;
    your_money.value = their_money.value;
    their_money.value = swap;
    calculate();
});
calculate();