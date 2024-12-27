input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(0, 100))
})
basic.showString("LOVE METER")
basic.forever(function () {
    music.play(music.stringPlayable("A F E F B G F G ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A G A C5 B C5 - ", 120), music.PlaybackMode.UntilDone)
})
