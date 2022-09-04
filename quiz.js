let main=document.querySelectorAll('.main');
let btn=document.querySelectorAll('.btn')
let correct=0;
let wrong=0;
let miss=0;
//console.log(btn[0]);
btn[0].addEventListener('click',()=>{
    main[0].hidden=true;
    main[1].hidden=false;
});
btn[1].addEventListener('click',()=>{
    main[1].hidden=true;
    main[0].hidden=false;
})
btn[2].addEventListener('click',()=>{
    main[2].hidden=false;
    main[1].hidden=true;
    main[0].hidden=true;
})
btn[3].addEventListener('click',()=>{
    main[2].hidden=true;
    main[1].hidden=false;
    main[0].hidden=true;
})
btn[4].addEventListener('click',()=>{
    main[2].hidden=true;
    main[1].hidden=true;
    main[0].hidden=true;
    main[3].hidden=false;
})
btn[5].addEventListener('click',()=>{
    main[2].hidden=false;
    main[1].hidden=true;
    main[0].hidden=true;
    main[3].hidden=true;
})
btn[6].addEventListener('click',()=>{
    main[2].hidden=true;
    main[1].hidden=true;
    main[0].hidden=true;
    main[3].hidden=true;
    main[4].hidden=false;
})
btn[7].addEventListener('click',()=>{
    main[2].hidden=true;
    main[1].hidden=true;
    main[0].hidden=true;
    main[3].hidden=false;
    main[4].hidden=true;
})
btn[8].addEventListener('click',()=>{
    //alert('Your Game is Submit Succesfully');
    let a=document.getElementsByName('quiz');
    let b=document.getElementsByName('qiz');
    let c=document.getElementsByName('quz');
    let d=document.getElementsByName('uiz');
    let e=document.getElementsByName('qui');
    a.forEach((value)=>{
        if(value.checked==true){
            if(value.value=="Javascript"){
                correct++;
            }
            else{
                wrong++;
            }
        }
    })
    b.forEach((value)=>{
        if(value.checked==true){
            if(value.value=="b-Tag"){
                correct++;
            }
            else{
                wrong++;
            }
        }
    })
    c.forEach((value)=>{
        if(value.checked==true){
            if(value.value=="Bootstrap"){
                correct++;
            }
            else{
                wrong++;
            }
        }
    })
    d.forEach((value)=>{
        if(value.checked==true){
            if(value.value=="btn"){
                correct++;
            }
            else{
                wrong++;
            }
        }
    })
    e.forEach((value)=>{
        if(value.checked==true){
            if(value.value=="Blue"){
                correct++;
            }
            else{
                wrong++;
            }
        }
    })
    document.getElementById('cor').innerHTML=correct;
    document.getElementById('wro').innerHTML=wrong;
    document.getElementById('mis').innerHTML=5-(correct+wrong);
    let grade=document.getElementById('grade');
    if(correct==5){
        grade.innerHTML="Excellent..!";
        grade.className+=" text-success";
    }
    else if(correct==0){
        grade.innerHTML="Fail";
        grade.className+=" text-danger";
    }
    else if(correct==4 || correct==3){
        grade.innerHTML="Good..!";
        grade.className+=" text-primary";
    }
    else
    if(correct==2||correct==1){
        grade.innerHTML="Learn More..!";
        grade.className+=" text-info";
    }

    console.log(correct);
    console.log(wrong);
    main[5].hidden=false;
    main[0].hidden=true;
    main[1].hidden=true;
    main[2].hidden=true;
    main[3].hidden=true;
    main[4].hidden=true;
})