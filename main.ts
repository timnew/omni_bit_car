radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    } else if (name == "a") {
        angle = value
    } else {
        basic.showIcon(IconNames.Sad)
        basic.showString(name)
    }
})
let angle = 0
let y = 0
let x = 0
OmniBit.MotorStopAll()
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    OmniBit.Handle(x, y, angle)
})
