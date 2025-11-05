import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextProps } from 'react-native';

interface GradientTextProps extends TextProps {
  colors?: readonly [string, string, ...string[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export function GradientText({
  colors = ['#FBB03B', '#EC0C43'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  children,
  ...props
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <Text {...props} style={[style, { opacity: 1 }]}>
          {children}
        </Text>
      }>
      <LinearGradient colors={colors} start={start} end={end}>
        <Text {...props} style={[style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}
