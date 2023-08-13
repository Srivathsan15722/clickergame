let click = 0
input.onButtonPressed(Button.A, function () {
    display()
})
function display () {
    click += 1
}
input.onButtonPressed(Button.B, function () {
    click = 0
})
basic.forever(function () {
    basic.showNumber(click)
})
