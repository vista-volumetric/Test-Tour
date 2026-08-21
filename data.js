var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.9417040980040525,
        "pitch": 0.46439277269707446,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -0.6461857466826224,
          "pitch": 0.6311894248043348,
          "rotation": 5.497787143782138,
          "target": "1-utility-room"
        },
        {
          "yaw": 2.579285965459726,
          "pitch": 0.6172661123387844,
          "rotation": 5.497787143782138,
          "target": "2-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-utility-room",
      "name": "Utility Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.8911875386017556,
        "pitch": 0.5944849793720621,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": 1.3534487644474744,
          "pitch": 0.913634237213417,
          "rotation": 0.7853981633974483,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.9519903318427207,
        "pitch": 0.38630550071923153,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": 1.023840997096375,
          "pitch": 0.5571457615058151,
          "rotation": 0.7853981633974483,
          "target": "0-hallway"
        },
        {
          "yaw": 3.1403100007158677,
          "pitch": 0.6492245586753782,
          "rotation": 6.283185307179586,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.49948607175535464,
          "pitch": 0.26987026230974465,
          "rotation": 0,
          "target": "10-lower-landing"
        },
        {
          "yaw": -1.8842082957478823,
          "pitch": 0.26510014938363824,
          "rotation": 5.497787143782138,
          "target": "5-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.3349661113427747,
        "pitch": 0.5161549713599651,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -1.2856869254591263,
          "pitch": 0.8298927247866317,
          "rotation": 6.283185307179586,
          "target": "2-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.8720741109435384,
        "pitch": 0.3472506080306381,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -1.7289524587194052,
          "pitch": 0.36691808212499133,
          "rotation": 0,
          "target": "0-hallway"
        },
        {
          "yaw": -0.7068028821200407,
          "pitch": 0.3787944038598141,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.42605776084233504,
          "pitch": 0.5177037301666498,
          "rotation": 0,
          "target": "5-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.1759779248655846,
        "pitch": 0.5896796083906946,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": 1.3005014622120896,
          "pitch": 0.8202119684169258,
          "rotation": 2.356194490192345,
          "target": "4-dining-room"
        },
        {
          "yaw": -2.9884538163501997,
          "pitch": 1.0384129695926738,
          "rotation": 5.497787143782138,
          "target": "6-bedroom-1"
        },
        {
          "yaw": -1.9501736097650895,
          "pitch": 1.0130592963162375,
          "rotation": 0,
          "target": "7-lower-bathroom"
        },
        {
          "yaw": 1.6563847310224364,
          "pitch": -0.08709098837926099,
          "rotation": 0.7853981633974483,
          "target": "12-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.6606995229683026,
        "pitch": 0.8075531933789541,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -0.42469763221847145,
          "pitch": 0.6690677016464797,
          "rotation": 0,
          "target": "5-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lower-bathroom",
      "name": "Lower Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.5520063978622094,
        "pitch": 0.8958278852177131,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": 2.0863597556635085,
          "pitch": 0.6425159712327417,
          "rotation": 0.7853981633974483,
          "target": "5-landing"
        },
        {
          "yaw": -1.4859144136882492,
          "pitch": 0.39632733221808536,
          "rotation": 0,
          "target": "8-upper-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upper-bathroom",
      "name": "Upper Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.980701000472905,
        "pitch": 0.9146006338256765,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -2.4337811813299925,
          "pitch": 0.886771846110193,
          "rotation": 5.497787143782138,
          "target": "7-lower-bathroom"
        },
        {
          "yaw": 0.7613650816576012,
          "pitch": 0.8090218800289204,
          "rotation": 5.497787143782138,
          "target": "9-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.0419020937877637,
        "pitch": 0.9137268687463553,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -1.156931555087425,
          "pitch": 0.7292247701473986,
          "rotation": 0.7853981633974483,
          "target": "8-upper-bathroom"
        },
        {
          "yaw": -1.6223117848212762,
          "pitch": 0.5205552916803988,
          "rotation": 2.356194490192345,
          "target": "10-lower-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-lower-landing",
      "name": "Lower Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.5021069389627577,
        "pitch": 0.7921500960644856,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -1.7216739758517665,
          "pitch": -0.23194087630559856,
          "rotation": 5.497787143782138,
          "target": "9-bedroom-2"
        },
        {
          "yaw": 0.6589117128863933,
          "pitch": 1.123913581902734,
          "rotation": 5.497787143782138,
          "target": "2-dining-room"
        },
        {
          "yaw": 1.9973053294431322,
          "pitch": 1.0744819458068626,
          "rotation": 1.5707963267948966,
          "target": "11-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.6352082849139897,
        "pitch": 0.6439540054762389,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": -2.5892968391526665,
          "pitch": 0.5543846885797912,
          "rotation": 6.283185307179586,
          "target": "10-lower-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.581893356631042,
        "pitch": 0.2844266045568027,
        "fov": 1.1217219743045672
      },
      "linkHotspots": [
        {
          "yaw": 1.2437569494290575,
          "pitch": 0.31740242148382336,
          "rotation": 10.210176124166829,
          "target": "5-landing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Littlewood Farm",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
