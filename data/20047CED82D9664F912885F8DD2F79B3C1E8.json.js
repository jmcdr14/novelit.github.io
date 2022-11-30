GS.dataCache['20047CED82D9664F912885F8DD2F79B3C1E8'] = {
    "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Settings Menu",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 4,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In the scene we make our settings menu. We use an image-map to keep things simple. Feel free to use pictures, videos, hotspots, etc. to make it more dynamic.\n\nWe add hotspots on the image-map for ON/OFF like settings. Whenever a hotspot is clicked, a switch is turned ON/OFF and we jump to the approriate label to check the switches and use Set Game Data command to change the settings interally.\n\nFor each slider, we create an independent 20x23 pixel draggable hotspot. The track-rect covers the entire slider-area, means that the 20x23 pixel hotspot can be dragged only horizontal and cannot leave the left and right bounds of the slider. If a hotspot is draggable, we can store the position of the hotspot as a percentage in a variable. That percentage is 0% if the hotspot hits the left-edge of the track-rect and 100% if the hotspot hits the right-edge of the track-rect. For Example: For the Text Speed slider, we store the percentage in local number variable \"0001: Text Speed X\".\n\nWhenever the hotspot is dragged, we jump to the appropriate \"On Drag - XXX\" label and call the \"Update Slider\" common event. We pass the percentage value, the max. value of the settings as parameter so that common event can update the visual representation of the slider. That common event will also convert the percentage-value into the correct internal value and stores it into the global variable we pass as parameter. So after we called that common event, the global variable contains the correct internal value so we can use that variable as input for Set Game Data command. Check out \"Update Slider\" common event in database."
                },
                "indent": 0,
                "uid": "B20BF46E702E4341F35B29275CA1DCDE7DAB",
                "expanded": false
            },
            {
                "id": "gs.FreezeScreen",
                "params": {},
                "indent": 0,
                "uid": "0E7F2D8354B3924C5B7BE666B258F816571D"
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 100,
                    "hotspots": [
                        {
                            "x": 603,
                            "y": 59,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1194,
                                "y": 655,
                                "width": 55,
                                "height": 65,
                                "action": 1,
                                "label": "back",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 103,
                                "height": 72
                            }
                        },
                        {
                            "x": 810,
                            "y": 176,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 295,
                                "y": 178,
                                "width": 137,
                                "height": 27,
                                "action": 1,
                                "label": "display_window",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Display - Window",
                                    "index": 0,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 141,
                                "height": 27
                            }
                        },
                        {
                            "x": 953,
                            "y": 172,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 313,
                                "y": 123,
                                "width": 169,
                                "height": 35,
                                "action": 1,
                                "label": "display_fullscreen",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Display - Fullscreen",
                                    "index": 1,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 169,
                                "height": 35
                            }
                        },
                        {
                            "x": 949,
                            "y": 229,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 315,
                                "y": 186,
                                "width": 79,
                                "height": 40,
                                "action": 1,
                                "label": "skipmsg_all_msg",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Msg - All Msg.",
                                    "index": 2,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 131,
                                "height": 35
                            }
                        },
                        {
                            "x": 807,
                            "y": 229,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 519,
                                "y": 50,
                                "width": 117,
                                "height": 41,
                                "action": 1,
                                "label": "skipmsg_seen_msg",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Msg - Seen Msg.",
                                    "index": 3,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 117,
                                "height": 35
                            }
                        },
                        {
                            "x": 805,
                            "y": 266,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 860,
                                "y": 300,
                                "width": 142,
                                "height": 36,
                                "action": 1,
                                "label": "skip_choices",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Choices",
                                    "index": 4,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 142,
                                "height": 30
                            }
                        },
                        {
                            "x": 949,
                            "y": 266,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1005,
                                "y": 300,
                                "width": 123,
                                "height": 36,
                                "action": 1,
                                "label": "skip_voices",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Skip Voices",
                                    "index": 5,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 123,
                                "height": 31
                            }
                        },
                        {
                            "x": 591,
                            "y": 619,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 591,
                                "y": 619,
                                "width": 198,
                                "height": 83,
                                "action": 1,
                                "label": "title",
                                "bindToSwitch": false,
                                "bindEnabledState": true,
                                "enabledSwitch": {
                                    "name": "In Game",
                                    "scope": 1,
                                    "index": 0,
                                    "changed": true,
                                    "domain": "com.degica.vnm.default"
                                },
                                "bindValueTo": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 198,
                                "height": 83
                            }
                        },
                        {
                            "x": 918,
                            "y": 607,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 918,
                                "y": 607,
                                "width": 264,
                                "height": 96,
                                "action": 1,
                                "label": "reset_global",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "finish": false,
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false,
                                "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54"
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 264,
                                "height": 96
                            }
                        }
                    ],
                    "ground": {
                        "name": "Settings_Idle.png",
                        "folderPath": "Graphics/Pictures/In-Game UI",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "hover": {
                        "name": "Settings_Hover.png",
                        "folderPath": "Graphics/Pictures/In-Game UI",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "unselected": null,
                    "selected": {
                        "name": "Settings_Hover.png",
                        "folderPath": "Graphics/Pictures/In-Game UI",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "selectedHover": {
                        "name": "Settings_Hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 1,
                        "blendMode": 0,
                        "origin": 1
                    },
                    "blendMode": 0,
                    "zOrder": 0,
                    "numberDomain": "com.degica.vnm.default",
                    "predefinedPositionId": 0
                },
                "indent": 0,
                "expanded": true,
                "uid": "6B8039632E6606400968EDA71C17D9E02727"
            },
            {
                "id": "gs.GetInputData",
                "params": {
                    "field": 0,
                    "state": 0,
                    "targetVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "12D6D22237BD05464E59E9E7D937C5BDF785"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 10,
                    "targetVariable": {
                        "name": "Text Speed",
                        "index": 2,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4D306D664E1499430E8B04D3AF01F13B9BC7"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 12,
                    "targetVariable": {
                        "name": "Auto Duration",
                        "index": 3,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "07E80ABC56D3F042338BCE71001A7762CDF5"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 22,
                    "targetVariable": {
                        "name": "Music Volume",
                        "index": 4,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "ED7067282C226946AC29C7968DA596CAA78B"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 24,
                    "targetVariable": {
                        "name": "Sound Volume",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C823B8155D80E64BA11B5A6738484031B912"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 23,
                    "targetVariable": {
                        "name": "Voice Volume",
                        "index": 6,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "389C98A644F37244E1492861587211F4C9D7"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C32487F42E31464625691786E4D7DC60F21C",
                    "parameters": {
                        "values": [
                            999,
                            817,
                            363,
                            5,
                            3
                        ]
                    }
                },
                "indent": 0,
                "uid": "EA8B73F251A80545E66BD1B705708070DF98"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C32487F42E31464625691786E4D7DC60F21C",
                    "parameters": {
                        "values": [
                            1001,
                            817,
                            397,
                            5,
                            4
                        ]
                    }
                },
                "indent": 0,
                "uid": "B577C8CF10981749241872C78B8AFD49CE55"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C32487F42E31464625691786E4D7DC60F21C",
                    "parameters": {
                        "values": [
                            1003,
                            817,
                            493,
                            100,
                            5
                        ]
                    }
                },
                "indent": 0,
                "uid": "6A255BFC7E41F347E979F051425841668D3A"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C32487F42E31464625691786E4D7DC60F21C",
                    "parameters": {
                        "values": [
                            1005,
                            817,
                            527,
                            100,
                            6
                        ]
                    }
                },
                "indent": 0,
                "uid": "CAFE80818ED7F442CB0A03326AC1DBD13D8D"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "C32487F42E31464625691786E4D7DC60F21C",
                    "parameters": {
                        "values": [
                            1007,
                            817,
                            561,
                            100,
                            7
                        ]
                    }
                },
                "indent": 0,
                "uid": "89A543EC7081A240F61963181D38193C019E"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 0.06
                },
                "indent": 0,
                "uid": "F2C6081A2ACBB54CA46AB491EB65CFC9D478"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 19,
                    "targetVariable": {
                        "name": "Display - Fullscreen",
                        "index": 1,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "72B7E0167C37B243392AAC616DE47A92DDD1"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 19,
                    "targetVariable": {
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F3E78E0063F8D543BB7B901817B324D29F98"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "374E8E26249D384EE938396527A37D22B0CC"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 9,
                    "targetVariable": {
                        "name": "Skip Msg - All Msg.",
                        "index": 2,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C282926E29AF454B6D58B514745818DD0EC0"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 9,
                    "targetVariable": {
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B3D5271922C2B34505381C33653D5611339B"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 2,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "0AAA95AE0FCE21450849D7380877E146D9E7"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 17,
                    "targetVariable": {
                        "name": "Continue Skipping",
                        "index": 4,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "31117EC5690F9649703810A3E6376EBA0294"
            },
            {
                "id": "vn.GetGameData",
                "params": {
                    "field": 18,
                    "targetVariable": {
                        "name": "Stop Skipping",
                        "index": 5,
                        "scope": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "778755086811A948747AC5F34DA61DB00072"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 1.2
                },
                "indent": 0,
                "uid": "C3E2B55042B41249B83959E5EDCD74D4ED5F"
            },
            {
                "id": "gs.ScreenTransition",
                "params": {
                    "graphic": null,
                    "duration": 30,
                    "vague": 30,
                    "fieldFlags": {
                        "graphic": 1,
                        "vague": 1,
                        "duration": 0
                    }
                },
                "uid": "F6815A101913F64F0518A4324EF6B22A8C4E",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "6F0E9C2D77B91540D74A7568DBE89B0141D1"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "back"
                },
                "indent": 0,
                "uid": "1188736F548DA34FDA48EEE9806DA2EF8435"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 2,
                    "numberValue": 0,
                    "textValue": "",
                    "switchValue": 0,
                    "decimalValue": {
                        "name": "Text Speed",
                        "index": 2,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "B8AD8EF84CCFB54F7C69F0B1837B24ABCDF2"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 4,
                    "numberValue": {
                        "name": "Auto Duration",
                        "index": 3,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "textValue": "",
                    "switchValue": 0,
                    "decimalValue": {
                        "name": "Auto Duration",
                        "index": 3,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    }
                },
                "indent": 0,
                "uid": "3644AF1D6F16C540E80BD4A61485B3B033D1"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 14,
                    "numberValue": {
                        "name": "Music Volume",
                        "index": 4,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "textValue": "",
                    "switchValue": 0,
                    "decimalValue": {
                        "name": "Auto Duration",
                        "index": 3,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "7D0FC0077F3ED64979591BE230A869B830BE"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 16,
                    "numberValue": {
                        "name": "Sound Volume",
                        "index": 5,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "textValue": "",
                    "switchValue": 0,
                    "decimalValue": {
                        "name": "Auto Duration",
                        "index": 3,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "882BBC547A2BC64B662B85938CC7AE905632"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 15,
                    "numberValue": {
                        "name": "Voice Volume",
                        "index": 6,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "textValue": "",
                    "switchValue": 0,
                    "decimalValue": {
                        "name": "Auto Duration",
                        "index": 3,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "EB307D0A4F271143D53B7306CFA43E26F10D"
            },
            {
                "id": "gs.SaveSettings",
                "params": {},
                "indent": 0,
                "uid": "082AD4346B1CD248D6699913879FDC9D2AAE"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "F91D83398563294C9728BDA6F632F38B01DB",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "CF5974B2405F9844F9187458B196D92869D5"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "In Settings Menu",
                        "index": 4,
                        "scope": 1,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "738051D58233D6480C58663018A5A4552202"
            },
            {
                "id": "vn.ReturnToPreviousScene",
                "params": {},
                "indent": 0,
                "uid": "AD70A38143B0B14D562ACAF1F3AAC35A8AB7"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "1EB0CBD37D16F84D463B6772A85D433CF468"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "save"
                },
                "indent": 0,
                "uid": "5F2BF1741359644BE279306579D90BD945D9"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "788F76F4231BE442882AEDA37BCF0AE6556B",
                        "name": "Save Menu"
                    },
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 1
                },
                "indent": 0,
                "uid": "185BF80C8B24F8474A691782E9434E8D22D3",
                "expanded": false
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "18D761617DE4234C2E4AB3A3AE5E82ED3C7F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "load"
                },
                "indent": 0,
                "uid": "A3B5E76342AF044FBE3973B79C0C917D8360"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
                        "name": "Load Menu"
                    },
                    "duration": 20,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "savePrevious": 1
                },
                "indent": 0,
                "uid": "E155581C23E1A449AF7899732A7F5372AEAC"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "734EDAEC2608E54DAA2B41763CFE16AF7B1C"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "title"
                },
                "indent": 0,
                "uid": "80DE0FDD48698849358AF3C4C813CD4CD2A5"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "2379347586025344D738BEE5A39A37A44990",
                    "parameters": {
                        "values": [
                            "Graphics/Pictures/In-Game UI/Prompt_Quit.png",
                            "FDE10D61363F62471D2990437FBB8C1DBA5B",
                            0
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E505B2153FCEE249150890593F2F53C05481"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "4997617001B6B74E00296224EEF27BCBBD6B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "reset_global"
                },
                "indent": 0,
                "uid": "AF564D4C653ED1463F8A3637EEB915D5F1E9"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "2379347586025344D738BEE5A39A37A44990",
                    "parameters": {
                        "values": [
                            "Graphics/Pictures/In-Game UI/Prompt_Confirm_SaveLoad.png",
                            "7EE85C655388A944A87909421BAD5A565F5D",
                            0
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "25AE4F5125BD2445298B8178A0999CFA1DC1"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "675BC1397B024345813A9EE2F045129B065C"
            },
            {
                "id": "gs.Comment",
                "params": {
                    "text": "Here we Change the settings\n\n\n\n"
                },
                "indent": 0,
                "uid": "A854D6527D0C304BE77966A7CB6FC3E05363",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "display_window"
                },
                "indent": 0,
                "uid": "1A6C28CE572AA248C619CC877B03CD2B8AF3"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Display - Fullscreen",
                        "index": 1,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "C44F1EAE5765E7458E9BE838BEBE5EA24EF7"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 11,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "B766460D83FB9540D71B06B2DF2CA3CA4030"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "B1D1E2964824844D5B3B4912CF2E2A160116"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "display_fullscreen"
                },
                "indent": 0,
                "uid": "D880BD56335C63427128FC468DCA0305DCB6"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Display - Window",
                        "index": 0,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "4CCCCE6F443EE7418F3BA432895652974064"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 11,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 1
                },
                "indent": 0,
                "uid": "0D73B4EE69FC814C2B0B6BD961881A8405B3"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "20BF569814A1E449F04BF7453F69EBA60743"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skipmsg_all_msg"
                },
                "indent": 0,
                "uid": "8A9F712D69A699413459BA8606C7EFB82855"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Skip Msg - Seen Msg.",
                        "index": 3,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "D5DA946E871D65472F1ABBD6F0DD7FCD3EB9"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 1,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 1
                },
                "indent": 0,
                "uid": "0A989B0910B301434D181084E83C69A832EB"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "771837C915E96946614A40B17A22B945D0DD"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skipmsg_seen_msg"
                },
                "indent": 0,
                "uid": "6238FCFB62A4F246F95A430449B24162C209"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "Skip Msg - All Msg.",
                        "index": 2,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "3AA798A72554734CA64BE3F4FA9FA7D68296"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 1,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0
                },
                "indent": 0,
                "uid": "1944A91C7455F4466778C6B2796E212FB4A9"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "0236DE9888BB164A8108588237EEA8979F27"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skip_voices"
                },
                "indent": 0,
                "uid": "121F7E2856E8C44F058A2878A75500D0F01E"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 10,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": {
                        "name": "Skip Voices",
                        "index": 5,
                        "scope": 0
                    }
                },
                "indent": 0,
                "uid": "5E7EEB0B45BE1443EE6892D4898C64D8D74B"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "64F49E8F1CCCA34092585610AA11723F0642"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "skip_choices"
                },
                "indent": 0,
                "uid": "0F6AB29F870B8344A95AFEF31A0256BA130F"
            },
            {
                "id": "vn.SetGameData",
                "params": {
                    "field": 9,
                    "numberValue": 0,
                    "textValue": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": {
                        "name": "Skip Choices",
                        "index": 4,
                        "scope": 0
                    }
                },
                "indent": 0,
                "uid": "7ECB99BD6968964ECC3B9CE239CD023607CD"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "8727D48F044106450178C193DFAB5B60CE47"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "Display - Window",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Display - Fullscreen",
                "index": 1,
                "scope": 0
            },
            {
                "name": "Skip Msg - All Msg.",
                "index": 2,
                "scope": 0
            },
            {
                "name": "Skip Msg - Seen Msg.",
                "index": 3,
                "scope": 0
            },
            {
                "name": "Skip Choices",
                "index": 4,
                "scope": 0
            },
            {
                "name": "Skip Voices",
                "index": 5,
                "scope": 0
            },
            {
                "name": "In Game",
                "index": 6,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "Text Speed X",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Message Speed",
                "index": 1,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Auto Message X",
                "index": 2,
                "scope": 0
            },
            {
                "name": "BGM Volume X",
                "index": 3,
                "scope": 0
            },
            {
                "name": "SE Volume X",
                "index": 4,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Voice Volume X",
                "index": 5,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}