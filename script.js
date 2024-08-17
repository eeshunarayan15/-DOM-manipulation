var statuss=document.querySelector('#friend');
var btn=document.querySelector('button');

var flag=0;

    btn.addEventListener('click', function(){
        if(flag == 0){
        btn.style.color='white'
        btn.style.backgroundColor='green'
        btn.innerHTML='Remove friend'
        
        statuss.innerHTML='Friends'
    
        flag=1;
    
        
        }else{
            btn.style.color='white'
    btn.style.backgroundColor='blue'
    btn.innerHTML='Add friend'
    
    statuss.innerHTML='Unknown'
    flag=0;


}

        
    
    
    })

  
    