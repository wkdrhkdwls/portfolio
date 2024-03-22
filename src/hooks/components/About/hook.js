import { graphql, useStaticQuery } from "gatsby"

function useAboutDetail() {
  const bannerUrl = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const data = {
    title: "About me",
    introduce: [
      "안녕하세요",
      "발전하는",
      "Frontend Developer",
      "장광진입니다.",
    ],
    career: {
      title: "약력",
      about: {
        "DevRent 2022.08 ~ 2023.02": [
          "롤토체스 더블업 모드 전용 통계 사이트 깐부GG 제작",
          "DevRent 웹 홈페이지 제작",
        ],
        "멋쟁이 사자처럼 2023.03 ~ 2023.08": [
          "가톨릭대학교 축제 홍보 페이지 제작",
          "멋쟁이사자처럼 해커톤 참여",
        ],
        "GDSC 2023.09 ~ 2023.12": [
          "창업 프로젝트 MyList",
          "맛집 추천 사이트 개발",
        ],
        "Team.DINO 2023.08 ~ ": [
          "MyList 서비스 개발",
          "MyMatch 서비스 개발",
          "예비창업자 패키지 서류 통과",
        ],
      },
    },
    education: {
      title: "학력",
      about: "가톨릭대학교 미디어공학/컴퓨터공학 (2018.03 ~ 2024.08(졸업예정))",
    },
    certificate: {
      title: "자격증",
      about: {
        정보처리기사: "2023.11",
        Opic: "IM2 2023.10",
        운전면허: "1종 보통",
        GTQ: "2급",
      },
    },
    other: {
      title: "기타",
      about: [
        "가톨릭대학교 미디어기술콘텐츠학과 학생회장 (2022~2023)",
        "GDSC 기술팀 CORE MEMBER",
        "Team.DINO Frontend Lead 개발자",
      ],
    },
  }

  return { data, bannerUrl }
}

export default useAboutDetail
