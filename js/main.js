
let word = document.getElementById('word').value;
let buttonElement =document.querySelector('button');
const keyDict="552f63c3-4c94-4e4c-9e14-a81cc185c8fc"

buttonElement.addEventListener('click', function(){
  let word = document.getElementById('word').value;
  fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${keyDict}&[format=html]&[options=1]`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let define =response[0].shortdef[0]
      document.querySelector('h2').innerHTML = "Word : " + word;
      document.querySelector('h3').innerHTML = 'English Definition :  ' + define;
      // SECOND FETCH
      const translateKey = "trnsl.1.1.20200308T045408Z.d5c42e35a6aced71.adeaacd70a88cde827e150239682ebb0c03633ad";

      fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translateKey}&text=${word}+${define}&lang=en-es&[format=html]&[options=1]`)
    .then(res2 => res2.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response2 => {
      document.querySelector('h4').innerHTML = response2.text;
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });


    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

})
