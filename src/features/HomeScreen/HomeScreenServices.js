export const GetMovieDetails = async (cid, fid, history) => {
    var requestOptions = {
        method: 'GET'
    };
    var promises = [];
    if (cid) {
        var cinemaWorldDetails = fetch(`https://localhost:44367/api/Movies/GetMovie/Cinemaworld/${cid}`, requestOptions)
            .then(response => response.json())
        promises.push(cinemaWorldDetails);
    }

    if (fid) {
        var filmWorldDetails = fid && fetch(`https://localhost:44367/api/Movies/GetMovie/Filmworld/${fid}`, requestOptions)
            .then(response => response.json())
        promises.push(filmWorldDetails);
    }
    Promise.allSettled(promises).then((results) => {
        results.forEach(element => {
            console.log('element==',element)
        });
    })
} 