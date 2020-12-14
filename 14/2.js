const input = [
  {
    mask: "111101X010011110100100110100101X0X0X",
    mem: [
      { address: 37049, value: 1010356 },
      { address: 5632, value: 28913 },
      { address: 9384, value: 7522 },
    ],
  },
  {
    mask: "00X1011X11X0000010100X011X10X10X10XX",
    mem: [
      { address: 25379, value: 7906399 },
      { address: 16059, value: 904 },
      { address: 2132, value: 163108832 },
    ],
  },
  {
    mask: "001X00000X011X1X100X000001X001X11XX1",
    mem: [
      { address: 2469, value: 46318 },
      { address: 24674, value: 15229 },
      { address: 30896, value: 743 },
      { address: 55599, value: 1710 },
    ],
  },
  {
    mask: "111X01X0100X111X1X010XX01X1111101100",
    mem: [
      { address: 2201, value: 2380 },
      { address: 47171, value: 21857 },
      { address: 6021, value: 7287595 },
      { address: 49580, value: 3837 },
      { address: 65412, value: 28041507 },
      { address: 32992, value: 99064028 },
    ],
  },
  {
    mask: "011111100X0101111XXX1101X0101X01X010",
    mem: [
      { address: 2629, value: 12036738 },
      { address: 60110, value: 3985 },
      { address: 41436, value: 2216 },
      { address: 19863, value: 17395296 },
    ],
  },
  {
    mask: "00100001100XXX101001X11010101X011100",
    mem: [
      { address: 16044, value: 7248570 },
      { address: 330, value: 230 },
      { address: 48382, value: 48086230 },
      { address: 40678, value: 108001 },
      { address: 62875, value: 406660 },
    ],
  },
  {
    mask: "XXX00XX000X111110X010000100X01001101",
    mem: [
      { address: 12613, value: 32311025 },
      { address: 39377, value: 34791 },
      { address: 65154, value: 966 },
      { address: 10459, value: 430 },
    ],
  },
  {
    mask: "1XX00100000111XX0X01001X00000X000100",
    mem: [
      { address: 6418, value: 116508 },
      { address: 14345, value: 12616 },
      { address: 7328, value: 187562 },
    ],
  },
  {
    mask: "X010X1X010011111X0010101X1X0X0100101",
    mem: [
      { address: 28854, value: 69124 },
      { address: 10581, value: 2102343 },
      { address: 5064, value: 8954 },
      { address: 53938, value: 9972323 },
    ],
  },
  {
    mask: "11X10110X0X111111X110001X11001011111",
    mem: [
      { address: 53175, value: 41406445 },
      { address: 44587, value: 824360210 },
      { address: 15218, value: 2192587 },
      { address: 27476, value: 146 },
      { address: 47148, value: 195 },
      { address: 30041, value: 7439 },
    ],
  },
  {
    mask: "011X1110X0XXX11110X00000100000X101X1",
    mem: [
      { address: 62141, value: 301264 },
      { address: 2797, value: 113383 },
      { address: 56055, value: 10421 },
      { address: 25190, value: 22658 },
      { address: 48346, value: 774379 },
    ],
  },
  {
    mask: "1X10011100011X1X1001101000X01X110XX0",
    mem: [
      { address: 53351, value: 7500 },
      { address: 32711, value: 35862 },
      { address: 49953, value: 136939 },
      { address: 54272, value: 653 },
      { address: 10725, value: 14756 },
    ],
  },
  {
    mask: "001X0001X001X1XX100101X00010X10X111X",
    mem: [
      { address: 5178, value: 215121044 },
      { address: 7485, value: 2612 },
      { address: 46367, value: 3136721 },
      { address: 60928, value: 952320 },
      { address: 35848, value: 30664825 },
      { address: 18833, value: 35880 },
      { address: 5251, value: 31816 },
    ],
  },
  {
    mask: "00110110110000X01010001X01XX00110011",
    mem: [
      { address: 65480, value: 33015758 },
      { address: 11882, value: 418279079 },
      { address: 12794, value: 993098 },
      { address: 14684, value: 23634 },
      { address: 5284, value: 325131 },
      { address: 53421, value: 813 },
      { address: 28834, value: 14981 },
    ],
  },
  {
    mask: "0X11001X100101111X00010XXX0110X11101",
    mem: [
      { address: 32442, value: 4146416 },
      { address: 19331, value: 885 },
      { address: 25467, value: 2204 },
      { address: 2871, value: 7670 },
    ],
  },
  {
    mask: "0X1001X0010110X1100101010X1111011000",
    mem: [
      { address: 14801, value: 2579830 },
      { address: 45126, value: 1714 },
      { address: 2338, value: 209130 },
    ],
  },
  {
    mask: "1110011X1XX111101001101X10XXX10100X0",
    mem: [
      { address: 22942, value: 859315 },
      { address: 36322, value: 1574906 },
      { address: 10928, value: 7421 },
      { address: 37807, value: 51884453 },
      { address: 9354, value: 39143194 },
      { address: 62973, value: 11860 },
    ],
  },
  {
    mask: "11X101101001X111101101001010011X1X10",
    mem: [
      { address: 31502, value: 56496763 },
      { address: 21129, value: 2962 },
      { address: 62973, value: 3663259 },
      { address: 10709, value: 6403 },
      { address: 38977, value: 15315 },
    ],
  },
  {
    mask: "01X01X10X001111X100000X0X00011X01XX1",
    mem: [
      { address: 62133, value: 498160429 },
      { address: 531, value: 553487 },
      { address: 411, value: 777030385 },
    ],
  },
  {
    mask: "X1100100X0X11111010X10X110XX1001X001",
    mem: [
      { address: 6228, value: 1713 },
      { address: 51367, value: 396473 },
      { address: 62453, value: 96391 },
    ],
  },
  {
    mask: "001XX1101100X00010100100111100001XX1",
    mem: [
      { address: 33445, value: 2761 },
      { address: 52666, value: 39423328 },
      { address: 14758, value: 622201665 },
      { address: 14945, value: 33891 },
      { address: 52088, value: 94 },
      { address: 51131, value: 22350 },
    ],
  },
  {
    mask: "X010001000011X1111011XX000010000110X",
    mem: [
      { address: 57553, value: 88950985 },
      { address: 57903, value: 440 },
      { address: 23955, value: 6318441 },
      { address: 30448, value: 946292536 },
      { address: 7028, value: 4478449 },
      { address: 31497, value: 493251886 },
      { address: 33016, value: 275462 },
    ],
  },
  {
    mask: "0XX00010100XX1110000000X111001XX01X0",
    mem: [
      { address: 3595, value: 796519126 },
      { address: 905, value: 217493 },
    ],
  },
  {
    mask: "00100X100X1110111000000X111X00001X0X",
    mem: [
      { address: 50727, value: 817675 },
      { address: 2615, value: 1140 },
      { address: 31960, value: 80747 },
      { address: 19071, value: 167215900 },
      { address: 3408, value: 540853 },
      { address: 16589, value: 5161 },
    ],
  },
  {
    mask: "0X0001X0001111110101001X10000X001001",
    mem: [
      { address: 14467, value: 115424408 },
      { address: 4421, value: 203554 },
      { address: 39690, value: 43419 },
      { address: 60124, value: 20364545 },
      { address: 4045, value: 592 },
    ],
  },
  {
    mask: "00110X1X10X010X0101X0X0X1110010X01X1",
    mem: [
      { address: 33919, value: 3440852 },
      { address: 4168, value: 5247 },
      { address: 62598, value: 3006098 },
      { address: 985, value: 803 },
      { address: 53351, value: 31335 },
      { address: 6231, value: 934222 },
    ],
  },
  {
    mask: "011000XX10X11111X00X00000001X001000X",
    mem: [
      { address: 27828, value: 24343 },
      { address: 2504, value: 1003 },
      { address: 18671, value: 4434215 },
      { address: 58493, value: 59534182 },
    ],
  },
  {
    mask: "00100XXXX0011X11X001000010X11100X1X1",
    mem: [
      { address: 3324, value: 1293 },
      { address: 10581, value: 136295 },
    ],
  },
  {
    mask: "001X0110101X10001XXXX001101100000X10",
    mem: [
      { address: 49440, value: 53178 },
      { address: 42866, value: 824856 },
      { address: 29940, value: 24261823 },
      { address: 34839, value: 24643 },
      { address: 15218, value: 25062 },
      { address: 16615, value: 532684240 },
    ],
  },
  {
    mask: "100X01011001101110011010100111X11X1X",
    mem: [
      { address: 37973, value: 398383827 },
      { address: 9995, value: 60944 },
      { address: 50087, value: 213 },
      { address: 10877, value: 24617462 },
      { address: 22319, value: 98329242 },
      { address: 18804, value: 8442 },
      { address: 15218, value: 6567 },
    ],
  },
  {
    mask: "011X00101000X1110001X111X00001010000",
    mem: [
      { address: 1144, value: 191 },
      { address: 4977, value: 25877834 },
      { address: 61839, value: 891 },
      { address: 28455, value: 1803393 },
      { address: 20126, value: 304512 },
      { address: 5157, value: 53364453 },
    ],
  },
  {
    mask: "0X10X11010011111X00XX000XX1X10110000",
    mem: [
      { address: 56583, value: 121318560 },
      { address: 2527, value: 4351729 },
      { address: 35848, value: 107737120 },
    ],
  },
  {
    mask: "1010011100X10111100X10X01111110001X0",
    mem: [
      { address: 27109, value: 567808 },
      { address: 33424, value: 1664 },
      { address: 2527, value: 34412 },
    ],
  },
  {
    mask: "11XX0100X0011111010011010X10X0001111",
    mem: [
      { address: 51781, value: 85436 },
      { address: 55487, value: 140238989 },
      { address: 43566, value: 3597793 },
      { address: 18841, value: 1770027 },
      { address: 353, value: 39838355 },
      { address: 46209, value: 75205509 },
    ],
  },
  {
    mask: "0X010010X0X1011110X0110011001011XX00",
    mem: [
      { address: 333, value: 584 },
      { address: 37351, value: 35049323 },
      { address: 50567, value: 8503452 },
      { address: 50009, value: 1037 },
      { address: 41067, value: 558449 },
      { address: 48631, value: 124 },
      { address: 40369, value: 113478590 },
    ],
  },
  {
    mask: "0101XX11X0010111100001X11101001X1001",
    mem: [
      { address: 28490, value: 181563760 },
      { address: 18571, value: 8337 },
      { address: 44808, value: 1314 },
    ],
  },
  {
    mask: "1010011100X111X0XX01000X00X1XXX10101",
    mem: [
      { address: 43089, value: 1900272 },
      { address: 6977, value: 22862 },
      { address: 49214, value: 2431545 },
    ],
  },
  {
    mask: "01X000X010X01111000100X1XX0011X11101",
    mem: [
      { address: 14804, value: 26046 },
      { address: 9366, value: 60909483 },
      { address: 16097, value: 238936 },
    ],
  },
  {
    mask: "01001010100X1111X000X00010011001X010",
    mem: [
      { address: 2523, value: 6760572 },
      { address: 12107, value: 433898 },
      { address: 57031, value: 77090 },
      { address: 33537, value: 362161 },
    ],
  },
  {
    mask: "1X10001000011111110X0100X1X10000000X",
    mem: [
      { address: 39070, value: 303156 },
      { address: 41188, value: 1047577 },
      { address: 41056, value: 3574711 },
      { address: 11162, value: 1738300 },
    ],
  },
  {
    mask: "0X100X1X0X0110111001000000X111010001",
    mem: [
      { address: 3493, value: 2425241 },
      { address: 31960, value: 96 },
      { address: 34845, value: 221 },
      { address: 64844, value: 233 },
    ],
  },
  {
    mask: "0X100X0100X1X11X1001X1000110X010101X",
    mem: [
      { address: 39377, value: 104653 },
      { address: 65436, value: 149841506 },
      { address: 22237, value: 3616149 },
      { address: 61480, value: 7187 },
      { address: 27012, value: 7017895 },
    ],
  },
  {
    mask: "00XX0101000111X11001X010100X10XX1XX1",
    mem: [
      { address: 50003, value: 2355 },
      { address: 469, value: 88842 },
      { address: 25093, value: 1179395 },
    ],
  },
  {
    mask: "0110010X1001111101000X11100101X0X001",
    mem: [
      { address: 50334, value: 50100973 },
      { address: 35316, value: 21836 },
      { address: 61908, value: 22783 },
      { address: 21656, value: 197177 },
    ],
  },
  {
    mask: "0010001010X111110X0X10001010X1010111",
    mem: [
      { address: 29845, value: 143666 },
      { address: 32060, value: 561672787 },
      { address: 36707, value: 405059 },
      { address: 19863, value: 162 },
      { address: 25227, value: 188028832 },
      { address: 2066, value: 162548071 },
      { address: 45165, value: 259779 },
    ],
  },
  {
    mask: "1010010000011X1X0X010X10100011X00000",
    mem: [
      { address: 5284, value: 8659870 },
      { address: 5336, value: 164190934 },
      { address: 48215, value: 20381190 },
      { address: 9554, value: 17192 },
      { address: 47703, value: 4580 },
    ],
  },
  {
    mask: "111X0110100111111001X000100X1X0XXX0X",
    mem: [
      { address: 17439, value: 219185 },
      { address: 34316, value: 7642851 },
      { address: 16097, value: 1322995 },
      { address: 63489, value: 26333 },
      { address: 8564, value: 239317 },
    ],
  },
  {
    mask: "001X0X1110X11011XX010000111X00111110",
    mem: [
      { address: 2549, value: 48026 },
      { address: 49893, value: 529734 },
      { address: 12282, value: 10740 },
    ],
  },
  {
    mask: "X01X0X0XX0X111X11X01001010100101111X",
    mem: [
      { address: 2527, value: 3463 },
      { address: 30720, value: 760291 },
      { address: 15059, value: 83546 },
      { address: 19085, value: 37777469 },
      { address: 53803, value: 552 },
      { address: 9990, value: 880 },
      { address: 40536, value: 2290 },
    ],
  },
  {
    mask: "X110001010111111XX000000X00X0100X010",
    mem: [
      { address: 15218, value: 12935 },
      { address: 18551, value: 450 },
      { address: 30680, value: 520194451 },
      { address: 36464, value: 6697282 },
      { address: 36217, value: 51281648 },
    ],
  },
  {
    mask: "X0100101X001X0110001000000X010000101",
    mem: [
      { address: 65308, value: 11452431 },
      { address: 32308, value: 578640 },
      { address: 33016, value: 395020 },
      { address: 146, value: 4075063 },
      { address: 10581, value: 6323 },
    ],
  },
  {
    mask: "111X011010X1X1111001101101000X000100",
    mem: [
      { address: 1124, value: 939 },
      { address: 59082, value: 1101187 },
      { address: 771, value: 3031 },
      { address: 40567, value: 304221164 },
      { address: 30736, value: 723012 },
    ],
  },
  {
    mask: "001000010X0111XXX0X1001000X11100X000",
    mem: [
      { address: 37497, value: 12765 },
      { address: 42349, value: 345 },
      { address: 38653, value: 22973 },
      { address: 23706, value: 32907 },
      { address: 2325, value: 57317553 },
      { address: 14023, value: 2586828 },
    ],
  },
  {
    mask: "0X00111X000111111000000000010X0X1100",
    mem: [
      { address: 8589, value: 417 },
      { address: 10771, value: 261822994 },
      { address: 39783, value: 2745013 },
      { address: 49893, value: 449844 },
      { address: 4972, value: 822896 },
    ],
  },
  {
    mask: "00X100011001010XX0X10001XX100100111X",
    mem: [
      { address: 49414, value: 834562 },
      { address: 17225, value: 1582894 },
      { address: 23955, value: 3148561 },
      { address: 12247, value: 56753 },
    ],
  },
  {
    mask: "X010000001X11XX010X100X0X10010100010",
    mem: [
      { address: 3449, value: 152127 },
      { address: 12501, value: 17379211 },
    ],
  },
  {
    mask: "0X1000X010011XX11001011001010010X100",
    mem: [
      { address: 49214, value: 3490251 },
      { address: 41052, value: 328973 },
    ],
  },
  {
    mask: "001X0X0000X1X01XXX010XX1110010010001",
    mem: [
      { address: 28455, value: 29564233 },
      { address: 26490, value: 414988 },
      { address: 19657, value: 13471121 },
      { address: 45429, value: 79102559 },
    ],
  },
  {
    mask: "01100100100111X1XX0XX010X00X1X1101X0",
    mem: [
      { address: 2501, value: 227077 },
      { address: 4763, value: 339106 },
      { address: 16589, value: 43005 },
      { address: 2325, value: 1301 },
      { address: 61707, value: 110061832 },
    ],
  },
  {
    mask: "0010001000X110X110XX000011010XX10110",
    mem: [
      { address: 19243, value: 31993 },
      { address: 5497, value: 16163 },
      { address: 49219, value: 376 },
      { address: 2293, value: 70350 },
      { address: 6805, value: 2436214 },
    ],
  },
  {
    mask: "0100X101X0011111100100X0001XX1011X01",
    mem: [
      { address: 11655, value: 5152 },
      { address: 31460, value: 11602 },
      { address: 4977, value: 145091169 },
      { address: 42202, value: 833458 },
      { address: 29542, value: 711 },
      { address: 12217, value: 5625 },
    ],
  },
  {
    mask: "XX1001X01001111110010XX01X0111X10101",
    mem: [
      { address: 31497, value: 253099 },
      { address: 20926, value: 12754500 },
      { address: 46425, value: 39605909 },
      { address: 16087, value: 71713 },
      { address: 29845, value: 25701 },
      { address: 1168, value: 234 },
    ],
  },
  {
    mask: "0111001X1011X11110000X11000100X001X0",
    mem: [
      { address: 62012, value: 1540164 },
      { address: 22679, value: 534776422 },
      { address: 17479, value: 137590180 },
      { address: 10339, value: 38375 },
      { address: 37358, value: 447 },
      { address: 56428, value: 23904960 },
    ],
  },
  {
    mask: "001000X000011011110X0X1000X11001010X",
    mem: [
      { address: 8739, value: 33671897 },
      { address: 24788, value: 95773 },
      { address: 45589, value: 44176 },
      { address: 1168, value: 79291 },
      { address: 16933, value: 53672410 },
      { address: 45502, value: 106610 },
      { address: 54973, value: 17925 },
    ],
  },
  {
    mask: "0X0X1X101X01101110001100000X010X00X1",
    mem: [
      { address: 37609, value: 71849 },
      { address: 45642, value: 2382124 },
      { address: 47190, value: 50948518 },
      { address: 15016, value: 972332 },
      { address: 44808, value: 11636 },
    ],
  },
  {
    mask: "000100100X11X1111010X10011X000111001",
    mem: [
      { address: 28997, value: 1558 },
      { address: 2528, value: 234583 },
      { address: 51337, value: 1525 },
      { address: 64900, value: 38121855 },
      { address: 53607, value: 21522241 },
      { address: 8665, value: 16698630 },
      { address: 2825, value: 4655465 },
    ],
  },
  {
    mask: "1X11011010X1111110X10XX11X00000XX100",
    mem: [
      { address: 47190, value: 353685875 },
      { address: 60172, value: 923 },
      { address: 28868, value: 112106 },
      { address: 36463, value: 36720 },
      { address: 26769, value: 2479472 },
      { address: 38188, value: 28414 },
    ],
  },
  {
    mask: "1X10011XX001X11X100110001XX011X1000X",
    mem: [
      { address: 37152, value: 3921062 },
      { address: 63714, value: 30760 },
      { address: 42997, value: 955114 },
      { address: 41168, value: 1065869 },
      { address: 61522, value: 3462489 },
    ],
  },
  {
    mask: "XX1X010000111111X100XX01X0X011011X01",
    mem: [
      { address: 42280, value: 139618 },
      { address: 36909, value: 189834 },
      { address: 20969, value: 33843 },
      { address: 16059, value: 18609129 },
      { address: 41693, value: 2838 },
      { address: 2417, value: 501526 },
      { address: 37152, value: 70388201 },
    ],
  },
  {
    mask: "X01001000X011111000XX0000000X1010100",
    mem: [
      { address: 808, value: 2969 },
      { address: 35836, value: 1345 },
      { address: 6157, value: 596830 },
      { address: 12107, value: 119 },
      { address: 20072, value: 25414 },
    ],
  },
  {
    mask: "001X0010000110111X01XX00X0001X010X01",
    mem: [
      { address: 26904, value: 185000628 },
      { address: 2031, value: 18885539 },
      { address: 11204, value: 6826362 },
    ],
  },
  {
    mask: "01110010X011011XX000111X000X110001X1",
    mem: [
      { address: 31647, value: 22585 },
      { address: 38116, value: 33020167 },
      { address: 32992, value: 217342345 },
      { address: 41167, value: 3050 },
      { address: 61980, value: 4001756 },
      { address: 62005, value: 19633 },
    ],
  },
  {
    mask: "11110110100111X110010011X00X0110100X",
    mem: [
      { address: 11108, value: 1045 },
      { address: 16463, value: 730 },
      { address: 44526, value: 3005934 },
      { address: 16120, value: 14440473 },
    ],
  },
  {
    mask: "00100X101X01101X1X0X00XX111X011001X1",
    mem: [
      { address: 29849, value: 1224 },
      { address: 496, value: 14957 },
      { address: 55083, value: 194047 },
      { address: 42431, value: 11237807 },
    ],
  },
  {
    mask: "001101011001X1X11X01X0XX000X110X101X",
    mem: [
      { address: 3845, value: 21873557 },
      { address: 48657, value: 334901 },
      { address: 13919, value: 29628952 },
      { address: 42349, value: 6148 },
    ],
  },
  {
    mask: "111X011010X1111X1001X011X1X0001XX00X",
    mem: [
      { address: 48724, value: 70703519 },
      { address: 11408, value: 4581 },
      { address: 57553, value: 85089 },
    ],
  },
  {
    mask: "01X00010X0X0X1110X01000X000111010111",
    mem: [
      { address: 2143, value: 531 },
      { address: 59659, value: 2027 },
    ],
  },
  {
    mask: "0010XXX1X00111111001001X101111010110",
    mem: [
      { address: 2293, value: 5556 },
      { address: 13572, value: 489821002 },
      { address: 328, value: 346 },
      { address: 51240, value: 56336112 },
      { address: 11162, value: 655 },
      { address: 41419, value: 3227 },
      { address: 9636, value: 1286 },
    ],
  },
  {
    mask: "111001001X01X11X100100X1100X010011X1",
    mem: [
      { address: 31352, value: 15612 },
      { address: 61439, value: 349664457 },
      { address: 985, value: 3131435 },
    ],
  },
  {
    mask: "001101101XX0XX0010100X01101X0X0X011X",
    mem: [
      { address: 3595, value: 903157 },
      { address: 18722, value: 2090814 },
      { address: 44603, value: 7639414 },
      { address: 40369, value: 3205 },
      { address: 52725, value: 783 },
      { address: 48724, value: 705041 },
    ],
  },
  {
    mask: "0011001010101XX010X110X010100X110X01",
    mem: [
      { address: 14902, value: 25442 },
      { address: 59213, value: 659231 },
      { address: 1584, value: 3041350 },
    ],
  },
  {
    mask: "X10X1XX0100X1X1X10X00000100010001001",
    mem: [
      { address: 63266, value: 16366 },
      { address: 44587, value: 1548 },
      { address: 5271, value: 17272 },
      { address: 2683, value: 130438219 },
    ],
  },
  {
    mask: "X01X0110101X1XXX101110011X010X100X00",
    mem: [
      { address: 23078, value: 26703985 },
      { address: 65154, value: 1358 },
      { address: 36912, value: 299 },
    ],
  },
  {
    mask: "001X001010011X1100001X00100000X10X01",
    mem: [
      { address: 8920, value: 313883810 },
      { address: 2506, value: 3273 },
      { address: 25221, value: 9461384 },
      { address: 33362, value: 736 },
    ],
  },
  {
    mask: "001000X00X011X11000X00001000X0110010",
    mem: [
      { address: 2031, value: 1010 },
      { address: 61542, value: 13692 },
      { address: 5497, value: 3407774 },
    ],
  },
  {
    mask: "00100000X10XX011100XX1110X001X011001",
    mem: [
      { address: 15608, value: 515444 },
      { address: 56525, value: 185613 },
      { address: 32303, value: 16754 },
    ],
  },
  {
    mask: "0001X11111X0XX00101000100011X1101000",
    mem: [
      { address: 30591, value: 25695 },
      { address: 37807, value: 116328 },
      { address: 6242, value: 234258 },
    ],
  },
  {
    mask: "111001XX100111X11001X0101000X0100100",
    mem: [
      { address: 32442, value: 2767797 },
      { address: 4593, value: 1693 },
    ],
  },
  {
    mask: "0X10001010XX1111000XX0XX100111011XX1",
    mem: [
      { address: 6033, value: 8168 },
      { address: 8528, value: 388750736 },
    ],
  },
  {
    mask: "010X11101X111111X0000010X00100101X01",
    mem: [
      { address: 7469, value: 45 },
      { address: 61980, value: 27055 },
      { address: 65447, value: 194171 },
    ],
  },
  {
    mask: "101X011010X1111X100101X01X0110010100",
    mem: [
      { address: 39746, value: 1296 },
      { address: 353, value: 48147876 },
      { address: 26904, value: 1727 },
    ],
  },
  {
    mask: "0000X11X00111111010X0X010000X0000X11",
    mem: [
      { address: 61522, value: 1753 },
      { address: 23985, value: 23215529 },
      { address: 11204, value: 72089150 },
      { address: 61128, value: 804774 },
      { address: 36744, value: 27992562 },
    ],
  },
  {
    mask: "XXXX0X0110011X1110010XX01010X1011100",
    mem: [
      { address: 3953, value: 37147 },
      { address: 11231, value: 10994 },
      { address: 58707, value: 39480 },
    ],
  },
  {
    mask: "101001X0001111X1110X0X11000000XX1001",
    mem: [
      { address: 39732, value: 4528 },
      { address: 11954, value: 14445 },
      { address: 28017, value: 43025334 },
      { address: 2269, value: 394695349 },
      { address: 31909, value: 11219 },
      { address: 28113, value: 63433 },
    ],
  },
  {
    mask: "01XX001X1001X1111000X10XX1X110110X01",
    mem: [
      { address: 11408, value: 332041 },
      { address: 24495, value: 10080269 },
      { address: 56525, value: 12577593 },
    ],
  },
  {
    mask: "00X0X1101X0X101110000X101X1011101X10",
    mem: [
      { address: 33357, value: 4390 },
      { address: 53607, value: 951 },
      { address: 24287, value: 266786 },
      { address: 13131, value: 18212 },
      { address: 603, value: 79598 },
      { address: 35836, value: 26511461 },
    ],
  },
  {
    mask: "X0100111001111001XX1X1XXX011000110X0",
    mem: [
      { address: 52978, value: 1985754 },
      { address: 39100, value: 1279 },
      { address: 34231, value: 116905 },
      { address: 16439, value: 896 },
    ],
  },
  {
    mask: "010011101XX1111X100000000000XX10110X",
    mem: [
      { address: 699, value: 8153 },
      { address: 15621, value: 3406 },
      { address: 3084, value: 60170404 },
    ],
  },
  {
    mask: "01XX00101011X1X1100000100X0XX11XX000",
    mem: [
      { address: 6391, value: 812 },
      { address: 4690, value: 7757 },
      { address: 36912, value: 1021 },
      { address: 50287, value: 633592703 },
    ],
  },
  {
    mask: "0110XX10XX100111101011X1X010110X00X1",
    mem: [
      { address: 55972, value: 5779 },
      { address: 32157, value: 293228 },
      { address: 56428, value: 1966 },
      { address: 18030, value: 3580797 },
      { address: 38977, value: 489 },
      { address: 34180, value: 8866609 },
    ],
  },
];

const decimalToBinary = (decimal, length = 36) => decimal.toString(2).padStart(length, 0);
const binaryToDecimal = binary => parseInt(binary, 2);

const getMaskedValue = (mask, value) => mask.split('').reduce((prev, curr, index) => {
  return `${prev}${curr === '0' ? value[index] : curr}`;
}, '');

const replaceFlotingBit = (address, x) => address.split('X').reduce((addr, curr, index) => {
  return `${addr}${curr}${x[index] || ''}`;
}, '');

const getAllAddressCombination = maskedAddress => {
  const totalX = maskedAddress.match(/X/g).length

  const addresses = [];
  for (let i = 0; i < 2 ** totalX; i++) {
    xPositions = decimalToBinary(i, totalX);
    addresses.push(replaceFlotingBit(maskedAddress, xPositions));
  }

  return addresses;
}

const output = {};
input.forEach(({ mask, mem }) => {
  mem.forEach(({ address, value }) => {
    let binaryValue = decimalToBinary(address);
    let maskedAddresses = getMaskedValue(mask, binaryValue);

    let addresses = getAllAddressCombination(maskedAddresses);
    addresses.forEach((actualAddress) => {
      output[binaryToDecimal(actualAddress)] = value;
    })
  })
});

const sum = Object.values(output).reduce((sum, value) => sum + value, 0);
console.log(sum);
