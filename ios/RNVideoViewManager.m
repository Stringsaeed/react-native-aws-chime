//
//  RNVideoViewManager.m
//  react-native-aws-chime
//
//  Created by Muhammed Saeed on 26/09/2023.
//

#import "RNVideoViewManager.h"

@implementation RNVideoViewManager
static NSMutableDictionary<NSString*, NSValue*> *videoMap;

RCT_EXPORT_MODULE(AwsChimeView);

- (UIView *)view
{
  DefaultVideoRenderView *innerView = [[DefaultVideoRenderView alloc] init];
  innerView.contentMode = UIViewContentModeScaleAspectFit;
  return innerView;
}

@end
