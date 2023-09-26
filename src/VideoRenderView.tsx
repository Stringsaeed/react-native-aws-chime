import React from 'react';
import { findNodeHandle } from 'react-native';
import { NativeFunction } from './module';
import { AwsChimeNativeView } from './view';
import type { StyleProp } from 'react-native';
import type { ViewStyle } from 'react-native';

interface Props {
  tileId: number;
  style?: StyleProp<ViewStyle>;
}

const AwsChimeViewComponent: React.FC<Props> = ({ tileId, ...props }) => {
  const viewRef = React.useRef(null);
  const timerId = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    timerId.current = setTimeout(() => {
      NativeFunction.bindVideoView(findNodeHandle(viewRef.current), tileId);
    });
    return () => {
      clearTimeout(timerId.current!);
      NativeFunction.unbindVideoView(tileId);
    };
  }, [tileId]);

  return <AwsChimeNativeView ref={viewRef} {...props} />;
};

export const AwsChimeView = React.memo(AwsChimeViewComponent);
