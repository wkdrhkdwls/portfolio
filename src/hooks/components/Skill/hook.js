import { graphql, useStaticQuery } from "gatsby"

function useSkillDetail() {
  const data = useStaticQuery(graphql`
    query {
      skillURL: allFile(
        filter: { absolutePath: { regex: "/contents/images/skill/" } }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      toolURL: allFile(
        filter: { absolutePath: { regex: "/contents/images/tool/" } }
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

  const skillURL = data.skillURL.edges.map(({ node }) => node)
  const toolURL = data.toolURL.edges.map(({ node }) => node)

  const titleData = {
    title: "My skills",
    head: "Available Skills & Tools",
    description:
      "저는 사용자가 다음과 같은 기술로 더 적은 노력과 시간으로 작업을 수행할 수 있도록 지원하는 간단하고 직관적이며 대응력이 뛰어난 사용자 인터페이스를 개발합니다.",
  }

  return { skillURL, toolURL, titleData }
}

export default useSkillDetail
