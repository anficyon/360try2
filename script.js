TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923",
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_u_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_u.jpeg"
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_r_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_r.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_b_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_b.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_d_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_d.jpeg"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_f_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_f.jpeg"
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_l_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_l.jpeg"
      }
     ]
    }
   }
  ],
  "cardboardMenu": {
   "fontFamily": "Arial",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverBackgroundColor": "#000000",
   "fontColor": "#FFFFFF",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_8CA28BB1_86C7_B684_41DD_50A91B6FA71C",
   "selectedBackgroundColor": "#202020",
   "rollOverOpacity": 0.8,
   "class": "Menu",
   "children": [
    {
     "class": "MenuItem",
     "label": "img00103636614880698546087Screenshot",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "img02492636601915298370498Screenshot",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "img00321636601923316142515Screenshot",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    }
   ],
   "opacity": 0.4
  },
  "label": "img00103636614880698546087Screenshot",
  "thumbnailUrl": "media/panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581",
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_u_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_u.jpeg"
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_r_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_r.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_b_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_b.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_d_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_d.jpeg"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_f_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_f.jpeg"
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_l_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_l.jpeg"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_8CA28BB1_86C7_B684_41DD_50A91B6FA71C",
  "label": "img02492636601915298370498Screenshot",
  "thumbnailUrl": "media/panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 120,
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876",
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_t.jpg",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_u_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_u.jpeg"
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_r_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_r.jpeg"
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_b_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_b.jpeg"
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_d_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_d.jpeg"
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_f_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_f.jpeg"
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_l_hq.jpeg"
      },
      {
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024,
       "url": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_l.jpeg"
      }
     ]
    }
   }
  ],
  "cardboardMenu": "this.Menu_8CA28BB1_86C7_B684_41DD_50A91B6FA71C",
  "label": "img00321636601923316142515Screenshot",
  "thumbnailUrl": "media/panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_t.jpg",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_4249CF9D_4A60_BDDD_41D2_939F82F9CB98",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.playList_4249CF9D_4A60_BDDD_41D2_939F82F9CB98, 0, 1)",
    "camera": "this.panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4DF3373A_4A61_6EE7_41BE_D8A0DBB88923"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_4249CF9D_4A60_BDDD_41D2_939F82F9CB98, 1, 2)",
    "camera": "this.panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4CA01CA8_4A61_A3E3_41B9_9DE4DA879581"
   },
   {
    "begin": "this.setEndToItemIndex(this.playList_4249CF9D_4A60_BDDD_41D2_939F82F9CB98, 2, 0)",
    "camera": "this.panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4CA01133_4A61_A2E5_41CC_B981BCBA8876"
   }
  ]
 },
 "this.Menu_8CA28BB1_86C7_B684_41DD_50A91B6FA71C"
], "children": [
 {
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingLeft": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarBottom": 5,
  "progressBarOpacity": 1,
  "toolTipShadowColor": "#333333",
  "shadow": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "progressHeight": 10,
  "minHeight": 50,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "minWidth": 100,
  "toolTipBorderRadius": 3,
  "paddingBottom": 0,
  "progressBorderColor": "#000000",
  "playbackBarBorderSize": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipOpacity": 1,
  "progressBarBorderSize": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadOpacity": 1,
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadow": true,
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "progressOpacity": 1,
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "width": "100%",
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "borderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "height": "100%",
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "progressBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "id": "MainViewer",
  "playbackBarHeadHeight": 15,
  "playbackBarOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowVerticalLength": 0,
  "borderRadius": 0,
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6"
 },
 {
  "verticalAlign": "bottom",
  "children": [
   {
    "verticalAlign": "top",
    "playList": "this.playList_4249CF9D_4A60_BDDD_41D2_939F82F9CB98",
    "selectedItemLabelFontWeight": "bold",
    "itemBackgroundColorDirection": "vertical",
    "itemBackgroundColor": [],
    "itemMode": "normal",
    "paddingRight": 20,
    "itemThumbnailOpacity": 1,
    "itemOpacity": 1,
    "paddingLeft": 20,
    "scrollBarOpacity": 0.5,
    "itemLabelFontFamily": "Arial",
    "borderSize": 0,
    "gap": 10,
    "itemLabelPosition": "bottom",
    "itemPaddingTop": 3,
    "itemThumbnailShadowSpread": 1,
    "backgroundColor": [
     "#000000"
    ],
    "scrollBarWidth": 10,
    "itemThumbnailShadowVerticalLength": 3,
    "itemLabelGap": 5,
    "itemVerticalAlign": "middle",
    "horizontalAlign": "left",
    "scrollBarMargin": 2,
    "itemPaddingLeft": 3,
    "itemThumbnailShadowBlurRadius": 4,
    "itemPaddingRight": 3,
    "shadow": false,
    "minHeight": 0,
    "itemBackgroundOpacity": 0,
    "itemThumbnailBorderRadius": 5,
    "maxHeight": 600,
    "itemThumbnailShadow": true,
    "backgroundOpacity": 0.2,
    "itemBorderRadius": 0,
    "itemThumbnailWidth": 100,
    "minWidth": 0,
    "scrollBarColor": "#FFFFFF",
    "maxWidth": 800,
    "paddingBottom": 10,
    "itemLabelFontWeight": "normal",
    "itemLabelFontStyle": "normal",
    "itemThumbnailShadowOpacity": 0.8,
    "layout": "horizontal",
    "itemHorizontalAlign": "center",
    "itemPaddingBottom": 3,
    "scrollBarVisible": "rollOver",
    "itemThumbnailHeight": 75,
    "itemLabelTextDecoration": "none",
    "paddingTop": 10,
    "itemThumbnailShadowColor": "#000000",
    "borderRadius": 5,
    "itemThumbnailScaleMode": "fit_outside",
    "backgroundColorDirection": "vertical",
    "itemLabelHorizontalAlign": "center",
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontSize": 14,
    "itemThumbnailShadowHorizontalLength": 3,
    "class": "ThumbnailList",
    "itemLabelFontColor": "#FFFFFF",
    "itemBackgroundColorRatios": []
   }
  ],
  "scrollBarOpacity": 0.5,
  "right": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "height": 200,
  "borderSize": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
  "shadow": false,
  "overflow": "visible",
  "backgroundOpacity": 0,
  "minHeight": 20,
  "layout": "horizontal",
  "minWidth": 20,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "bottom": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "contentOpaque": false,
  "borderRadius": 0,
  "left": 0,
  "class": "Container"
 }
], 
 "verticalAlign": "top",
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } }
 },
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "height": "100%",
 "overflow": "visible",
 "minHeight": 20,
 "layout": "absolute",
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "start": "this.syncPlaylists([this.playList_4249CF9D_4A60_BDDD_41D2_939F82F9CB98,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "mouseWheelEnabled": true
})