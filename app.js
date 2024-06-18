'use strict'

var gBallSize = 100

document.querySelector('.ball').addEventListener('click', onBallClick)


function onBallClick() {
    gBallSize === 400 ? gBallSize = 100 : gBallSize += 50
    var ball = document.querySelector('.ball')
    ball.style.height = gBallSize + 'px'
    ball.style.width = gBallSize + 'px'

    ball.innerText = gBallSize
}