//
//  MeetingObservers.h
//  Pods
//
//  Created by Muhammed Saeed on 26/09/2023.
//

#import <AmazonChimeSDK/AmazonChimeSDK-Swift.h>
#import <Foundation/Foundation.h>

@class NativeMobileSDKBridge;

//export const MobileSDKEvent = {
//  OnMeetingStart: 'OnMeetingStart',
//  OnMeetingEnd: 'OnMeetingEnd',
//  OnAttendeesJoin: 'OnAttendeesJoin',
//  OnAttendeesLeave: 'OnAttendeesLeave',
//  OnAttendeesMute: 'OnAttendeesMute',
//  OnAttendeesUnmute: 'OnAttendeesUnmute',
//  OnAddVideoTile: 'OnAddVideoTile',
//  OnRemoveVideoTile: 'OnRemoveVideoTile',
//  OnError: 'OnError',
//}

#define kEventOnMeetingStart @"OnMeetingStart"
#define kEventOnMeetingEnd @"OnMeetingEnd"
#define kEventOnAttendeesJoin @"OnAttendeesJoin"
#define kEventOnAttendeesLeave @"OnAttendeesLeave"
#define kEventOnAttendeesMute @"OnAttendeesMute"
#define kEventOnAttendeesUnmute @"OnAttendeesUnmute"
#define kEventOnAddVideoTile @"OnAddVideoTile"
#define kEventOnRemoveVideoTile @"OnRemoveVideoTile"
#define kEventOnDataMessageReceive @"OnDataMessageReceive"
#define kEventOnError @"OnError"
#define kEventOnAudioDeviceChanged @"OnAudioDeviceChanged"

#define kErrorEventOnMaximumConcurrentVideoReached @"OnMaximumConcurrentVideoReached"
#define sVideoAtCapacityViewOnly 206

//export const NativeFunction = {
//  startMeeting: NativeModules.NativeMobileSDK.startMeeting,
//  stopMeeting: NativeModules.NativeMobileSDK.stopMeeting,
//  setMute: NativeModules.NativeMobileSDK.setMute,
//  setCamera: NativeModules.NativeMobileSDK.setCamera,
//  bindVideoView: NativeModules.NativeMobileSDK.bindVideoView
//}

@interface MeetingObservers : NSObject <RealtimeObserver, VideoTileObserver, AudioVideoObserver, DataMessageObserver, DeviceChangeObserver>
- (id)initWithBridge:(NativeMobileSDKBridge *) bridge logger:(ConsoleLogger * )logger;
@end
