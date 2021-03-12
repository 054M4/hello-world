const text = document.querySelector('.text')
text.onclick = function (event) {
  event.target.style.pointerEvents = 'none'
  const textValue = event.target.innerText
  var reverse = false
  interval = setInterval(()=>{
    let value = event.target.innerText
    let length = value.length
    if(value === textValue && reverse){
      event.target.style.pointerEvents = 'all'
      clearInterval(interval)
    }else if(length === 0 || reverse){
     if(!reverse) reverse = true
     event.target.innerText = textValue[length] === ' '? textValue.substr(0,length+2) : textValue.substr(0,length+1)
    }else{
      event.target.innerText = value.substr(0,length-1)
    }
  },30)
}