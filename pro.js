document.getElementById('memory-price').addEventListener('click',function(){
    const memorycost=document.getElementById('memory-cost')
    const newmemorycosttext=memorycost.value
    const newmemorycost=parseInt(newmemorycosttext)
    const memorytotal=document.getElementById('memory-total')
    const previousmemorycosttext=memorytotal.innerText
    const previousmemorycost=parseInt(previousmemorycosttext)
    const newmemorytotal=previousmemorycost*180
    memorytotal.innerText=newmemorytotal
})