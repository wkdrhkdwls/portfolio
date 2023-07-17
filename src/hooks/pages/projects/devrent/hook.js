import React from "react"
import { Link } from "gatsby"

function DevRentDetail() {
  const titleData = {
    title: "DevRent HomePage",
    sections: [
      {
        subtitle: "1. 프로젝트 소개",
        description:
          "DevRent라는 웹 프로그래밍 동아리의 홈페이지 및 지원 사이트를 구현하였습니다. 이를 통해 DevRent라는 동아리에서 진행한 프로젝트와 비전, FAQ등의 정보를 확인할 수 있고, 동아리 모집시기에 지원을 할 수 있습니다. 이로써 동아리에 관심이 있는 사용자들은 지원 전,동아리에 대한 소식이나 정보를 얻고 편하게 지원이 가능합니다.",
      },
      {
        subtitle: "2. 개발 과정",
        description:
          "로그인 기능을 지원하지 않기에 백엔드가 없이 프론트엔드 인원들로만 구성되어 진행하였습니다. 정적인 페이지이기 때문에 React와 Gatsby로 진행하였으며, 이미지와 데이터 값들을GraphQl을 사용하여 구성했습니다. 각각 하나의 컴포넌트를 맡아 구성하였으며, 저는Banner와 FaQ를 중심으로 진행하였습니다.",
      },
      {
        subtitle: "3. 기술 스택",
        description:
          "정적인 페이지를 구현하고 SEO를 위해 React, Gatsby를 사용했으며 CSS로는 tailwind를사용하였습니다. 외부 API를 사용하지는 않았지만 GraphQl을 사용한 hook을 사용하여 하드코딩을 방지하고, 코드의 효율성을 높였습니다.",
      },

      {
        subtitle: "4. 결과",
        description: (
          <div>
            <Link
              to="https://github.com/devRentPage/devRentPage"
              target="_blank"
              className="github-link"
            >
              Github링크
            </Link>
            <Link
              to="https://devrentpage.github.io/devRentPage/"
              target="_blank"
              className="github-link"
            >
              배포페이지
            </Link>
          </div>
        ),
      },
      {
        subtitle: "5. 인사이트",
        description:
          "DevRent WebPage를 구현하면서 gatsby, GraphQl의 장점과 이를 활용하는 방법을 정확하게 알게되었습니다. Gatsby와 GraphQl에 대한 정보가 타 프레임워크에 비해 없었기에,더욱 팀원들과 의견 공유를 심도있게 하게되었고, tailwind를 사용하여 반응형으로 만드는것 또한 요즘과 같이 모바일을 많이 쓰는 상황에서 매우 중요하며, 크기에 따라 UI를 구성하는 것이 얼마나 중요한지에 대해 깨닳게 되었습니다. 위 프로젝트를 통해 더욱 활용할 수 있는 프레임워크와 기술이 늘었고, 프로젝트의 구조와 UI에 대해 더 심도있게 생각해보는 계기가 되었습니다.",
      },
    ],
  }

  return { titleData }
}

export default DevRentDetail
