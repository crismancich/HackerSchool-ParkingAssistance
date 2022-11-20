serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readLine())
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
