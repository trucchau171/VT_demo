var APP_DATA = {
  "scenes": [
    {
      "id": "0-cng-chnh",
      "name": "Cổng chính",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -2.4041372108932517,
        "pitch": -0.3520005598640594,
        "fov": 1.524857298584402
      },
      "linkHotspots": [
        {
          "yaw": -2.756090377339657,
          "pitch": 0.04201811362520047,
          "rotation": 0,
          "target": "1-snh-a1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-snh-a1",
      "name": "Sảnh A1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.10053932560444778,
        "pitch": -0.004959047871453848,
        "fov": 1.524857298584402
      },
      "linkHotspots": [
        {
          "yaw": -1.1901127437593235,
          "pitch": 0.23918989009328584,
          "rotation": 5.497787143782138,
          "target": "3-hi-sinh-vin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vn-thng-uyn",
      "name": "Vườn thượng uyển",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.32492831819042856,
        "pitch": -0.007349890289706451,
        "fov": 1.524857298584402
      },
      "linkHotspots": [
        {
          "yaw": -2.8215049457333734,
          "pitch": 0.18475555055960768,
          "rotation": 7.0685834705770345,
          "target": "4-tng-7"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.46573600468544285,
          "pitch": 0.26020451657213073,
          "title": "Vườn thượng uyển:",
          "text": "Vườn thượng uyển info"
        }
      ]
    },
    {
      "id": "3-hi-sinh-vin",
      "name": "Hội sinh viên",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.795362455318978,
        "pitch": 0.2542639341025996,
        "fov": 1.524857298584402
      },
      "linkHotspots": [
        {
          "yaw": 2.868600370668551,
          "pitch": 0.2115027220460135,
          "rotation": 0,
          "target": "2-vn-thng-uyn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tng-7",
      "name": "Tầng 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.10769052831455106,
        "pitch": -0.09788176027633533,
        "fov": 1.524857298584402
      },
      "linkHotspots": [
        {
          "yaw": -2.934626874701097,
          "pitch": 0.3619229724977764,
          "rotation": 0.7853981633974483,
          "target": "0-cng-chnh"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
