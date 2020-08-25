edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    Standby_Mode()
})
input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A)
    basic.showString("x")
    basic.showNumber(B)
    basic.showString("=")
    basic.showNumber(A * B)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
function Standby_Mode () {
    basic.showIcon(IconNames.Heart)
    A = 0
    B = 0
    AxB = 0
}
let AxB = 0
let B = 0
let A = 0
Standby_Mode()
