import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Svg, { Rect, Path, Circle, Defs, LinearGradient, Stop, G } from 'react-native-svg';

export const SVGLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 124 124"
    fill="none"
    {...props}
  >
    <Rect width={124} height={124} rx={24} fill="#F97316" />
    <Path
      d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z"
      fill="white"
    />
    <Circle cx={63.2109} cy={37.5391} r={18.1641} fill="black" />
    <Rect
      opacity={0.4}
      x={81.1328}
      y={80.7198}
      width={17.5687}
      height={17.3876}
      rx={4}
      transform="rotate(-45 81.1328 80.7198)"
      fill="#FDBA74"
    />
  </Svg>
);


export const SVGBackground = (props: any) => (
  <Svg
    viewBox="0 0 900 1600"
    
    preserveAspectRatio="xMidYMid meet"
    
    {...props}
  >
    {/* Background */}
    <Rect fill="#ffffff" width={900} height={1600} />

    <Defs>
      <LinearGradient
        id="a"
        x1="0"
        x2="0"
        y1="1"
        y2="0"
        gradientTransform="rotate(80,0.5,0.5)"
      >
        <Stop offset="0" stopColor="#0FF" />
        <Stop offset="1" stopColor="#CF6" />
      </LinearGradient>

      <LinearGradient
        id="b"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
        gradientTransform="rotate(126,0.5,0.5)"
      >
        <Stop offset="0" stopColor="#F00" />
        <Stop offset="1" stopColor="#FC0" />
      </LinearGradient>
    </Defs>

    <G fill="none" strokeMiterlimit={10}>
      {/* Gradient A shapes */}
      <G stroke="url(#a)" strokeWidth={12.21}>
        <Path
          transform="translate(-136.5 31.2) rotate(19.5 1409 581) scale(1.078)"
          d="M1409 581 1450.35 511 1490 581z"
        />
        <Circle
          strokeWidth={4.07}
          transform="translate(-78 78) rotate(23.4 800 450) scale(1.039)"
          cx={500}
          cy={100}
          r={40}
        />
        <Path
          transform="translate(70.2 -234) rotate(234 401 736) scale(1.039)"
          d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
        />
      </G>

      {/* Gradient B shapes */}
      <G stroke="url(#b)" strokeWidth={3.7}>
        <Path
          transform="translate(468 -31.2) rotate(7.8 150 345) scale(0.922)"
          d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
        />
        <Rect
          strokeWidth={8.14}
          transform="translate(-312 -195) rotate(280.8 1089 759)"
          x={1039}
          y={709}
          width={100}
          height={100}
        />
        <Path
          transform="translate(-468 156) rotate(46.8 1400 132)"
          d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
        />
      </G>
    </G>
  </Svg>
);

