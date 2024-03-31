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
          "롤토체스 더블업 모드 전용 통계 사이트 GGanbuGG",
          "DevRent WebPage",
        ],
        "멋쟁이 사자처럼 10기 2023.03 ~ 2023.12": [
          "가톨릭대학교 축제 홍보 페이지 제작",
        ],
        "GDSC 2023.09 ~ 2023.12": ["맛집 추천 서비스 MangoPlate"],
        "Team.DINO 2023.08 ~ ": [
          "나만의 플레이리스트를 제작하는 MyList 서비스 개발",
          "MyMatch 서비스 개발",
          "예비창업자 패키지 통과",
        ],
        "프로그래머스 웹 풀사이클 데브코스 1기 2023.11 ~ ": ["진행중"],
      },
    },
    education: {
      title: "학력",
      about: {
        고등학교: { 학교명: "동양고등학교", 기간: "(2014.03 ~ 2017.02)" },
        대학교: {
          학교명: "가톨릭대학교",
          기간: "2018.03 ~ 2024.08 졸업예정",
          전체학점: "3.42 / 4.5",
          전공: {
            전공명: "미디어공학과",
            학점: "3.62 / 4.5",
          },
          복수전공: {
            전공명: "컴퓨터전자공학부",
            학점: "3.88 / 4.5",
          },
        },
      },
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
    competition: {
      title: "공모전",
      about: {
        "사회혁신 아이디어 공모전 - 우수상": {
          수상일시: "2023년 9월 22일",
          수상기관: "부천시",
        },
        "U&I 페스티벌 : AI를 활용한 문화콘텐츠 아이디어 공모전 - 우수상": {
          수상일시: "2023년 11월 24일",
          수상기관: "세종대학교",
        },
        "2023년 세종특별자치시 일자리 아이디어 공모전 - 대상": {
          수상일시: "2023년 12월 19일",
          수상기관: "세종특별시&고용노동부",
        },
        "소단위 학위과정 공모전 - 우수상": {
          수상일시: "2023년 12월 21일",
          수상기관: "가톨릭대학교",
        },
      },
    },
    other: {
      title: "기타",
      about: [
        "가톨릭대학교 미디어기술콘텐츠학과 학생회장 (2022~2023)",
        "GDSC 기술팀 CORE MEMBER",
        "Team.DINO Frontend Lead 개발자",
        "퓨처위너스캠프 퓨처위너상",
        "예비창업자 패키지 통과",
        "MetLife 해커톤 우수상",
      ],
    },
  }

  return { data, bannerUrl }
}

export default useAboutDetail
