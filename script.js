let toggler = document.querySelector('.hamburger')
let innerdiv = document.querySelector('.nav-inner-div')
let info = document.querySelector('.info')
let sentence = "I'm a\xa0";
let panels = document.querySelectorAll('.panel') //3 panels

let carousel = [
    {text:'Developer', color:'#FFC600'},
    {text:'Student', color:'#5800FF'},
    {text:'Learner', color:'#16FF00'}
]

///////////////hamburger code.///////////////////

toggler.addEventListener('click' , ()=>{
    innerdiv.classList.toggle('shownavbar');
})




panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActive();
        panel.classList.add('active');
        panel.classList.remove('not-active')
        panel.querySelector('.heading').classList.remove('vert')
        panel.querySelector('.heading').classList.add('horiz')
        panel.querySelector('.heading-content').classList.add('show')
        
    })
})

const removeActive = ()=>{
    panels.forEach((panel)=>{
            panel.classList.remove('active')
            panel.classList.add('not-active')
            panel.querySelector('.heading-content').classList.remove('show')
            panel.querySelector('.heading').classList.add('vert')
            panel.querySelector('.heading').classList.remove('horiz')

    })
}




const multipleTyping = async(carousel,sentence, delay)=>{

    await typer(sentence,delay);
    
    let i = 0;
    while(true)
    {
        await changeColor(carousel[i].color)
        await typeFeature(carousel[i].text,delay);
        await waitFunction(3000);
        await deleter(delay);
        i++;
        if(i>=carousel.length){
            i=0;
        }
    }

}



const typer = async (sentence, delay) => {

    let arr = sentence.split("");//split coverts a string to array based on the parameter we give

    let i = 0;

    //loop for typing...
    while (i < arr.length) {
        await waitFunction(delay);

        info.innerHTML += arr[i];

        i++;
    }

}
const typeFeature = async (sentence, delay) => {

    let arr = sentence.split("");//split coverts a string to array based on the parameter we give

    let i = 0;

    //loop for typing...
    while (i < arr.length) {
        await waitFunction(delay);

        document.querySelector(".feature-text").innerHTML += arr[i];

        i++;
    }

}

const deleter = async (delay) => {

    let text = document.querySelector(".feature-text");
    let arr = text.innerHTML.split("");
    let i = arr.length ;

    while(i>0)
    {
        await waitFunction(delay)
        arr.pop();
        text.innerHTML = arr.join("");
        i--;
    }
    

}

const changeColor = async(str)=>{
    document.querySelector(".feature-text").style.color = str;
}

const waitFunction = async (delay) => {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    })

    return promise1;
}


multipleTyping(carousel,sentence,100); 



