import React from "react"
import { Link } from "gatsby"

function TMTPDetail() {
  const titleData = {
    title: "TMTP",
    sections: [
      {
        subtitle: "1. 수행 동기 및 배경",
        description:
          "웹이나 앱에서 의약품 정보를 찾는 것은 쉽지만, 상호 사용 여부에 대한 정보를 찾고 확인할 수 있는 서비스는 드뭅니다. 특히, 비교적 많은 약을 복용하는 노인들은 전문적인 의료 용어를 모르기 때문에 약을 검색하는 데 어려움을 겪을 수 있습니다. 저희는 환자들이 약을 더 쉽게 찾을 수 있도록 웹사이트를 만들어 약물의 오용 및 과용을 예방하고자 합니다. ‘TMTP’ 프로젝트는 환자들이 약을 올바르게 복용하도록 돕고, 중복된 약물로 인한 부작용을 예방하는 것을 목표로 합니다. 비슷한 서비스들이 약물 검색에 특화되어 있는 반면, ‘TMTP’ 프로젝트는 환자가 복용 중인 다양한 약물을 비교하고 함께 복용해도 되는지 알려주는 데 중점을 둔 서비스입니다.",
      },
      {
        subtitle: "2. 기대효과 및 활용계획",
        description:
          "웹사이트 사용자들이 약물을 올바르게 복용하도록 돕고, 다수의 약물 복용으로 인한 부작용을 예방하는 것을 목표로 합니다. 환자들이 현재 복용 중이거나 알아보기 어려운 약물에 대한 검색 및 정보를 제공할 수 있습니다. 특히, 영어나 의료 용어에 익숙하지 않은 노인 및 2종류 이상의 약물을 복용하는 사용자들에게 약물 정보를 쉽게 제공함으로써 약물 복용으로 인한 문제를 예방할 수 있습니다.",
      },
      {
        subtitle: "3. 기술 스택",
        description:
          "NextJS 프레임워크를 사용하였고 TailwindCSS를 사용하였습니다. 서비스의 기능이 적어 Fullpage를 사용하여 메인페이지를 구현하였고, 전체 약품 정보를 확인할 때 프론트엔드에서 페이징을 하여 불필요한 렌더링을 줄이고 사용자의 피로도를 감소시켰습니다. 또한 카메라를 이용한 약품 인식 기능을 도입하기 위해 고민하였습니다. 그러나 웹 환경에서 카메라 기능을 제대로 사용하는 것은 어려웠고 웹캠을 사용하는 방법으로 결정하였습니다. 모바일에서는 후면, 데스크탑에서는 전면 카메라를 사용하도록 하며 이미지는 AWS S3 서버에 담기도록 구현하였습니다. 백엔드에서 이를 OCR을 사용하여 문자를 인식한 후 맞는 데이터를 찾아 프론트엔드로 넘겨주는 기능을 구현하려하였으나 시간적 문제로 이를 구현하지 못하였습니다.",
      },

      {
        subtitle: "4. 결과",
        description: (
          <div>
            <Link
              to="https://github.com/TMTP/TMTP_Front"
              target="_blank"
              className="github-link"
            >
              Github링크
            </Link>
            <Link
              to="https://www.youtube.com/watch?v=M-Dz2ofmEzo"
              target="_blank"
              className="github-link"
            >
              Youtube링크
            </Link>
          </div>
        ),
      },
      {
        subtitle: "5. 인사이트",
        description:
          "NextJS를 사용한 첫 프로젝트로 이전 React를 사용한 프로젝트보다 신경써서 작업해야할 부분이 많아 어려움을 많이 느꼈습니다. 그러나 꾸준히 모르는 부분에 대해 공부하고 팀원들과 트러블 슈팅을 한 결과로서 NextJS를 사용했을 떄의 장점과 사용방법에 대해 익힐 수 있었습니다.",
      },
    ],
  }

  return { titleData }
}

export default TMTPDetail
