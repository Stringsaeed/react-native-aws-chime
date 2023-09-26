import React from 'react';
import { findNodeHandle } from 'react-native';
import { NativeFunction } from './module';
import { AwsChimeView } from './view';
import type { StyleProp } from 'react-native';
import type { ViewStyle } from 'react-native';

interface Props {
  tileId: number;
  style: StyleProp<ViewStyle>;
}

const VideoRenderViewComponent: React.FC<Props> = ({ tileId, ...props }) => {
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

  return <AwsChimeView ref={viewRef} {...props} />;
};

export const VideoRenderView = React.memo(VideoRenderViewComponent);
