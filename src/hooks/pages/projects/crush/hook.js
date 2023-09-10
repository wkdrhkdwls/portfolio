import React from "react"
import { Link } from "gatsby"

function CrushDetail() {
  const titleData = {
    title: "Crush",
    sections: [
      {
        subtitle: "1. 수행 동기 및 배경",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        subtitle: "2. 기대효과 및 활용계획",
        description: "",
      },
      {
        subtitle: "3. 기술 스택",
        description: "",
      },

      {
        subtitle: "4. 결과",
        description: (
          <div>
            <Link
              to="https://github.com/wkdrhkdwls/Crush_Front"
              target="_blank"
              className="github-link"
            >
              Github링크
            </Link>
          </div>
        ),
      },
      {
        subtitle: "5. 인사이트",
        description: "",
      },
    ],
  }

  return { titleData }
}

export default CrushDetail
