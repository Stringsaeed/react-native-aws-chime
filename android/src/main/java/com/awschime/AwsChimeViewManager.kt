package com.awschime

import com.amazonaws.services.chime.sdk.meetings.audiovideo.video.DefaultVideoRenderView
import com.amazonaws.services.chime.sdk.meetings.utils.logger.ConsoleLogger
import com.amazonaws.services.chime.sdk.meetings.utils.logger.LogLevel
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class AwsChimeViewManager : SimpleViewManager<DefaultVideoRenderView>() {
  private val logger = ConsoleLogger(LogLevel.DEBUG)

  companion object {
    private const val TAG = "AwsChimeView"
  }

  override fun getName() = TAG

  override fun createViewInstance(reactContext: ThemedReactContext): DefaultVideoRenderView {
    return DefaultVideoRenderView(reactContext)
  }

  @ReactProp(name = "tileId")
  fun setTileId(renderView: DefaultVideoRenderView, tileId: Int) {
    logger.info(TAG, "Setting tileId: $tileId")

    NativeMobileSDKBridge.meetingSession?.let {
      it.audioVideo.bindVideoView(renderView, tileId)
    }
  }
}
