import React from "react"
import { Link } from "gatsby"

function FestivalDetail() {
  const titleData = {
    title: "2023 가톨릭대학교 축제 홍보페이지",
    sections: [
      {
        subtitle: "1. 프로젝트 소개",
        description: (
          <>
            <p>
              2023년도 가톨릭대학교 축제를 홍보, 안내하는 웹 페이지입니다.
              Fullpage를 사용하여 사용자 친화적인 레이아웃을 설계하여 필요한
              모든 정보를 쉽게 확인할 수 있도록 했습니다. 백엔드 개발자 없이
              프론트엔드 개발자 5명이서 진행한 프로젝트였기에 이미지와 각종
              데이터들은 hooks폴더에서 선언하여 불러오는 형식으로 이용했습니다.
            </p>
            <p>
              <strong>1. Modal </strong>: 처음 페이지에 들어온 유저를 위한
              모달을 맨 처음 띄워주며, 축제의 유의사항 및 공지사항을 보여줍니다.
            </p>
            <p>
              <strong>2. Navbar </strong>: 단순하면서도 접근성을 위해 헤더를
              없애고 버튼으로 구성된 Navbar로 구현하였습니다.
            </p>
            <p>
              <strong>3. Hooks </strong>: 서버 없이 하드코딩을 방지하고자
              Hooks폴더에 데이터를 저장하여 사용하였습니다.
            </p>
            <p>
              <strong>4. 노점 </strong>: 지도로 각 부스가 위치한 장소를
              표현해주고, 장소에서 진행하는 행사 및 부스의 정보를 카드 형태로
              제공합니다.
            </p>
            <p>
              <strong>5. 주점 </strong>: 한 장소에서 다양한 부스들이 있기에, 한
              눈에 볼 수 있는 이미지 파일로 대체하였습니다.
            </p>
          </>
        ),
      },
      {
        subtitle: "2. 개발 과정",
        description:
          "약 2주간의 짧은기간의 프로젝트였고 백엔드 개발자 없이 프론트엔드 개발자로만 이루어진 팀이었기에 어떻게 많은 데이터를 다루고 레이아웃을 구현할까 고민이 많았습니다. 시간이 많지 않았기에 주에 3~4번의 회의를 거치고 현업 디자이너가 프로젝트에 도움을 주어 문제없이 진행할 수 있었으며, 이미지는 많지 않기에 assets 폴더에 텍스트 데이터는 hooks폴더에 각각 컴포넌트마다 hook.js를 생성하여 그 안에 데이터를 넣어 하드코딩을 방지하는 방식으로 진행했습니다.",
      },
      {
        subtitle: "3. 기술 스택",
        description:
          "프레임워크로 React와 TailwindCSS, StyledComponent를 사용하였으며 js-confetti를 사용하여 폭죽 이펙트를 구현하였습니다. 모달과 fullpage, carousel를 이용한 메인페이지 구성을 담당하였습니다. 메인 페이지에 많은 정보를 담을 것이 아니기때문에 React Fullpage로 스크롤을 이용하여 페이지를 구성하였고, 쿠키 데이터를 사용하여 모달 페이지를 보여주며 Carousel를 이용하여 타임테이블을 확인할 수 있도록 구성하였습니다.",
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
          "처음에는 CSS프레임워크는 독립된 브랜치에서 자유롭게 사용해도 상관없겠다고 생각했지만, 후반부에 수정할 부분이 많아지며 CSS 프레임워크도 통일해서 사용하는 것이 좋겠다고 느꼈고, 처음으로 TL의 역할로 브랜들을 머지하고 팀원들을 끌어가는 과정에서 어려움을 많이 겪었습니다.",
      },
    ],
  }

  return { titleData }
}

export default FestivalDetail
