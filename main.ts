radio.onReceivedValue(function (name, value) {
    switch (name) {
        case "x":
            x = value
            break
        case "y":
            y = value
            break
        case "a":
            angle = value
            break
        default:
            basic.showIcon(IconNames.Sad)
            basic.showString(name, 150)
            break
    }
})
let angle = 0
let x = 0
let y = 0
OmniBit.MotorStopAll()
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    OmniBit.Handle(x, y, angle)
})
