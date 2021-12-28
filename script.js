fetch("https://api.jikan.moe/v3/search/anime?q=Anime%20api/users")
.then((response)=> response.json())
.then((data)=>{
    console.log(data);

    for(let i=0; i<=50; i++){
        document.write(`${data.results[i].image_url}<br>`);
        document.write(`${data.results[i].title}<br>`);
        document.write(`${data.results[i].start_date}<br>`);
        document.write(`${data.results[i].end_date}<br>`);
        document.write(`${data.results[i].type}<br>`);
        document.write(`${data.results[i].rated}<br>`);
    }
})
.catch((error)=> document.write("Can't fetch data"));

