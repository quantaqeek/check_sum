import localFont from "next/font/local";

export const FontNanumMyeongjo = localFont({
    src: [
      {
        path: "../../../public/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf",
        weight: "800",
        style: "normal"
      },
      {
        path: "../../../public/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf",
        weight: "700",
        style: "normal"
      },
      {
        path: "../../../public/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf",
        weight: "400",
        style: "normal"
      }
    ],
    variable: "--font-Nanum_Myeongjo"
  })
export const FontRoboto = localFont({
  src: [
    {
      path: "../../../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Roboto/Roboto-Black.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Roboto/Roboto-Thin.ttf",
      weight: "200",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal"
    }
  ],
  variable: "--font-roboto"
})

export const FontAnton = localFont({
  src: [
    {
      path: "../../../public/fonts/Anton/Anton-Regular.ttf",
      weight: "400",
      style: "normal"
    },
  ],
  variable: "--font-anton"
})

export const FontEdu = localFont({
  src: [
    {
      path: "../../../public/fonts/edu/EduAUVICWANTPre-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../../public/fonts/edu/EduAUVICWANTPre-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../../public/fonts/edu/EduAUVICWANTPre-Regular.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../../public/fonts/edu/EduAUVICWANTPre-Medium.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-edu"
})