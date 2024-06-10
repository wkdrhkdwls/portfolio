import React from "react"
import { Link } from "gatsby"

function MyListDetail() {
  const titleData = {
    title: "MyList",
    sections: [
      {
        subtitle: "1. 수행 동기 및 배경",
        description: (
          <p>
            MyList는 음악과 이미지를 포함한 플레이리스트를 만들어 하나의 링크로
            다른 사람들과 취향을 공유할 수 있는 서비스입니다. 자신을 어필하는
            것이 중요한 세대에서 음악은 최고의 수단 중 하나입니다. 음악은
            대부분의 사람들에게 공통된 관심사이기 때문입니다. 또한, 연인
            사이에서도 음악 취향은 매우 중요합니다. 이러한 이유로, 저희는
            이미지와 음악을 커스터마이징할 수 있는 플레이리스트를 최대 4개까지
            생성하고, 이를 하나의 링크로 공유할 수 있는 LinkedInBio 서비스를
            개발했습니다.
          </p>
        ),
      },
      {
        subtitle: "2. 프로젝트 기여 내용",
        description: (
          <p>
            - 레퍼런스나 레거시 코드 없이 초기 세팅부터 현재까지 전반적인
            프론트엔드 개발을 리드
            <br />
            - 플레이리스트 내 음악 추가 및 이미지 커스터마이징 기능 개발
            <br />
            - 댓글, 좋아요 등 플레이리스트 디테일 및 음악 추가 기능 개발
            <br />
            - 첫 사용 유저를 위한 튜토리얼 기능 개발
            <br />
            - React, TypeScript, TailwindCSS 기반의 프로젝트
            <br />- Redux, Recoil을 사용하여 음악 정보 및 토글 상태값을 전역으로
            관리
          </p>
        ),
      },

      {
        subtitle: "3. 기술 스택",
        description: (
          <ol>
            <li> - React, React-Router</li>
            <li>- Redux Toolkit, Recoil</li>
            <li> - TypeScript, Craco, Babel</li>
            <li>- TailwindCSS, daisyUI </li>
            <li>- Axios</li>
            <li>- react-cropper, browser-image-compression </li>
            <li>- i18next ,react-oauth/google</li>
          </ol>
        ),
      },

      {
        subtitle: "4. 결과",
        description: (
          <a href="https://mylist.im/" target="_blank" className="github-link">
            배포
          </a>
        ),
      },
    ],
  }

  return { titleData }
}

export default MyListDetail
