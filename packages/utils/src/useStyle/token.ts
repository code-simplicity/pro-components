﻿import { useState } from 'react';

export const defaultTheme = {
  blue: '#1890FF',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911',
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677FF',
  colorTextBase: '#000',
  colorTextLightSolid: '#fff',
  colorBgBase: '#fff',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\\n'Noto Color Emoji'",
  fontSizeBase: 14,
  gridUnit: 4,
  gridBaseStep: 2,
  lineWidth: 1,
  lineType: 'solid',
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInQuint: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  radiusBase: 4,
  sizeUnit: 4,
  sizeBaseStep: 4,
  sizePopupArrow: 11.313708498984761,
  controlHeight: 32,
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  opacityImage: 1,
  'blue-1': '#e6f7ff',
  'blue-2': '#bae7ff',
  'blue-3': '#91d5ff',
  'blue-4': '#69c0ff',
  'blue-5': '#40a9ff',
  'blue-6': '#1890ff',
  'blue-7': '#096dd9',
  'blue-8': '#0050b3',
  'blue-9': '#003a8c',
  'blue-10': '#002766',
  'purple-1': '#f9f0ff',
  'purple-2': '#efdbff',
  'purple-3': '#d3adf7',
  'purple-4': '#b37feb',
  'purple-5': '#9254de',
  'purple-6': '#722ed1',
  'purple-7': '#531dab',
  'purple-8': '#391085',
  'purple-9': '#22075e',
  'purple-10': '#120338',
  'cyan-1': '#e6fffb',
  'cyan-2': '#b5f5ec',
  'cyan-3': '#87e8de',
  'cyan-4': '#5cdbd3',
  'cyan-5': '#36cfc9',
  'cyan-6': '#13c2c2',
  'cyan-7': '#08979c',
  'cyan-8': '#006d75',
  'cyan-9': '#00474f',
  'cyan-10': '#002329',
  'green-1': '#f6ffed',
  'green-2': '#d9f7be',
  'green-3': '#b7eb8f',
  'green-4': '#95de64',
  'green-5': '#73d13d',
  'green-6': '#52c41a',
  'green-7': '#389e0d',
  'green-8': '#237804',
  'green-9': '#135200',
  'green-10': '#092b00',
  'magenta-1': '#fff0f6',
  'magenta-2': '#ffd6e7',
  'magenta-3': '#ffadd2',
  'magenta-4': '#ff85c0',
  'magenta-5': '#f759ab',
  'magenta-6': '#eb2f96',
  'magenta-7': '#c41d7f',
  'magenta-8': '#9e1068',
  'magenta-9': '#780650',
  'magenta-10': '#520339',
  'pink-1': '#fff0f6',
  'pink-2': '#ffd6e7',
  'pink-3': '#ffadd2',
  'pink-4': '#ff85c0',
  'pink-5': '#f759ab',
  'pink-6': '#eb2f96',
  'pink-7': '#c41d7f',
  'pink-8': '#9e1068',
  'pink-9': '#780650',
  'pink-10': '#520339',
  'red-1': '#fff1f0',
  'red-2': '#ffccc7',
  'red-3': '#ffa39e',
  'red-4': '#ff7875',
  'red-5': '#ff4d4f',
  'red-6': '#f5222d',
  'red-7': '#cf1322',
  'red-8': '#a8071a',
  'red-9': '#820014',
  'red-10': '#5c0011',
  'orange-1': '#fff7e6',
  'orange-2': '#ffe7ba',
  'orange-3': '#ffd591',
  'orange-4': '#ffc069',
  'orange-5': '#ffa940',
  'orange-6': '#fa8c16',
  'orange-7': '#d46b08',
  'orange-8': '#ad4e00',
  'orange-9': '#873800',
  'orange-10': '#612500',
  'yellow-1': '#feffe6',
  'yellow-2': '#ffffb8',
  'yellow-3': '#fffb8f',
  'yellow-4': '#fff566',
  'yellow-5': '#ffec3d',
  'yellow-6': '#fadb14',
  'yellow-7': '#d4b106',
  'yellow-8': '#ad8b00',
  'yellow-9': '#876800',
  'yellow-10': '#614700',
  'volcano-1': '#fff2e8',
  'volcano-2': '#ffd8bf',
  'volcano-3': '#ffbb96',
  'volcano-4': '#ff9c6e',
  'volcano-5': '#ff7a45',
  'volcano-6': '#fa541c',
  'volcano-7': '#d4380d',
  'volcano-8': '#ad2102',
  'volcano-9': '#871400',
  'volcano-10': '#610b00',
  'geekblue-1': '#f0f5ff',
  'geekblue-2': '#d6e4ff',
  'geekblue-3': '#adc6ff',
  'geekblue-4': '#85a5ff',
  'geekblue-5': '#597ef7',
  'geekblue-6': '#2f54eb',
  'geekblue-7': '#1d39c4',
  'geekblue-8': '#10239e',
  'geekblue-9': '#061178',
  'geekblue-10': '#030852',
  'gold-1': '#fffbe6',
  'gold-2': '#fff1b8',
  'gold-3': '#ffe58f',
  'gold-4': '#ffd666',
  'gold-5': '#ffc53d',
  'gold-6': '#faad14',
  'gold-7': '#d48806',
  'gold-8': '#ad6800',
  'gold-9': '#874d00',
  'gold-10': '#613400',
  'lime-1': '#fcffe6',
  'lime-2': '#f4ffb8',
  'lime-3': '#eaff8f',
  'lime-4': '#d3f261',
  'lime-5': '#bae637',
  'lime-6': '#a0d911',
  'lime-7': '#7cb305',
  'lime-8': '#5b8c00',
  'lime-9': '#3f6600',
  'lime-10': '#254000',
  colorFill: 'rgba(0, 0, 0, 0.06)',
  colorFillSecondary: 'rgba(0, 0, 0, 0.04)',
  colorFillTertiary: 'rgba(0, 0, 0, 0.03)',
  colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
  colorBgLayout: '#f5f5f5',
  colorBgContainer: '#ffffff',
  colorBgElevated: '#ffffff',
  colorBorder: '#d9d9d9',
  colorBorderSecondary: '#f0f0f0',
  colorSplit: 'rgba(0, 0, 0, 0.06)',
  colorText: 'rgba(0, 0, 0, 0.85)',
  colorTextSecondary: 'rgba(0, 0, 0, 0.45)',
  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
  colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
  colorPrimaryBg: '#e6f4ff',
  colorPrimaryBgHover: '#bae0ff',
  colorPrimaryBorder: '#91caff',
  colorPrimaryBorderHover: '#69b1ff',
  colorPrimaryHover: '#4096ff',
  colorPrimaryActive: '#0958d9',
  colorPrimaryTextHover: '#4096ff',
  colorPrimaryText: '#1677ff',
  colorPrimaryTextActive: '#0958d9',
  colorSuccessBg: '#f6ffed',
  colorSuccessBgHover: '#d9f7be',
  colorSuccessBorder: '#b7eb8f',
  colorSuccessBorderHover: '#95de64',
  colorSuccessHover: '#73d13d',
  colorSuccessActive: '#389e0d',
  colorSuccessTextHover: '#73d13d',
  colorSuccessText: '#52c41a',
  colorSuccessTextActive: '#389e0d',
  colorErrorBg: '#fff2f0',
  colorErrorBgHover: '#fff1f0',
  colorErrorBorder: '#ffccc7',
  colorErrorBorderHover: '#ffa39e',
  colorErrorHover: '#ff7875',
  colorErrorActive: '#d9363e',
  colorErrorTextHover: '#ff7875',
  colorErrorText: '#ff4d4f',
  colorErrorTextActive: '#d9363e',
  colorWarningBg: '#fffbe6',
  colorWarningBgHover: '#fff1b8',
  colorWarningBorder: '#ffe58f',
  colorWarningBorderHover: '#ffd666',
  colorWarningHover: '#ffc53d',
  colorWarningActive: '#d48806',
  colorWarningTextHover: '#ffc53d',
  colorWarningText: '#faad14',
  colorWarningTextActive: '#d48806',
  colorInfoBg: '#e6f7ff',
  colorInfoBgHover: '#bae7ff',
  colorInfoBorder: '#91d5ff',
  colorInfoBorderHover: '#69c0ff',
  colorInfoHover: '#40a9ff',
  colorInfoActive: '#096dd9',
  colorInfoTextHover: '#40a9ff',
  colorInfoText: '#1890ff',
  colorInfoTextActive: '#096dd9',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',
  colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',
  motionDurationFast: '0.1s',
  motionDurationMid: '0.2s',
  motionDurationSlow: '0.3s',
  fontSizes: [12, 14, 16, 20, 24, 30, 38, 46, 56, 68],
  lineHeights: [
    1.6666666666666667, 1.5714285714285714, 1.5, 1.4, 1.3333333333333333, 1.2666666666666666,
    1.2105263157894737, 1.173913043478261, 1.1428571428571428, 1.1176470588235294,
  ],
  sizeSpaceSM: 12,
  sizeSpace: 16,
  sizeSpaceXS: 8,
  sizeSpaceXXS: 4,
  gridSpaceSM: 4,
  gridSpaceBase: 8,
  gridSpaceLG: 12,
  gridSpaceXL: 16,
  gridSpaceXXL: 28,
  lineWidthBold: 2,
  radiusSM: 2,
  radiusLG: 8,
  radiusXL: 16,
  controlHeightSM: 24,
  controlHeightXS: 16,
  controlHeightLG: 40,
  Layout: { colorBgHeader: 'transparent', colorBgBody: 'transparent' },
  colorLink: '#1677ff',
  colorLinkHover: '#4096ff',
  colorLinkActive: '#0958d9',
  colorFillContent: 'rgba(0, 0, 0, 0.04)',
  colorFillContentHover: 'rgba(0, 0, 0, 0.06)',
  colorFillAlter: 'rgba(0, 0, 0, 0.02)',
  colorBgContainerDisabled: 'rgba(0, 0, 0, 0.03)',
  colorBorderBg: '#ffffff',
  colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
  colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
  colorTextHeading: 'rgba(0, 0, 0, 0.85)',
  colorTextLabel: 'rgba(0, 0, 0, 0.65)',
  colorTextDescription: 'rgba(0, 0, 0, 0.65)',
  colorHighlight: '#ff4d4f',
  colorIcon: 'rgba(0, 0, 0, 0.45)',
  colorIconHover: 'rgba(0, 0, 0, 0.85)',
  colorErrorOutline: '#fff2f0',
  colorWarningOutline: '#fffbe6',
  fontSizeSM: 12,
  fontSize: 14,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  fontSizeIcon: 12,
  lineHeight: 1.5714285714285714,
  lineHeightLG: 1.5,
  lineHeightSM: 1.6666666666666667,
  lineHeightHeading1: 1.2105263157894737,
  lineHeightHeading2: 1.2666666666666666,
  lineHeightHeading3: 1.3333333333333333,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  controlLineWidth: 1,
  controlOutlineWidth: 2,
  controlInteractiveSize: 16,
  controlItemBgHover: 'rgba(0, 0, 0, 0.03)',
  controlItemBgActive: '#e6f4ff',
  controlItemBgActiveHover: '#bae0ff',
  controlItemBgActiveDisabled: 'rgba(0, 0, 0, 0.25)',
  controlTmpOutline: 'rgba(0, 0, 0, 0.02)',
  controlOutline: '#e6f4ff',
  controlLineType: 'solid',
  controlRadius: 4,
  fontWeightStrong: 600,
  opacityLoading: 0.65,
  linkDecoration: 'none',
  linkHoverDecoration: 'none',
  linkFocusDecoration: 'none',
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 8,
  padding: 16,
  margin: 16,
  paddingXXS: 4,
  paddingXS: 8,
  paddingSM: 12,
  paddingLG: 24,
  paddingXL: 32,
  marginXXS: 4,
  marginXS: 8,
  marginSM: 12,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  boxShadow:
    '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
  screenXS: 480,
  screenXSMin: 480,
  screenXSMax: 479,
  screenSM: 576,
  screenSMMin: 576,
  screenSMMax: 575,
  screenMD: 768,
  screenMDMin: 768,
  screenMDMax: 767,
  screenLG: 992,
  screenLGMin: 992,
  screenLGMax: 991,
  screenXL: 1200,
  screenXLMin: 1200,
  screenXLMax: 1199,
  screenXXL: 1600,
  screenXXLMin: 1600,
  screenXXLMax: 1599,
  boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
  boxShadowPopoverArrowBottom: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  boxShadowSegmentedSelectedItem:
    '0 2px 8px -2px rgba(0, 0, 0, 0.05),0 1px 4px -1px rgba(0, 0, 0, 0.07),0 0 1px 0 rgba(0, 0, 0, 0.08)',
  boxShadowCard:
    '0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)',
  boxShadowDrawerRight:
    '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),12px 0 48px 16px rgba(0, 0, 0, 0.03)',
  boxShadowDrawerLeft:
    '-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03)',
  boxShadowDrawerUp:
    '0 -6px 16px -8px rgba(0, 0, 0, 0.32), 0 -9px 28px 0 rgba(0, 0, 0, 0.2),0 -12px 48px 16px rgba(0, 0, 0, 0.12)',
  boxShadowDrawerDown:
    '0 6px 16px -8px rgba(0, 0, 0, 0.32), 0 9px 28px 0 rgba(0, 0, 0, 0.2), 0 12px 48px 16px rgba(0, 0, 0, 0.12)',
  boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
  _tokenKey: '15a20jx',
  _hashId: 'css-dev-only-do-not-override-5zawe1',
};

export const token = {
  theme: { id: 0 },
  token: defaultTheme,
  hashId: '',
};

export const useSyle = () => {
  const [stateToken] = useState(token);
  return stateToken;
};

export const darkAlgorithm = () => defaultTheme;
export const defaultAlgorithm = () => defaultTheme;
