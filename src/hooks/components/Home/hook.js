import * as React from "react"

function useHomeDetail() {
  const data = {
    title: "안녕하세요! 프론트엔드 개발자 장광진입니다!",
    button: "자세히 보기",
    bannerURL: "../../../contents/images/banner.jpg",
    bannerAlt: "Banner 이미지입니다.",
  }

  return { data }
}

export default useHomeDetail
