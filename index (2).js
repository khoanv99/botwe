
function Running(target, stoploss) {
    var avg_price, avg_price_after_30s;
    var amount_before, amount_after;
    var count = 0;
    const vongoc = document.getElementsByClassName("price")[1].textContent.substr(2, document.getElementsByClassName("price")[1].textContent.length).replace(',', '')
    setInterval(() => {
        var today, hh, pp, ss, timeCurrent;
        today = new Date();
        hh = today.getHours()
        pp = today.getMinutes()
        ss = today.getSeconds();
        timeCurrent = hh + ':' + pp + ':' + ss
        if (amount_before - vongoc >= target || vongoc - amount_before >= stoploss) {
            clearInterval()
            return
        }
        if ($(".btnSuccess").is(":disabled") == false) {
            if (document.getElementById("time").textContent.replace("s", "") == 15) {
                amount_after = document.getElementsByClassName("price")[1].textContent.substr(2, document.getElementsByClassName("price")[1].textContent.length).replace(',', '')
            }
            if (document.getElementById("time").textContent.replace("s", "") == 10) {

                // console.log('[' + timeCurrent + ']' + "amount_after: " + amount_after)
                // console.log('[' + timeCurrent + ']' + "amount_before: " + amount_before)
                $(".btnClear").click();
                $("#cong5").click();
                // if (amount_after - amount_before >= 0 || amount_after == undefined || amount_before == undefined) {
                //     count = 0;
                //     $("#cong5").click();
                //     console.log('[' + timeCurrent + ']' + "price 5")
                // } else {
                //     count++
                // }

                // if (count == 1) {
                //     $("#cong5").click();
                //     console.log('[' + timeCurrent + ']' + "price 5")
                // } else if (count == 2) {
                //     $("#cong10").click();
                //     console.log('[' + timeCurrent + ']' + "price 10")
                // }
                // else if (count == 3) {
                //     $("#cong20").click();
                //     console.log('[' + timeCurrent + ']' + "price 20")
                // }
                // else if (count == 4) {
                //     $("#cong20").click();
                //     $("#cong20").click();
                //     console.log('[' + timeCurrent + ']' + "price 40")
                // }
                // else if (count == 5) {
                //     $("#cong50").click();
                //     $("#cong20").click();
                //     console.log('[' + timeCurrent + ']' + "price 70")
                // }
                // else if (count == 6) {
                //     $("#cong100").click();
                //     $("#cong50").click();
                //     console.log('[' + timeCurrent + ']' + "price 150")
                // } else if (count > 6) {
                //     clearInterval();
                //     return
                // }
            }
        }
    }, 1000);

    setInterval(() => {
        if (amount_before - vongoc >= target || vongoc - amount_before >= stoploss) {
            clearInterval()
            return
        }
        var today, hh, pp, ss, timeCurrent;
        today = new Date();
        hh = today.getHours()
        pp = today.getMinutes()
        ss = today.getSeconds();
        timeCurrent = hh + ':' + pp + ':' + ss
        if ($(".btnSuccess").is(":disabled") == false) {
            if (document.getElementById("time").textContent.replace("s", "") == 30) {

                avg_price = document.getElementsByClassName("plotlineChart")[0].firstElementChild.innerHTML
                // console.log('[' + timeCurrent + ']' + "avg_price: " + avg_price)
            }
        }

    }, 1000);

    setInterval(() => {
        var today, hh, pp, ss, timeCurrent;
        today = new Date();
        hh = today.getHours()
        pp = today.getMinutes()
        ss = today.getSeconds();
        timeCurrent = hh + ':' + pp + ':' + ss
        if (amount_before - vongoc >= target || vongoc - amount_before >= stoploss) {
            clearInterval()
            return
        }
        if ($(".btnSuccess").is(":disabled") == false) {

            if (document.getElementById("time").textContent.replace("s", "") == 2) {
                avg_price_after_30s = document.getElementsByClassName("plotlineChart")[0].firstElementChild.innerHTML
                amount_before = document.getElementsByClassName("price")[1].textContent.substr(2, document.getElementsByClassName("price")[1].textContent.length).replace(',', '')
                // console.log('[' + timeCurrent + ']' + "avg_price_after_30s: " + avg_price_after_30s)
                if (avg_price_after_30s != 0 && avg_price != 0 &&
                    avg_price_after_30s != undefined && avg_price != undefined) {
                    if (avg_price_after_30s - avg_price > 0) {
                        $(".btnSuccess").click();
                        $(".btnClear").click();
                        // console.log('[' + timeCurrent + ']' + "Tăng")
                    } else {
                        $(".btnDown").click();
                        $(".btnClear").click();
                        // console.log('[' + timeCurrent + ']' + "Gỉam")
                    }
                }
            }

        }
    }, 1000);
}

