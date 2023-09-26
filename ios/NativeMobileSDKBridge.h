//
//  NativeMobileSDKBridge.h
//  Pods
//
//  Created by Muhammed Saeed on 26/09/2023.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <AmazonChimeSDK/AmazonChimeSDK-Swift.h>

#define kMeetingId @"MeetingId"
#define kExternalMeetingId @"ExternalMeetingId"
#define kMediaRegion @"MediaRegion"

#define kAttendeeId @"AttendeeId"
#define kExternalUserId @"ExternalUserId"
#define kJoinToken @"JoinToken"

#define kMediaPlacement @"MediaPlacement"
#define kAudioFallbackUrl @"AudioFallbackUrl"
#define kAudioHostUrl @"AudioHostUrl"
#define kTurnControlUrl @"TurnControlUrl"
#define kSignalingUrl @"SignalingUrl"

@interface NativeMobileSDKBridge : RCTEventEmitter <RCTBridgeModule>
@end
