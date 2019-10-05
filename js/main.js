


// xhttp.onreadystatechange = function () {
//     console.log("estado ", this.onreadyState , "estatus " ,xhttp.status)
//     if(this.readyState === 4 && this.status === 200){
//        var objetResponse = JSON.parse(this.response)
//        console.log(objetResponse)
//     }

// }

var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let response = JSON.parse(this.response)
    handlerResponse(response)
    for (objetos in response){
        handlerResponse(response[objetos]);
        document.getElementById("row").innerHTML += card
    }
  }
}

const PAGINA = "https://ajaxkode.firebaseio.com/posts.json";


xhttp.open('GET', PAGINA);
xhttp.send();

const handlerResponse = (response) => {
    
    
    card = `
    
    <div class="card col-lg-3 col-sm-12 col-md-3 justify-content-center">
    <img class="card-img-top" src=${response.img} alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${response.title}</h5>
    <p class="card-text">${response.author}</p>
    </div>
    </div>`
return card;
  }
  






var post = {
    title: "El clase final",
    description: "La final de modula 2",
    img: "https://www.udiscovermusic.com/wp-content/uploads/2019/05/Blink-182-and-Lil-Wayne-Tour.jpg",
    author: "Edvardo Rico",
    date: "04/10/19"
    }


