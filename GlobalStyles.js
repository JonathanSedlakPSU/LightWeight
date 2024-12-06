import { setStatusBarBackgroundColor } from "expo-status-bar";

/* fonts */
export const FontFamily = {
   interBold: "Inter-Bold",
   interMedium: "Inter-Medium",
   font_default: 15, //Default font size so that only one value needs to be updated to affect all fonts
   border_default: 15, //Default border size to related ones can scale relative to default
};
/* font sizes */
export const FontSize = {
    //By having all fonts be sized in relative terms to a default, all fonts will relative to one another rather than needing to resize individually
   size_sm: FontFamily.font_default, //15
   size_lg: FontFamily.font_default + 3, //18
   size_xl: FontFamily.font_default + 6, //21
   size_5xl: FontFamily.font_default + 9, //24
   };
/* Colors */
export const Color = {
   colorWhite: "#fff",
   theme1: "#4f04b3",
   theme2: "#4104ba",
   colorBackground: "#1c1a21",
   colorBackground2: "#343238",
   colorBlack: "#000",
   colorLimegreen: "#09c312",
   orange: "#ff3d00",
   colorDarkgray: "#a3a3a3",
   colorGainsboro: "#d9d9d9",

   // Red = ff0000
   // Orange = ff3d00
   // Purple =#4f04b3
   // PurpleBlue = #4104ba
   // Dark grey = #1c1a21
};
/* Gaps */
export const Gap = {
   gap_md: 10,
   };
/* border radii */
export const Border = {
   br_3xs: FontFamily.border_default - 10, //5
   br_mini: FontFamily.border_default, //15
   br_xl: FontFamily.border_default + 5, //20
   br_6xl: FontFamily.border_default + 10, //25
};
/*Alignment*/
export const AlignStyles = {
    workoutButtonWidth: 298,
    workoutButtonHeight: 153,
    workoutButtonTop: 0,
};
