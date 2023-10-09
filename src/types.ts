import type { PropsWithRef } from 'react';
import type { StyleProp, View, ViewStyle } from 'react-native';

export type AwsChimeNativeViewProps = PropsWithRef<{
  style?: StyleProp<ViewStyle>;
  ref?: React.Ref<View>;
  tileId: number;
}>;

export type AwsChimeViewProps = Omit<AwsChimeNativeViewProps, 'ref'>;

export interface Attendee {
  Capabilities: Capabilities;
  AttendeeId: string;
  ExternalUserId: string;
  JoinToken: string;
}

export interface Capabilities {
  Video: string;
  Content: string;
  Audio: string;
}

export interface Meeting {
  MeetingArn: string;
  ExternalMeetingId: string;
  PrimaryMeetingId: any;
  MediaRegion: string;
  TenantIds: any[];
  MeetingHostId: any;
  MeetingId: string;
  MediaPlacement: MediaPlacement;
}

export interface MediaPlacement {
  TurnControlUrl: string;
  ScreenViewingUrl: string;
  SignalingUrl: string;
  EventIngestionUrl: string;
  AudioFallbackUrl: string;
  ScreenDataUrl: string;
  ScreenSharingUrl: string;
  AudioHostUrl: string;
}

export interface CreatedAt {
  seconds: number;
  nanoseconds: number;
}
