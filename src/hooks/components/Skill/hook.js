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
    skillButton: "Skills",
    toolButton: "Tools",
    description:
      "저는 다음과 같은 Skill과 Tool로 사용자를 위한 웹을 개발하기 위해 노력합니다. 또한, 간단하고 직관적이며 대응력이 뛰어난 사용자 인터페이스를 개발하려고합니다.",
  }

  return { skillURL, toolURL, titleData }
}

export default useSkillDetail
