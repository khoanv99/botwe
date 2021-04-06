function GetData() {
    let sellArr = 0
    let buyArr = 0
    let countTimer = 0
        setInterval(() => {
            countTimer++
            if (countTimer == 60) {
                sellArr = 0
                buyArr = 0
                countTimer = 0
            }
            let vol0 = document.getElementsByClassName("row-content")[0].innerText.split("\n")[1]
            let vol1 = document.getElementsByClassName("row-content")[1].innerText.split("\n")[1]
            let vol2 = document.getElementsByClassName("row-content")[2].innerText.split("\n")[1]
            let vol3 = document.getElementsByClassName("row-content")[3].innerText.split("\n")[1]
            let vol4 = document.getElementsByClassName("row-content")[4].innerText.split("\n")[1]
            let vol5 = document.getElementsByClassName("row-content")[5].innerText.split("\n")[1]
            let vol6 = document.getElementsByClassName("row-content")[6].innerText.split("\n")[1]
            let vol7 = document.getElementsByClassName("row-content")[7].innerText.split("\n")[1]
            let vol8 = document.getElementsByClassName("row-content")[8].innerText.split("\n")[1]
            let vol9 = document.getElementsByClassName("row-content")[9].innerText.split("\n")[1]
            let vol10 = document.getElementsByClassName("row-content")[10].innerText.split("\n")[1]
            let vol11 = document.getElementsByClassName("row-content")[11].innerText.split("\n")[1]
            let vol12 = document.getElementsByClassName("row-content")[12].innerText.split("\n")[1]
            let vol13 = document.getElementsByClassName("row-content")[13].innerText.split("\n")[1]
            let vol14 = document.getElementsByClassName("row-content")[14].innerText.split("\n")[1]
            let vol15 = document.getElementsByClassName("row-content")[15].innerText.split("\n")[1]
            let vol16 = document.getElementsByClassName("row-content")[16].innerText.split("\n")[1]
            let vol17 = document.getElementsByClassName("row-content")[17].innerText.split("\n")[1]

            let sell = Number(vol0) + Number(vol1) + Number(vol2) + Number(vol3)
                + Number(vol4) + Number(vol5) + Number(vol6) + Number(vol7) + Number(vol8);
            let buy = Number(vol9) + Number(vol10) + Number(vol11) + Number(vol12)
                + Number(vol13) + Number(vol14) + Number(vol15) + Number(vol16) + Number(vol17);
                if (countTimer >=23 && countTimer <=28) {
                    sellArr += sell
                    buyArr += buy
                }
            if (countTimer == 29) {
                console.log("arrsell", sellArr)
                console.log("arrbuy", buyArr)
                if (sellArr > buyArr) {
                    console.log("Gỉam")
                    clearInterval()
                } else {
                    console.log("TĂNG")
                    clearInterval()
                }
            }

        }, 1000);
}