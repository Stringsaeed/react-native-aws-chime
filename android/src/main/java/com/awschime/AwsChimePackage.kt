package com.awschime

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.Collections.singletonList

class AwsChimePackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    val eventEmitter = RNEventEmitter(reactContext)
    val meetingObservers = MeetingObservers(eventEmitter)

    val modules = ArrayList<NativeModule>()
    modules.add(NativeMobileSDKBridge(reactContext, eventEmitter, meetingObservers))
    return modules
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return singletonList(AwsChimeViewManager())
  }
}
