import { NativeFunction } from './module';
import type { Attendee, Meeting } from './types';

export const AwsChime = {
  startMeeting: (meetingInfo: Meeting, attendeeInfo: Attendee) => {
    NativeFunction.startMeeting(meetingInfo, attendeeInfo);
  },
  stopMeeting: () => {
    NativeFunction.stopMeeting();
  },
  setMute: (mute: boolean) => {
    NativeFunction.setMute(mute);
  },
  setCameraOn: (on: boolean) => {
    NativeFunction.setCameraOn(on);
  },
  bindVideoView: (viewId: number, tileId: number) => {
    NativeFunction.bindVideoView(viewId, tileId);
  },
  unbindVideoView: (tileId: number) => {
    NativeFunction.unbindVideoView(tileId);
  },
  sendDataMessage: (topic: string, data: string, lifeTimeMs: number) => {
    NativeFunction.sendDataMessage(topic, data, lifeTimeMs);
  },
};
