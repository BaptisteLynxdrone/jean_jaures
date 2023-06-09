var APP_DATA = {
  "scenes": [
    {
      "id": "0-jean_jaurs_face_gauche",
      "name": "jean_jaurès_face_gauche",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8695526585281552,
        "pitch": -0.2830558094435034,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.0334053635447136,
          "pitch": 0.3015489597774881,
          "rotation": 10.995574287564278,
          "target": "1-jean_jaurs_face_milieu"
        },
        {
          "yaw": 1.290544244497129,
          "pitch": -0.014994175030834,
          "rotation": 5.497787143782138,
          "target": "3-jean_jaurs_porte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-jean_jaurs_face_milieu",
      "name": "jean_jaurès_face_milieu",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.21612088411693087,
        "pitch": -0.6633224090245537,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -1.5374537699132063,
          "pitch": 0.1728432773555575,
          "rotation": 1.5707963267948966,
          "target": "0-jean_jaurs_face_gauche"
        },
        {
          "yaw": 1.7142164787840501,
          "pitch": 0.17096353171330847,
          "rotation": 4.71238898038469,
          "target": "2-jean_jaurs_face_droite"
        },
        {
          "yaw": -1.0842052533250346,
          "pitch": -0.06449254280117067,
          "rotation": 0.7853981633974483,
          "target": "3-jean_jaurs_porte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-jean_jaurs_face_droite",
      "name": "jean_jaurès_face_droite",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5678332502701622,
        "pitch": -0.57035885622156,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -1.53646712386184,
          "pitch": 0.19513138119924278,
          "rotation": 1.5707963267948966,
          "target": "1-jean_jaurs_face_milieu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-jean_jaurs_porte",
      "name": "jean_jaurès_porte",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.072050392807043,
        "pitch": 0.48975617226043155,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -3.004034853204118,
          "pitch": 0.42457929135748174,
          "rotation": 0,
          "target": "4-couloir_entree"
        },
        {
          "yaw": -1.1847928080756756,
          "pitch": 0.16402988898632742,
          "rotation": 4.71238898038469,
          "target": "2-jean_jaurs_face_droite"
        },
        {
          "yaw": -0.7044711543282656,
          "pitch": 0.5752390868440145,
          "rotation": 4.71238898038469,
          "target": "1-jean_jaurs_face_milieu"
        },
        {
          "yaw": 1.2692741717384184,
          "pitch": 0.5499378221118079,
          "rotation": 2.356194490192345,
          "target": "0-jean_jaurs_face_gauche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-couloir_entree",
      "name": "couloir_entreée",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.931380140153772,
        "pitch": 0.24885809092454103,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -2.9697678228471034,
          "pitch": 0.6171328755326666,
          "rotation": 0,
          "target": "6-salle_effondr_rdc"
        },
        {
          "yaw": -1.4603009258771067,
          "pitch": 0.43269153611096733,
          "rotation": 0,
          "target": "3-jean_jaurs_porte"
        },
        {
          "yaw": 0.10008003448319158,
          "pitch": 0.3559068042117115,
          "rotation": 0,
          "target": "7-premire_pice_rdc"
        },
        {
          "yaw": 1.7131290083097506,
          "pitch": 0.28980709259782955,
          "rotation": 0,
          "target": "5-couloir_cours"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-couloir_cours",
      "name": "couloir_cours",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.280313043038138,
        "pitch": 0.09078884416481259,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.796973094708573,
          "pitch": 0.520613699873433,
          "rotation": 0,
          "target": "4-couloir_entree"
        },
        {
          "yaw": 2.796325267927564,
          "pitch": 0.22132993948615898,
          "rotation": 0,
          "target": "3-jean_jaurs_porte"
        },
        {
          "yaw": -2.65122587493196,
          "pitch": 0.6402908733150632,
          "rotation": 0.7853981633974483,
          "target": "8-deuixime_pice_rdc"
        },
        {
          "yaw": -2.720623468117161,
          "pitch": 0.2516095746217104,
          "rotation": 18.84955592153877,
          "target": "7-premire_pice_rdc"
        },
        {
          "yaw": -0.36471078719023886,
          "pitch": 0.514627090652743,
          "rotation": 0,
          "target": "9-cours_rdc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salle_effondr_rdc",
      "name": "salle_effondré_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4533261012214584,
        "pitch": -0.41756400051325215,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 0.16413652786854271,
          "pitch": 0.8435153784488119,
          "rotation": 0,
          "target": "4-couloir_entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-premire_pice_rdc",
      "name": "première_pièce_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.479832442740536,
        "pitch": 0.29419810137078883,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 0.17169569336435764,
          "pitch": 0.1936987060675719,
          "rotation": 0,
          "target": "6-salle_effondr_rdc"
        },
        {
          "yaw": -0.39188480136153814,
          "pitch": 0.4220250010854265,
          "rotation": 0,
          "target": "4-couloir_entree"
        },
        {
          "yaw": -1.704513973344019,
          "pitch": 0.20515140850081082,
          "rotation": 0,
          "target": "8-deuixime_pice_rdc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-deuixime_pice_rdc",
      "name": "deuixième_pièce_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0076651358232986,
        "pitch": 0.3517318962095679,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 0.11816849326466539,
          "pitch": 0.4720103857496891,
          "rotation": 0,
          "target": "5-couloir_cours"
        },
        {
          "yaw": 1.8815345688902259,
          "pitch": 0.35691348175021353,
          "rotation": 0,
          "target": "7-premire_pice_rdc"
        },
        {
          "yaw": -1.4249058616873853,
          "pitch": 0.2160818885340774,
          "rotation": 0,
          "target": "9-cours_rdc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cours_rdc",
      "name": "cours_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1248097057758635,
        "pitch": 0.33337923222255483,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -0.33967499848158944,
          "pitch": 0.44033260633065296,
          "rotation": 0.7853981633974483,
          "target": "5-couloir_cours"
        },
        {
          "yaw": 0.7033301535357737,
          "pitch": 0.35508965640221213,
          "rotation": 0,
          "target": "8-deuixime_pice_rdc"
        },
        {
          "yaw": -1.4876688712531294,
          "pitch": 0.3493530188665801,
          "rotation": 0,
          "target": "10-abris_cours_rdc"
        },
        {
          "yaw": 1.5081016884280984,
          "pitch": 0.36086651405770453,
          "rotation": 0,
          "target": "13-escalier_rdc"
        },
        {
          "yaw": 2.0007406954366393,
          "pitch": 0.05644378245169257,
          "rotation": 0,
          "target": "14-escalier_tage1"
        },
        {
          "yaw": 1.9411216561165343,
          "pitch": -0.8752110226601406,
          "rotation": 0,
          "target": "18-cours_tage1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-abris_cours_rdc",
      "name": "abris_cours_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8323877971049942,
        "pitch": 0.30962337909169513,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 1.7454505410783598,
          "pitch": 0.5702313217726243,
          "rotation": 0,
          "target": "9-cours_rdc"
        },
        {
          "yaw": 1.1823778513411103,
          "pitch": 0.32081766433247694,
          "rotation": 4.71238898038469,
          "target": "5-couloir_cours"
        },
        {
          "yaw": -0.8688798693459887,
          "pitch": 0.3584724207238956,
          "rotation": 5.497787143782138,
          "target": "11-couloir_2_rdc"
        },
        {
          "yaw": 1.6046589987193691,
          "pitch": 0.20133388461868051,
          "rotation": 0,
          "target": "13-escalier_rdc"
        },
        {
          "yaw": 1.8746251625779013,
          "pitch": 0.060005880844059334,
          "rotation": 0,
          "target": "14-escalier_tage1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-couloir_2_rdc",
      "name": "couloir_2_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9248325604832672,
        "pitch": 0.32371104243364357,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -2.8908910007547703,
          "pitch": 0.425287224081611,
          "rotation": 1.5707963267948966,
          "target": "12-couloir_3_rdc"
        },
        {
          "yaw": 0.8872061423181421,
          "pitch": 0.4473904878761594,
          "rotation": 0.7853981633974483,
          "target": "10-abris_cours_rdc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-couloir_3_rdc",
      "name": "couloir_3_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9757871291794524,
        "pitch": 0.5223308426190432,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -0.3139199577117271,
          "pitch": 0.06202298528970651,
          "rotation": 0,
          "target": "11-couloir_2_rdc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-escalier_rdc",
      "name": "escalier_rdc",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.49073985367963324,
        "pitch": 0.16508731810186994,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 0.9178065674084834,
          "pitch": 0.47089593324970735,
          "rotation": 0,
          "target": "9-cours_rdc"
        },
        {
          "yaw": 0.9575826805901553,
          "pitch": 0.18931886344819304,
          "rotation": 0,
          "target": "10-abris_cours_rdc"
        },
        {
          "yaw": 1.5710577953317983,
          "pitch": 0.35246767784602007,
          "rotation": 1.5707963267948966,
          "target": "8-deuixime_pice_rdc"
        },
        {
          "yaw": 1.1865543190786383,
          "pitch": 0.21923354911955428,
          "rotation": 1.5707963267948966,
          "target": "5-couloir_cours"
        },
        {
          "yaw": -0.8059525230055193,
          "pitch": -0.42481989719867563,
          "rotation": 6.283185307179586,
          "target": "14-escalier_tage1"
        },
        {
          "yaw": 0.6694608777136253,
          "pitch": -0.9212846335268026,
          "rotation": 0,
          "target": "17-escalier_tage2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-escalier_tage1",
      "name": "escalier_étage1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0704610935316854,
        "pitch": 0.42333542164089266,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.272946928390729,
          "pitch": 0.9034347566478562,
          "rotation": 5.497787143782138,
          "target": "9-cours_rdc"
        },
        {
          "yaw": -2.8026559617476927,
          "pitch": 1.0421278039195947,
          "rotation": 1.5707963267948966,
          "target": "13-escalier_rdc"
        },
        {
          "yaw": -2.6963848156211476,
          "pitch": -0.007974938234372786,
          "rotation": 0,
          "target": "15-pice1_tage1"
        },
        {
          "yaw": 1.8688030161932128,
          "pitch": -0.593651526372895,
          "rotation": 0,
          "target": "17-escalier_tage2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pice1_tage1",
      "name": "pièce1_étage1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3075412942628475,
        "pitch": 0.47077238926223863,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -0.9478119724437946,
          "pitch": 0.493723426948911,
          "rotation": 0,
          "target": "16-pice2_tage2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pice2_tage2",
      "name": "pièce2_étage2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.048332194670614115,
        "pitch": 0.4798257044403691,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.1113612040868706,
          "pitch": 0.9610137905184235,
          "rotation": 0,
          "target": "15-pice1_tage1"
        },
        {
          "yaw": 2.70423574875377,
          "pitch": 0.5970622328106288,
          "rotation": 1.5707963267948966,
          "target": "14-escalier_tage1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-escalier_tage2",
      "name": "escalier_étage2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.716873300455653,
        "pitch": 0.3658988514995176,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.31837529754789,
          "pitch": 0.7301185044423768,
          "rotation": 5.497787143782138,
          "target": "15-pice1_tage1"
        },
        {
          "yaw": -3.0922866693489865,
          "pitch": 1.0959089420226125,
          "rotation": 2.356194490192345,
          "target": "14-escalier_tage1"
        },
        {
          "yaw": 0.17473982967047696,
          "pitch": 0.6016578532638874,
          "rotation": 0,
          "target": "18-cours_tage1"
        },
        {
          "yaw": 2.364434753068257,
          "pitch": -0.04326944435954161,
          "rotation": 0,
          "target": "19-pice1_tage2"
        },
        {
          "yaw": 1.243511843892346,
          "pitch": -0.863170723141149,
          "rotation": 5.497787143782138,
          "target": "20-escalier_tage3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-cours_tage1",
      "name": "cours_étage1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4631648524412633,
        "pitch": 0.18369223913639487,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -2.685466936793837,
          "pitch": 1.3831519791348832,
          "rotation": 0,
          "target": "9-cours_rdc"
        },
        {
          "yaw": -0.08125207302031257,
          "pitch": 0.8646562930483217,
          "rotation": 0,
          "target": "17-escalier_tage2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pice1_tage2",
      "name": "pièce1_étage2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.962468850301196,
        "pitch": 0.5040617331593182,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 0.16491171526562454,
          "pitch": 0.7523251251570997,
          "rotation": 0,
          "target": "17-escalier_tage2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-escalier_tage3",
      "name": "escalier_étage3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9207795946749524,
          "pitch": -0.08649134855129148,
          "rotation": 0,
          "target": "21-palier_tage3"
        },
        {
          "yaw": -0.015250254873880209,
          "pitch": -0.11556171111531022,
          "rotation": 5.497787143782138,
          "target": "22-pice1_tage3"
        },
        {
          "yaw": -0.16661621930668602,
          "pitch": 0.724735990110732,
          "rotation": 5.497787143782138,
          "target": "19-pice1_tage2"
        },
        {
          "yaw": 0.6857663151833773,
          "pitch": 1.2114977744757613,
          "rotation": 2.356194490192345,
          "target": "17-escalier_tage2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.248147402874845,
          "pitch": 0.23306151571498646,
          "title": "Porte",
          "text": "Rue Lamar"
        }
      ]
    },
    {
      "id": "21-palier_tage3",
      "name": "palier_étage3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.19591860476084477,
        "pitch": 0.07683220391798073,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": -0.917088862466862,
          "pitch": 1.32147333886871,
          "rotation": 0,
          "target": "20-escalier_tage3"
        },
        {
          "yaw": 2.86838575940034,
          "pitch": 0.6425565291484183,
          "rotation": 5.497787143782138,
          "target": "22-pice1_tage3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6148692489791703,
          "pitch": 0.6905510271897093,
          "title": "Porte",
          "text": "Rue Lamar"
        }
      ]
    },
    {
      "id": "22-pice1_tage3",
      "name": "pièce1_étage3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4076741365050456,
        "pitch": 0.39228756440926205,
        "fov": 1.4612050697485615
      },
      "linkHotspots": [
        {
          "yaw": 2.853350392978781,
          "pitch": 0.6994438755522285,
          "rotation": 0,
          "target": "21-palier_tage3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
