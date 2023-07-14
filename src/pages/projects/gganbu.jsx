import React from "react"
import "../../styles/style.css"
import CustomScript from "../../styles/custom"
import Layout from "../../components/Layout/layout"
import ArrowUp from "../../utils/arrow"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const GganbuGG = () => {
  return (
    <>
      <Layout>
        <main>
          <article class="container">
            <section class="gganbu" id="home">
              <div>
                <figure class="gganbu-banner">
                  <StaticImage
                    src="../../../contents/images/gganbu/gganbuTitle.jpg"
                    alt="gganbu"
                  />
                </figure>
              </div>
              <div class="gganbu-content">
                <h2 class="h2 gganbu-title">깐부 GG</h2>
              </div>
              <div>
                <div>
                  <h2 class="gganbu-subtitle">1. 프로젝트 소개</h2>
                  <p class="gganbu-text">
                    깐부GG는 리그오브레전드의 부속 게임인 롤토체스의 전적을
                    보여주는 사이트인 https://lolchess.gg/ 를 레퍼런스로 하여
                    만든 웹 사이트입니다. 깐부GG는 lolchess.gg와 다르게
                    롤토체스라는 게임 안에서도 더블업 모드라는 하나의 분야를
                    집중적으로 보여주는 사이트입니다. 더블업 모드란 혼자하는
                    것이 아닌 두 명이서 한 팀을 이뤄 진행하는 모드로 기존 혼자
                    진행한 전적과, 게임의 덱등의 정보가 모두 다릅니다. 때문에
                    더블업 안에서만 구 성되는 덱, 순위에 대해 상세하게 볼 수
                    있도록 사용자에게 편의성을 줄 수 있습니다.
                  </p>
                </div>
                <div>
                  <h2 class="gganbu-subtitle">2. 개발 과정</h2>
                  <p class="gganbu-text">
                    처음으로 진행한 협업 프로젝트였기에 처음엔 부족한 점이
                    많았지만, 백엔드 팀원간의 의견 조율과 회의를 통해 체계적으로
                    진행하였습니다. 쿠키를 사용해서 프로젝트를 설명한는 모 달창
                    구현, 한 박스 컴포넌트 안의 들어가는 데이터가 많아 UI적으로
                    편하게 보여주기 위한 고민등 여러가지 문제를 겪었습니다.
                    모달창은 쿠키 데이터를 사용하여 하루동안만 보지 않 기 버튼을
                    구현해 클릭 시 하루동안만 모달창이 뜨지않도록 하였고, 닫기
                    버튼을 누르면 새 로고침 시에 매번 등장하도록 구현하였습니다.
                    모달의 홈페이지 소개에는 FullPage를 사용 했으며, 배달의 민족
                    홈페이지를 참고하였습니다. 또한 Riot에서 API를 받아와
                    백엔드에서 이를 더블업 모드 전용 통계로 바꾸는 과정을 거쳤
                    고, 이를 Axios를 활용하여 API데이터를 받아왔습니다. API가
                    완성되기 전에는 json server 라이브러리를 이용하여
                    목업데이터로 구현하고 완성 후 이를 수정하는 식으로 진행
                    하였습니다. 처음엔 Axios와 Fetch중에 어떤 것을 사용해야
                    좋을지, 어떤 차이점이 있는지 에 대해 많은 고민을 하였고
                    Fetch는 Json으로 변환하는 과정이 추가적으로 필요하기에 최
                    종적으로 axios를 사용하여 구현하였습니다. 통계 데이터는 전부
                    get을 사용하여 데이터를 가져왔으며, 사람의 전적 검색에서는
                    API에 Post를 보내고 데이터를 받아와야 했기에 post 를
                    사용하였습니다.
                  </p>
                </div>
                <div>
                  <h2 class="gganbu-subtitle">3. 기술 스택</h2>
                  <p class="gganbu-text">
                    깐부GG는 React 프레임워크를 사용하였고, CSS로는 Tailwind와
                    Style Component를 기 반으로 구현하였습니다. API를 받아오는
                    과정에서는 Axios를 사용하였고, 이전에 목업 데이 터가 필요할
                    때는 Json-Server 라이브러리를 사용하여 진행했습니다.
                    아이콘이나 버튼 등 은 react-icons를 이용하여 UI를
                    구성하였고, CSS코드가 길어지는 컴포넌트는 StyleComponent를
                    사용하였으며, 짧거나 반응형이 필요한 부분에서는 Tailwind를
                    사용하 깐부GG 2 여 구현하였습니다. 모달창은 react-cookie를
                    사용하여 App.js안에서 CookiesProvider로 묶어 쿠키 데이터를
                    저장하였습니다.
                  </p>
                </div>
                <div>
                  <h2 class="gganbu-subtitle">4. 결과물</h2>
                  <p class="gganbu-text">
                    <Link to="https://github.com/gganbuGG/gganbu_front">
                      Github
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </article>
        </main>
      </Layout>
      <ArrowUp />

      <CustomScript />
    </>
  )
}

export default GganbuGG
