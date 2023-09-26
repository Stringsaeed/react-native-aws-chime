import type { PropsWithRef } from 'react';
import type { StyleProp, View } from 'react-native';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-aws-chime' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type AwsChimeProps = PropsWithRef<{
  style?: StyleProp<ViewStyle>;
  ref?: React.Ref<View>;
}>;

const ComponentName = 'AwsChimeView';

export const AwsChimeNativeView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<AwsChimeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
