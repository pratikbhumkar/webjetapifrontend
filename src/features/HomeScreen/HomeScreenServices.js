export const GetMovieDetails = async (cid, fid, history, dispatch) => {
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
            if (element.status === "fulfilled" && element.value.provider === "Cinemaworld") {
                dispatch({ type: 'SET_CINEMAWORLDMOVIE', payload: element.value })
            }else if (element.status === "fulfilled" && element.value.provider === "Filmworld"){
                dispatch({ type: 'SET_FILMWORLDMOVIE', payload: element.value })
            }
        });
        history.push('/moviedetails')
    })
} 