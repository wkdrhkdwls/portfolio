import React from "react"
import { Link } from "gatsby"

function FestivalDetail() {
  const titleData = {
    title: "TMTP",
    sections: [
      {
        subtitle: "1. 수행 동기 및 배경",
        description:
          "약학 정보에 대한 웹 또는 앱은 쉽게 찾아볼 수 있지만 상호복용 유무에 대한 정보를 찾아 확인할 수 있는 서비스는 보기 드물다. 또, 상대적으로 많은 약을 복용하는 노년층은 전문 의학 용어를 알지 못해 의약품 검색에 어려움을 겪을 수 있다. 환자들에게 의약품을 보다 쉽게 찾을 수 있는 웹 사이트를 만들어 의약품의 오남용과 중복 복용을 예방하고자 한다. ‘TMTP’ 프로젝트는 환자가 올바르게 약물을 복용할 수 있도록 도우며, 약물 중복 복용으로 인한 부작용을 사전에 차단하는 것이 목적으로 한다. 유사한 서비스는 약의 검색에 특화되어 있다면 ‘TMTP’ 프로젝트는 복용 중인 서로 다른 약을 비교하여 상호 복용 가능여부를 알려 주는 것에 포커싱을 맞춘 서비스이다.",
      },
      {
        subtitle: "2. 기대효과 및 활용계획",
        description:
          "웹 사이트 사용자가 올바르게 약물을 복용할 수 있도록 도우며, 약물의 중복 복용으로 인한 부작용을 사전에 차단하는 것이 목적이다. 웹사이트에서는 현재 환자가 복용 중이거나 알기 어려운 의약품에 대한 검색과 정보를 제공할 수 있다. 특히, 영어나 의학용어와 거리가 먼 노년층과 2개 이상의 약물을 복용 중인 사용자에게 의약품에 대한 정보를 쉽게 제공할 수 있기 때문에 약물 복용으로 생기는 문제를 방지할 수 있을 것이다.",
      },
      {
        subtitle: "3. 기술 스택",
        description:
          "처음에는 SEO와 성능향상을 위해 SSR인 Gatsby와 Gatsby Cloud를 통해 미리 Frontend페이지를 배포하여 팀원들과 논의하며 프로젝트를 진행하였다. 그러나 카메라로 약품을 찍어 정보를 확인하기 위해서는 AWS S3 BUCKET으로 데이터를 전송해야하고 계속하여 정보가 바뀌기 때문에 동적인 프레임워크를 사용해야겠다고 생각하여 Next.js로 프레임워크를 변경하였다. API는 약학정보원, 건강보험심사평가원 등에서 OpenApi를 백엔드에서 상호복용 약품 위주로 데이터를 파싱하여 자체 API를 AWS 서버에서 배포하여 사용하였다. 프론트엔드에서 AWS S3 버킷을 생성하고 보내는 과정에서, 카메라로 React-Webcam을 사용하였으며 사진의 약품을 식별하기 위해 OCR이라는 Open Source를 사용하여 문자열 인식을 통해 구별하도록 구성하였다. 메인페이지는 특별한 CSS 없이 ReactFullpage를 사용하여 가독성과 효율성을 높였다.",
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
