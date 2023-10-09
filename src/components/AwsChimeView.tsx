import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  findNodeHandle,
} from 'react-native';
import type { AwsChimeNativeViewProps, AwsChimeViewProps } from '../types';
import { AwsChime } from '../AwsChime';

const LINKING_ERROR =
  `The package 'react-native-aws-chime' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ComponentName = 'AwsChimeView';

const AwsChimeNativeView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<AwsChimeNativeViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

const AwsChimeViewComponent: React.FC<AwsChimeViewProps> = ({
  tileId,
  ...props
}) => {
  const viewRef = React.useRef(null);
  const timerId = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    timerId.current = setTimeout(() => {
      const viewId = findNodeHandle(viewRef.current);
      if (viewId === null) {
        return;
      }
      AwsChime.bindVideoView(viewId, tileId);
    });
    return () => {
      clearTimeout(timerId.current!);
      AwsChime.unbindVideoView(tileId);
    };
  }, [tileId]);

  return <AwsChimeNativeView {...props} ref={viewRef} tileId={tileId} />;
};

export const AwsChimeView = React.memo(AwsChimeViewComponent);
