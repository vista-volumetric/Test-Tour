var APP_DATA = {
  "scenes": [
    {
      "id": "0-boot",
      "name": "Boot",
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
        "yaw": -0.2558986265091008,
        "pitch": 0.06263054505478394,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": -0.773445029631791,
          "pitch": 0.22417117688887167,
          "rotation": 0,
          "target": "1-utility"
        },
        {
          "yaw": 2.542285704944759,
          "pitch": 0.13627659133491576,
          "rotation": 0,
          "target": "2-dinner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-utility",
      "name": "Utility",
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
        "yaw": -1.8303108456794508,
        "pitch": 0.19604227336063929,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": 1.4270325923735605,
          "pitch": 0.3388448838952556,
          "rotation": 0,
          "target": "1-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinner",
      "name": "Dinner",
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
        "yaw": -1.6360109118575092,
        "pitch": 0.12275963170737825,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": 1.0252416779773394,
          "pitch": 0.5333482763676329,
          "rotation": 0,
          "target": "0-boot"
        },
        {
          "yaw": 0.4724117038246085,
          "pitch": 0.24205992647091712,
          "rotation": 0,
          "target": "6-landing-2"
        },
        {
          "yaw": -1.326121511914387,
          "pitch": 0.3235509968980619,
          "rotation": 0,
          "target": "3-dinner-2"
        },
        {
          "yaw": -3.022837421975181,
          "pitch": 0.3229382977417199,
          "rotation": 0,
          "target": "4-kittchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dinner-2",
      "name": "Dinner 2",
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
        "yaw": -0.6754844611660555,
        "pitch": 0.030910124498642944,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": -1.3000850389047436,
          "pitch": 0.38814153900847437,
          "rotation": 0,
          "target": "2-dinner"
        },
        {
          "yaw": 0.4405673429270536,
          "pitch": 0.5371499721323794,
          "rotation": 0,
          "target": "5-landing1"
        },
        {
          "yaw": -0.6433436252952411,
          "pitch": 0.1977580292479395,
          "rotation": 0,
          "target": "4-kittchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kittchen",
      "name": "Kittchen",
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
        "yaw": 1.5922945179913777,
        "pitch": 0.1571242568198521,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": -1.2710961470471052,
          "pitch": 0.7141315023946202,
          "rotation": 0,
          "target": "2-dinner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-landing1",
      "name": "Landing1",
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
        "yaw": -2.2371399999409363,
        "pitch": 0.3645007450473887,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": -1.785871349059942,
          "pitch": 0.6735489164694304,
          "rotation": 0,
          "target": "8-bathroom-1"
        },
        {
          "yaw": -3.0765097072917484,
          "pitch": 0.6757534354135011,
          "rotation": 0,
          "target": "7-main-bed"
        },
        {
          "yaw": 1.6767106938650507,
          "pitch": 0.07374991982675638,
          "rotation": 0,
          "target": "11-attic-bed"
        },
        {
          "yaw": 1.2045055833064904,
          "pitch": 0.8627582912896603,
          "rotation": 0,
          "target": "2-dinner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-landing-2",
      "name": "Landing 2",
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
        "yaw": -2.0207990847455157,
        "pitch": -0.007457001684844755,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": 0.45977715522512064,
          "pitch": 0.7958330333250672,
          "rotation": 5.497787143782138,
          "target": "2-dinner"
        },
        {
          "yaw": 2.0637668612525877,
          "pitch": 0.7610966393008436,
          "rotation": 0.7853981633974483,
          "target": "12-living"
        },
        {
          "yaw": -1.593967421391472,
          "pitch": -0.020794627815938327,
          "rotation": 0,
          "target": "10-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-main-bed",
      "name": "Main Bed",
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
        "yaw": 1.104291415513801,
        "pitch": 0.24809243127634772,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": -0.3610394517014832,
          "pitch": 0.537774329366906,
          "rotation": 0,
          "target": "5-landing1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom-1",
      "name": "Bathroom 1",
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
        "yaw": 1.4697780063186752,
        "pitch": 0.16129751713018514,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": 2.1324177597853424,
          "pitch": 0.4323642932555316,
          "rotation": 0.7853981633974483,
          "target": "5-landing1"
        },
        {
          "yaw": -1.4991981457601362,
          "pitch": 0.3504108669069037,
          "rotation": 0,
          "target": "9-bathroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom2",
      "name": "Bathroom2",
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
        "yaw": -0.6392127557253939,
        "pitch": 0.36792125899226136,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": 0.8011777656340211,
          "pitch": 0.548056136173031,
          "rotation": 4.71238898038469,
          "target": "10-bedroom-2"
        },
        {
          "yaw": 1.4411751133431157,
          "pitch": 0.6804933229857575,
          "rotation": 2.356194490192345,
          "target": "6-landing-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-2",
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
        "yaw": 1.828730606600577,
        "pitch": 0.6530007565398108,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": -1.0935722654443474,
          "pitch": 0.44617991647974264,
          "rotation": 1.5707963267948966,
          "target": "9-bathroom2"
        },
        {
          "yaw": -1.5873263807367195,
          "pitch": 0.64851974357064,
          "rotation": 0,
          "target": "6-landing-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-attic-bed",
      "name": "Attic Bed",
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
        "yaw": -1.5485240202089283,
        "pitch": 0.1887322693456781,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": 1.5607707493218808,
          "pitch": 0.4577496647165926,
          "rotation": 3.9269908169872414,
          "target": "5-landing1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-living",
      "name": "Living",
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
        "yaw": 2.8180546583152832,
        "pitch": 0.46736261456401706,
        "fov": 1.9184108952289325
      },
      "linkHotspots": [
        {
          "yaw": -2.6135113682915154,
          "pitch": 0.4776449249710364,
          "rotation": 0,
          "target": "6-landing-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
