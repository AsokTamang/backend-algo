function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: Math.random(0,3).toFixed(2),  //here we are getting the random numbers between 0 and 3 and then fixing the decimal upto 2
        time:new Date().toLocaleTimeString()
    }
}
console.log(getStockData())  


const playlistHtml = []


    playlistHtml.push(

`<section class="card">
    <div class="card-start">
        <img src="/images/${playlistArr[i].albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${playlistArr[i].title}</h4>
            <p class="card-artist">${playlistArr[i].artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
    )


document.getElementById('container').innerHTML = playlistHtml


//we use map method only when it is required to return the new array
//and we use forEach method when it is required for just iterating over the array but not to return the new array