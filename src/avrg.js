function avrg(n1 , n2) {
    let avrgPrice = parseFloat(n1) + parseFloat(n2)
    // console.log("Sum prices : ", avrgPrice);
    avrgPrice = avrgPrice / 2
    // console.log("avrgPrice : ", avrgPrice);

    return avrgPrice.toFixed(2)
}

module.exports = avrg