// var glo = 'Ololololol'
// // console.log(2+2)
// // ;(function () {
// //   var po = 'fafafaf'
// //   console.log(glo)
// // }())
// // console.log('before');
// ;(() => {
//   console.log('hello')
// })()

// // hi()

// console.log('uo')

function outerMost() {
  var one = 'one'
  function innerSome() {
    console.log(one)
    function innerMost() {
      var two = 'two'
      console.log(two)
    }
  }
  return innerSome
  // console.log(two)
}

var separated = outerMost

separated()();
