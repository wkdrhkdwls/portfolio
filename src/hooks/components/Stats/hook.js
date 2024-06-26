import { SlOrganization } from "react-icons/sl"
import { RiGitRepositoryLine } from "react-icons/ri"
import { DiGitCommit } from "react-icons/di"
import React, { useEffect, useState } from "react"

function useStatsDetail() {
  const [items, setItems] = useState([])
  const [users] = useState("wkdrhkdwls")

  const accessToken = process.env.GATSBY_ACCESS_TOKEN

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${users}/repos`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        if (res.ok) {
          const repos = await res.json()
          setItems(repos)
          console.log(repos)

          let totalCount = 0
          for (const repo of repos) {
            const commitsRes = await fetch(
              repo.commits_url.replace("{/sha}", ""),
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`, // 여기에 헤더 추가
                },
              }
            )
            if (commitsRes.ok) {
              // 응답이 성공적인지 확인
              const commits = await commitsRes.json()
              if (Array.isArray(commits)) {
                // commits가 배열인지 확인
                totalCount += commits.length
              }
            } else {
              console.error(
                `Failed to fetch commits for repo: ${repo.name}. Status: ${commitsRes.status}`
              )
            }
          }
          setTotalCommitCount(totalCount)
        } else {
          console.error(`Failed to fetch repositories. Status: ${res.status}`)
        }
      } catch (error) {
        console.error("An error occurred while fetching repositories:", error)
      }
    }

    fetchRepos()
  }, [users, accessToken])

  const [totalCommitCount, setTotalCommitCount] = useState(0)

  const data = [
    {
      title: `+12`,
      description: "Organization",
      icon: <SlOrganization color="black" size={32} />,
    },
    {
      title: `${items.length}`,
      description: "Repositories",
      icon: <RiGitRepositoryLine color="black" size={30} />,
    },
    {
      title: `${totalCommitCount}+`,
      description: "Commits",
      icon: <DiGitCommit color="black" size={40} />,
    },
  ]

  return { data }
}

export default useStatsDetail
