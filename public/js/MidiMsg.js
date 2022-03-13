
class MidiMsg {

    constructor() {
        this.cmds = [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            'Note Off',//8
            'Note On ',//9
            'Polyphonic aftertouch',//10
            'Control change',//11
            'Program change',//12
            'Channel aftertouch',//13
            'Pitch bend',//14
            'System'];//15


        this.ccs = [
            'Bank Select',//0
            'Modulation',//1
            'Breath Controller',//2
            'Undefined',//3
            'Foot Controller',//4
            'Portamento Time',//5
            'Data Entry Most Significant Bit(MSB)',//6
            'Volume',//7
            'Balance',//8
            'Undefined',//9
            'Pan',//10
            'Expression',//11
            'Effect Controller 1',//12
            'Effect Controller 2',//13
            'Undefined',//14
            'Undefined',//15
            'General Purpose',//16
            'General Purpose',//17
            'General Purpose',//18
            'General Purpose',//19
            'Undefined',//20
            'Undefined',//21
            'Undefined',//22
            'Undefined',//23
            'Undefined',//24
            'Undefined',//25
            'Undefined',//26
            'Undefined',//27
            'Undefined',//28
            'Undefined',//29
            'Undefined',//30
            'Undefined',//31
            'Least Significant Bit (LSB)',//32
            'Least Significant Bit (LSB)',//33
            'Least Significant Bit (LSB)',//34
            'Least Significant Bit (LSB)',//35
            'Least Significant Bit (LSB)',//36
            'Least Significant Bit (LSB)',//37
            'Least Significant Bit (LSB)',//38
            'Least Significant Bit (LSB)',//39
            'Least Significant Bit (LSB)',//40
            'Least Significant Bit (LSB)',//41
            'Least Significant Bit (LSB)',//42
            'Least Significant Bit (LSB)',//43
            'Least Significant Bit (LSB)',//44
            'Least Significant Bit (LSB)',//45
            'Least Significant Bit (LSB)',//46
            'Least Significant Bit (LSB)',//47
            'Least Significant Bit (LSB)',//48
            'Least Significant Bit (LSB)',//49
            'Least Significant Bit (LSB)',//50
            'Least Significant Bit (LSB)',//51
            'Least Significant Bit (LSB)',//52
            'Least Significant Bit (LSB)',//53
            'Least Significant Bit (LSB)',//54
            'Least Significant Bit (LSB)',//55
            'Least Significant Bit (LSB)',//56
            'Least Significant Bit (LSB)',//57
            'Least Significant Bit (LSB)',//58
            'Least Significant Bit (LSB)',//59
            'Least Significant Bit (LSB)',//60
            'Least Significant Bit (LSB)',//61
            'Least Significant Bit (LSB)',//62
            'Least Significant Bit (LSB)',//63
            'Damper Pedal / Sustain Pedal',//64
            'Portamento On/Off Switch',//65
            'Sostenuto On/Off Switch',//66
            'Soft Pedal On/Off Switch',//67
            'Legato FootSwitch',//68
            'Hold 2',//69
            'Sound Controller 1',//70
            'Sound Controller 2',//71
            'Sound Controller 3',//72
            'Sound Controller 4',//73
            'Sound Controller 5',//74
            'Sound Controller 6',//75
            'Sound Controller 7',//76
            'Sound Controller 8',//77
            'Sound Controller 9',//78
            'Sound Controller 10',//79
            'General Purpose Controller',//80
            'General Purpose Controller',//81
            'General Purpose Controller',//82
            'General Purpose Controller',//83
            'Portamento CC Control',//84
            '',//85
            '',//86
            '',//87
            '',//88
            '',//89
            '',//90
            'Effect 1 Depth',//91
            'Effect 2 Depth',//92
            'Effect 3 Depth',//93
            'Effect 4 Depth',//94
            'Effect 5 Depth',//95
            '(+1) Data Increment',//96
            '(-1) Data Decrement',//97
            'Non-Registered Parameter Number LSB (NRPN)',//98
            'Non-Registered Parameter Number MSB (NRPN)',//99
            'Registered Parameter Number LSB (RPN)',//100
            'Registered Parameter Number MSB (RPN)',//101
            'Undefined',//102
            'Undefined',//103
            'Undefined',//104
            'Undefined',//105
            'Undefined',//106
            'Undefined',//107
            'Undefined',//108
            'Undefined',//109
            'Undefined',//110
            'Undefined',//111
            'Undefined',//112
            'Undefined',//113
            'Undefined',//114
            'Undefined',//115
            'Undefined',//116
            'Undefined',//117
            'Undefined',//118
            'Undefined',//119
            'All Sound Off',//120
            'Reset All Controllers',//121
            'Local On/Off Switch',//122
            'All Notes Off',//123
            'Omni Mode Off',//124
            'Omni Mode On',//125
            'Mono Mode',//126
            'Poly Mode'];//127
    }
}