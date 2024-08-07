import React from "react"

function getInsuranceServiceDescription() {
  return (
    <>
      <p>
        다음은 Microsoft OpenAI를 활용하여 AI 기반 보험 추천 서비스를 개발한
        사례에 대한 자세한 설명입니다.
      </p>

      <h2>수행 동기 및 배경</h2>
      <h3>프로젝트 개요</h3>
      <p>
        현대 사회에서 보험은 개인의 재정적 안정을 도모하는 중요한 요소입니다.
        그러나 각기 다른 상황과 필요에 맞는 적절한 보험 상품을 찾는 것은
        복잡하고 어려운 과정입니다. 이를 해결하기 위해, Microsoft OpenAI 기술을
        활용하여 AI 기반의 보험 추천 서비스를 개발하게 되었습니다.
      </p>
      <h3>수행 동기</h3>
      <ol>
        <li>
          <strong>개인 맞춤형 서비스의 필요성</strong>: 고객마다 다른 생활 환경,
          직업, 건강 상태 등을 고려한 맞춤형 보험 추천이 필요하다는 점을
          인식했습니다.
        </li>
        <li>
          <strong>AI 기술의 발전</strong>: 최신 AI 기술을 활용하면 보다 정확하고
          신속하게 고객에게 맞는 보험 상품을 추천할 수 있다는 가능성을
          보았습니다.
        </li>
        <li>
          <strong>시장 경쟁력 강화</strong>: AI를 활용한 혁신적인 서비스
          도입으로 보험업계에서의 경쟁력을 확보하고자 했습니다.
        </li>
      </ol>
      <h3>서비스 구현</h3>
      <h4>입력 방식</h4>
      <p>
        사용자는 기본적인 정보인 성별, 나이, 보험 종류(종신, 건강, 화재 등)를
        토글과 버튼을 통해 간편하게 입력할 수 있습니다.
      </p>
      <h4>AI 기반 추천</h4>
      <p>
        텍스트 입력창(textarea)을 통해 사용자의 상세한 정보를 AI에게 전달합니다.
        예를 들어, 사용자는 다음과 같이 입력할 수 있습니다:
      </p>
      <ul>
        <li>
          "소방관을 하고 있고 ○○질병, xx질병을 앓고 있어. 이런 직업 특성과 질병
          특성을 고려한 @@보험을 추천해줄래?"
        </li>
      </ul>
      <p>
        이와 같은 구체적인 정보를 입력하면, AI는 이를 분석하여 사용자의 직업,
        건강 상태, 그리고 개인적인 요구사항에 최적화된 보험 상품을 추천합니다.
      </p>
      <h3>기대 효과</h3>
      <ol>
        <li>
          <strong>사용자 편의성 향상</strong>: 복잡한 보험 상품을 손쉽게
          비교하고 선택할 수 있도록 하여 사용자 경험을 크게 향상시킵니다.
        </li>
        <li>
          <strong>정확한 추천</strong>: AI의 데이터 분석 능력을 활용하여
          사용자의 상황에 가장 적합한 보험 상품을 추천함으로써 만족도를
          높입니다.
        </li>
        <li>
          <strong>시간 절약</strong>: 사용자가 일일이 보험 상품을 비교하고
          선택하는 데 소요되는 시간을 대폭 줄여줍니다.
        </li>
      </ol>
      <h3>결론</h3>
      <p>
        이 프로젝트를 통해 AI 기술이 보험 추천 서비스에 적용될 수 있는 가능성을
        확인하였으며, 고객 맞춤형 서비스를 통해 사용자 만족도를 높일 수 있음을
        증명했습니다. 향후에는 더욱 정교한 데이터 분석과 사용자 피드백을
        반영하여 서비스의 정확도와 효율성을 지속적으로 개선해 나갈 것입니다.
      </p>

      <p>
        이와 같이 Microsoft OpenAI를 활용한 보험 추천 서비스는 사용자 경험을
        혁신적으로 개선하고, 보험 선택의 효율성을 높이는 데 큰 기여를 하고
        있습니다.
      </p>
    </>
  )
}

function getExpectedEffectsAndUtilizationPlan() {
  return (
    <>
      <h2>기대효과 및 활용계획</h2>
      <h3>기대효과</h3>
      <ol>
        <li>
          <strong>사용자 편의성 향상</strong>: 사용자가 복잡한 보험 상품을
          손쉽게 비교하고 선택할 수 있도록 하여 사용자 경험을 크게 향상시킵니다.
          AI가 제공하는 맞춤형 추천은 사용자의 시간과 노력을 절약해 줍니다.
        </li>
        <li>
          <strong>정확한 추천</strong>: AI의 데이터 분석 능력을 활용하여
          사용자의 직업, 건강 상태, 개인적인 요구사항 등을 종합적으로 고려한
          정확한 보험 상품 추천이 가능합니다. 이는 사용자 만족도를 높이고,
          신뢰성을 증대시킵니다.
        </li>
        <li>
          <strong>시간 절약</strong>: AI 기반의 빠르고 정확한 추천을 통해
          사용자가 일일이 보험 상품을 비교하고 선택하는 데 소요되는 시간을 대폭
          줄여줍니다. 이를 통해 사용자는 더 중요한 업무나 개인적인 일에 집중할
          수 있습니다.
        </li>
        <li>
          <strong>시장 경쟁력 강화</strong>: AI를 활용한 혁신적인 서비스
          도입으로 보험업계에서의 경쟁력을 확보할 수 있습니다. 최신 기술을
          도입함으로써 고객에게 더욱 매력적인 서비스를 제공하게 됩니다.
        </li>
      </ol>
      <h3>활용계획</h3>
      <ol>
        <li>
          <strong>서비스 개선 및 확장</strong>: 초기 사용자 피드백을 반영하여
          서비스의 정확도와 효율성을 지속적으로 개선해 나갈 것입니다. 더 많은
          데이터를 수집하고 분석함으로써 AI 모델을 더욱 정교하게 발전시킬
          계획입니다.
        </li>
        <li>
          <strong>다양한 보험 상품 추가</strong>: 현재 제공되는 보험 상품 외에도
          다양한 보험 상품을 추가하여, 사용자에게 더 많은 선택지를 제공할
          예정입니다. 이를 통해 다양한 고객층의 요구를 충족시킬 수 있습니다.
        </li>
        <li>
          <strong>모바일 앱 개발</strong>: 웹 기반 서비스 외에도 모바일 앱을
          개발하여 사용자가 언제 어디서나 편리하게 보험 추천 서비스를 이용할 수
          있도록 할 계획입니다. 모바일 접근성을 높여 사용자 경험을 더욱
          향상시킵니다.
        </li>
        <li>
          <strong>파트너십 확장</strong>: 다양한 보험사와의 파트너십을 통해 추천
          가능한 보험 상품의 범위를 확대하고, 사용자에게 더 많은 혜택을 제공할
          수 있도록 할 것입니다. 이를 통해 서비스의 신뢰성을 높이고, 사용자에게
          실질적인 이익을 제공합니다.
        </li>
        <li>
          <strong>교육 및 홍보</strong>: 사용자 교육 프로그램을 통해 AI 기반
          보험 추천 서비스의 장점과 사용 방법을 널리 알리고, 적극적인 홍보
          활동을 통해 더 많은 사용자가 서비스를 이용할 수 있도록 유도할
          것입니다.
        </li>
      </ol>

      <p>
        이와 같은 기대효과와 활용계획을 통해 Microsoft OpenAI를 활용한 보험 추천
        서비스는 사용자 경험을 혁신적으로 개선하고, 보험 선택의 효율성을 높이는
        데 큰 기여를 할 것입니다.
      </p>
    </>
  )
}

function getStack() {
  return (
    <>
      <ol>
        <li>React</li>
        <li>Typescript</li>
        <li>TailwindCSS</li>
        <li>MSW</li>
        <li>axios</li>
        <li>zod</li>
        <li>shadcn</li>
      </ol>
    </>
  )
}

function getInsights() {
  return (
    <>
      <h2>인사이트</h2>

      <h3>1. AI 기술의 실질적 활용 가능성</h3>
      <p>
        AI 기술이 실제 비즈니스 환경에서 어떻게 활용될 수 있는지 명확하게 확인할
        수 있었습니다. 보험 추천 서비스는 매우 복잡한 데이터 분석과 예측을
        필요로 하는데, AI를 통해 이를 효과적으로 수행할 수 있음을 확인했습니다.
      </p>
      <h3>2. 사용자 경험의 중요성</h3>
      <p>
        사용자 편의성을 최우선으로 고려한 서비스 설계가 필요하다는 점을 다시 한
        번 깨달았습니다. 간단한 입력 방식과 맞춤형 추천 시스템은 사용자 만족도를
        크게 높이는 요소로 작용했습니다.
      </p>
      <h3>3. 데이터의 중요성</h3>
      <p>
        고품질의 데이터를 수집하고 분석하는 것이 AI 모델의 성능을 좌우한다는
        점을 알게 되었습니다. 다양한 사용자 데이터를 기반으로 한 정확한 보험
        추천은 데이터의 양과 질에 크게 의존합니다.
      </p>
      <h3>4. 지속적인 서비스 개선의 필요성</h3>
      <p>
        AI 기반 서비스는 초기 개발 단계에서의 성과도 중요하지만, 지속적인 개선과
        업데이트가 필수적입니다. 사용자 피드백을 반영하고, 최신 데이터를
        활용하여 AI 모델을 지속적으로 발전시켜야 합니다.
      </p>
      <h3>5. 파트너십의 가치</h3>
      <p>
        다양한 보험사와의 파트너십을 통해 서비스의 다양성과 신뢰성을 확보할 수
        있음을 알게 되었습니다. 협력 관계를 통해 더 많은 혜택을 사용자에게
        제공할 수 있습니다.
      </p>
    </>
  )
}

function MetLifeDetail() {
  const titleData = {
    title: "MetLife",
    sections: [
      {
        subtitle: "1. 수행 동기 및 배경",
        description: getInsuranceServiceDescription(),
      },
      {
        subtitle: "2. 기대효과 및 활용계획",
        description: getExpectedEffectsAndUtilizationPlan(),
      },
      {
        subtitle: "3. 기술 스택",
        description: getStack(),
      },

      {
        subtitle: "4. 인사이트",
        description: getInsights(),
      },
    ],
  }

  return { titleData }
}

export default MetLifeDetail
