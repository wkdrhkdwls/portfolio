import React from "react"

function MyMatchDetail() {
  const titleData = {
    title: "MyMatch",
    sections: [
      {
        subtitle: "1. 수행 동기 및 배경",
        description:
          "MyList는 Link-in-bio 서비스를 제공하며 각자의 음악 플레이리스트를 담고, 앨범 커버를 꾸밀 수 있습니다. 개인의 창작성에 따라 무궁무진하게 발전할 수 있는 웹 페이지를 구현중입니다. ",
      },
      {
        subtitle: "2. 프로젝트 기여 내용",
        description:
          "Linktree와 마찬가지로 자신만의 링크 페이지를 가질 수 있고, 개인의 선호에 따라 앨범 커버 또는 음악 등을 꾸밀 수 있습니다. 요즘과 같이 SNS처럼 자신을 나타내기 좋아하고, 나타낼 수 있는 플랫폼이 인기인만큼 MyList는 개인의 음악적 취향과 커버 꾸밈에 따라 개성을 나타낼 수 있습니다.",
      },
      {
        subtitle: "3. 기술 스택",
        description:
          "프론트엔드로 React, Typescript, TailwindCSS 등의 프레임워크를 사용하고, 백엔드는 NodeJS를 사용하여 개발하고 있습니다.",
      },

      {
        subtitle: "4. 결과",
        description: (
          <a href="https://mylist.im/" target="_blank" className="github-link">
            배포
          </a>
        ),
      },
      // {
      //   subtitle: "5. 인사이트",
      //   description:
      //     "음악과 앨범커버의 저작권에 관련하여 매우 귀찮으면서 어려웠습니다. 변호사, 주변 교수님들과 같은 분들에게 자문을 받은 결과 단순 앨범커버를 가져다 쓸 시 상업적 목적일 시 법적 문제가 생길 수 있다고 하여, 저희는 상업적으로 자유로운 Unsplash이미지를 사용하여 앨범커버를 꾸미고 그에 맞는 플레이리스트를 유저가 작성하는 방식으로 진행하기로 하였습니다.",
      // },
    ],
  }

  return { titleData }
}

export default MyMatchDetail
