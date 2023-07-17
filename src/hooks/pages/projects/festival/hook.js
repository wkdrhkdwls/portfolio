import React from "react"
import { Link } from "gatsby"

function FestivalDetail() {
  const titleData = {
    title: "2023 가톨릭대학교 축제 홍보페이지",
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
              to="https://github.com/CUK-LikeLion-Festival/festival_front"
              target="_blank"
              className="github-link"
            >
              Github링크
            </Link>
            <Link
              to="https://cuk-festival.netlify.app/"
              target="_blank"
              className="github-link"
            >
              배포사이트
            </Link>
          </div>
        ),
      },
      {
        subtitle: "5. 인사이트",
        description:
          "Gatsby와 Nextjs의 차이점에 대해 더욱 깊게 알 수 있는 부분이었으며, 기능이 많지 않은 웹에서 어떻게 배치를 해야 사용자들의 편의성을 충족시킬 수 있을까를 심도있게 고민해 볼 수 있는 프로젝트였다. 원래 계획은 두 약품을 사진으로 식별하여 상호복용이 가능한지 확인하는 기능을 추가하려 했으나, 모양이나 색상등의 전체적인 형태로 식별하기에는 딥러닝으로 학습을 시켜야하는 문제가 있었기에 이를 해결하지 못하고 약품의 적힌 문자로 약품의 정보를 확인하는 기능으로 수정하였다.프로젝트를 진행하며 상호복용이 불가능한 약품들을 대조해보며 생각보다 우리가 흔히 접하는 약품중에서도 문제가 되는 약품들이 많다는 것을 알게되었고, TMTP프로젝트의 규모를 확장하고 대중화가 된다면 사회적 약자 뿐만 아니라 일반인 들에게도 중요한 역할을 할 수 있겠다고 생각했다.",
      },
    ],
  }

  return { titleData }
}

export default FestivalDetail
