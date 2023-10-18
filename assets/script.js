const buttonNo = document.getElementById('butao2')
const OFFSET = 100

buttonNo.addEventListener('click', () =>{
    alert('Clicka no sim porfavorzinho')
    window.close()
})

document.addEventListener('mousemove',(e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = buttonNo.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x,buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffSet = buttonBox.width / 2 + OFFSET
    const verticalOffSet = buttonBox.height / 2 + OFFSET
    if(Math.abs(horizontalDistanceFrom)<= horizontalOffSet && Math.abs (verticalDistanceFrom) <= verticalOffSet) {
        setButtonPosition (
            buttonBox.x + horizontalOffSet / horizontalDistanceFrom * 10,
            buttonBox.x + verticalOffSet / verticalDistanceFrom * 10,
        )
    }
})

function setButtonPosition(left,top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = buttonNo.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + OFFSET
    }

    buttonNo.style.left = `${left}px`
    buttonNo.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePositon, boxSize){
    return boxPosition - mousePositon + boxSize / 2
}