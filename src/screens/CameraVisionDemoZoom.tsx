import {
  Camera,
  useCameraDevice,
  CameraProps,
} from 'react-native-vision-camera';
import Reanimated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';

Reanimated.addWhitelistedNativeProps({
  zoom: true,
});
const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);

export default function CameraVisionDemoZoom() {
  const device = useCameraDevice('back');

  if (!device) return <Text>Failed to load device</Text>;

  const zoom = useSharedValue(device?.neutralZoom);

  const zoomOffset = useSharedValue(0);
  const gesture = Gesture.Pinch()
    .onBegin(() => {
      // @ts-ignore
      zoomOffset.value = zoom.value;
    })
    .onUpdate(event => {
      const z = zoomOffset.value * event.scale;
      zoom.value = interpolate(
        z,
        [1, 10],

        [device.minZoom, device.maxZoom],
        Extrapolation.CLAMP,
      );
    });

  const animatedProps = useAnimatedProps<CameraProps>(
    () => ({ zoom: zoom.value }),
    [zoom],
  );

  if (device == null)
    return (
      <>
        <Text>No device</Text>
      </>
    );
  return (
    <GestureDetector gesture={gesture}>
      <ReanimatedCamera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        animatedProps={animatedProps}
      />
    </GestureDetector>
  );
}
