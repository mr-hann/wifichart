//code to be able to change userinfo for userprofile page

var button=document.querySelector('.button');
       var ps=document.querySelectorAll("main ul li p");
        var li=document.querySelectorAll("main ul li");
        
        
        ps.forEach(function(e){
            e.addEventListener('click', function(e){
            const p=e.target
            e.target.style.display="none"
            const In=document.createElement('input');
            In.setAttribute('type','text');
            In.setAttribute('placeholder','changeValue..');
            In.setAttribute('class','input');
            e.target.parentElement.appendChild(In);
            //check
             button.addEventListener('click', function(){
           var names= In.value;
                 In.style.display="none";
                 p.innerHTML=names;
                 p.style.display="block";})
        });
        });

       //for chat page to like and love
    var like=document.querySelector('#like');
    const love=document.querySelector('#love');
    like.addEventListener('click', function(e){
        e.target.classList.remove('fa-thumbs-o-up');
        e.target.classList.add('fa-thumbs-up');
        let likenu=Number(like.textContent)+1;
        like.textContent=likenu;
        /*
        if(likenu===2){
            e.target.classList.remove('fa-thumbs-up');
            e.target.classList.add('fa-thumbs-o-up');
            like.textContent=likenu;
           // likenu=likenu--;
            
        }else{
            like.textContent=likenu;
        }*/
        
    });
    love.addEventListener('click', function(e){
        e.target.classList.remove('fa-heart-o');
        e.target.classList.add('fa-heart');
        let lovenu=Number(love.textContent)+1;
        love.textContent=lovenu;
        /*if(lovenu===2){
            e.target.classList.remove('fa-heart');
            e.target.classList.add('fa-heart-o');
            love.textContent=lovenu;
           // lovenu=lovenu--;
            
        }else{
            love.textContent=lovenu;
        }*/
    });