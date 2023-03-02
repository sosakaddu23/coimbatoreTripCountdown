const finalTime = new Date('Mar 24, 2023 14:00:00').getTime()
let x = setInterval(() => {
    let now = new Date().getTime()
    let distance = finalTime - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('days').innerHTML = ('0' + days).slice(-2)
    document.getElementById('hours').innerHTML = ('0' + hours).slice(-2)
    document.getElementById('minutes').innerHTML = ('0' + minutes).slice(-2)
    document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2)
}, 1000)
