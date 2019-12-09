import { NativeModules, NativeEventEmitter } from "react-native";

const VolumeControl = NativeModules.VolumeControl;
export const VolumeControlEvents = new NativeEventEmitter(
  VolumeControl||0.1
);

export default VolumeControl;
