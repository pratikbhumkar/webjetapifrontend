export const calculateBestPrice = (cinemaworldmovieprice, filmworldmovieprice) => {
    if (cinemaworldmovieprice > filmworldmovieprice) {
        return 1;
    } else if (cinemaworldmovieprice < filmworldmovieprice) {
        return -1;
    } else {
        return 0;
    }
}

export const purchaseMovie = (supplierName, history, movie) => {
    history.push({
        pathname: '/purchase',
        state: { movie: movie }
    })
}