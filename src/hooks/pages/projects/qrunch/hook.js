import React from "react"
import { Link } from "gatsby"

function QrunchDetail() {
  const titleData = {
    title: "MyList",
    sections: [
      {
        subtitle: "1. 수행 동기 및 배경",
        description: "Qrunch는 dd ",
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

export default QrunchDetail
