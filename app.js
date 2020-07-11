
const DOM={}

function Card(){
    DOM.card=$("#container")
    const text=$("#text").val()
    const url=$("#url").val()

    const mainDiv=$("div")
    mainDiv.css({"width":"15rem", "border":"solid 1px black"})

    const img = $('<img id="image">'); 
img.attr('src', url);
img.addClass("card-img-top")
img.appendTo(mainDiv);

const p = $("<p></p>")
p.text(text)
p.addClass("card-text")
p.appendTo(mainDiv);

const btn1 = $("<button></button>")
btn1.attr('id', 'btn11')
btn1.text("Like")
btn1.appendTo(mainDiv);

DOM.card.append(mainDiv)


const p1 = $("<p></p>")
    p1.addClass("card-text")
    p1.appendTo(mainDiv);


function clickss(){
    let clicks=0;
   
    $("#btn11").on("click" , ()=>{
        setTimeout(() => {
            p1.html(clicks)
        }, 2000);
      
        clicks++
    })
    
}
clickss()

}



$("#btn").on("click",Card)


