import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "gatsby"

function GganbuDetail() {
  const data = useStaticQuery(graphql`
    query {
      gganbuURL: allFile(
        filter: { absolutePath: { regex: "/contents/images/gganbu/" } }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const titleData = {
    title: "깐부 GG",
    sections: [
      {
        subtitle: "1. 프로젝트 소개",
        description:
          "깐부 GG는 롤토체스라는 게임의 모드 중 하나인 '더블업 모드'의 전적 사이트입니다. 기존 개인 모드만의 전적을 제공하는 lolChess.gg와 달리 깐부 GG는 더블업 모드만의 데이터를 파싱하여 정보를 제공합니다. 이에 맞는 '덱 추천' 및 '전적검색' 기능을 제공합니다.",
      },
      {
        subtitle: "2. 개발 과정",
        description:
          "이 프로젝트는 프론트엔드 1명, 백엔드 2명, PM 1명으로 구성되었으며, 저는 프론트엔드 개발자로 참여했습니다. 첫 방문자에게 서비스 소개 모달을 제공하기 위해 쿠키 데이터를 사용했으며, Riot API를 통해 처리된 데이터를 백엔드로부터 받아 '덱 추천' 등의 정보를 제공했습니다. 백엔드로부터 API 데이터를 받기 전에는 Json Server 라이브러리를 사용하여 모의 데이터를 이용한 UI/UX 구성을 진행했습니다.",
      },
      {
        subtitle: "3. 기술 스택",
        description:
          "React 프레임워크를 사용했으며, 빠른 개발을 위해 TailwindCSS와 Styled Component를 함께 사용했습니다. 서버와의 데이터 통신은 Axios 라이브러리를 이용했습니다. fetch 대신 Axios를 사용함으로써 더 편리하게 사용할 수 있었습니다.",
      },
      {
        subtitle: "4. 결과",
        description: (
          <Link
            to="https://github.com/gganbuGG/gganbu_front"
            target="_blank"
            className="github-link"
          >
            Github링크
          </Link>
        ),
      },
      {
        subtitle: "5. 인사이트",
        description:
          "DevRent라는 연합 프로그래밍 동아리에서 처음 진행한 협업 프로젝트였습니다. 때문에 처음으로 백엔드 개발자와 협업하며 DTO를 생성하고, 팀원과 매주 회의를 진행하면서 커뮤니케이션 역량을 향상시킬 수 있었다고 생각합니다. 또한 커밋컨벤션, 코드컨벤션 등 아무 규칙도 정하지 않고 프로젝트를 진행했기에 추후에 돌이켜 보았을 떄 이점이 매우 아쉬웠고, 리팩토링을 통해 성능을 개선하고 유지보수가 쉬운 코드로 수정하려는 생각이 있습니다. 또한 게임 전적 사이트인만큼 게임의 데이터가 변하면 백엔드에서 가공한 데이터가 변경되므로 업데이트를 하지 않으면 서비스가 작동하지 않은 문제가 발생합니다.",
      },
    ],
  }

  return { data, titleData }
}

export default GganbuDetail
