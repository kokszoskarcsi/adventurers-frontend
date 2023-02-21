function themeSelector(){
    if(document.body.classList.contains('black')){
        document.body.classList.remove('black');
        const collection = document.querySelectorAll('p,a,h1');
        for(let i=0; i< collection.length; i++){
            collection[i].style.color = "var(--light)";
        }
        const divcollection = document.querySelectorAll('div');
        for(let i=0; i< divcollection.length; i++){
            divcollection[i].style.borderColor = "var(--light)";
        }
        document.getElementById("Gallery").style.backgroundColor = "var(--light)"
        const buttonCollection = document.querySelectorAll('button');
        for(let i=0; i< buttonCollection.length; i++){
            buttonCollection[i].style.backgroundColor = "var(--light)";
        }
        document.querySelector(':root').style.backgroundColor = "var(--light)";
    }
    else{
        document.body.classList.add('black');
        const collection = document.querySelectorAll('p,a,h1');
        for(let i=0; i< collection.length; i++){
            collection[i].style.color = "var(--dark_text_color)";
        }
        const divcollection = document.querySelectorAll('div, img');
        for(let i=0; i< divcollection.length; i++){
            divcollection[i].style.borderColor = "var(--dark)";
        }
        document.getElementById("Gallery").style.backgroundColor = "var(--dark)"
        const buttonCollection = document.querySelectorAll('button');
        for(let i=0; i< buttonCollection.length; i++){
            buttonCollection[i].style.backgroundColor = "var(--dark_text_color)";
        }
        document.querySelector(':root').style.backgroundColor = "var(--dark)";
    }
}

export default themeSelector;