import { SlOrganization } from "react-icons/sl"
import { RiGitRepositoryLine } from "react-icons/ri"
import { DiGitCommit } from "react-icons/di"
import React, { useEffect, useState } from "react"

function useStatsDetail() {
  const [items, setItems] = useState([])
  const [totalCommitCount, setTotalCommitCount] = useState(0)
  const [organizationCount, setOrganizationCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const users = "wkdrhkdwls"
  const accessToken = process.env.GATSBY_ACCESS_TOKEN

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
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
            try {
              const commitsRes = await fetch(
                repo.commits_url.replace("{/sha}", ""),
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              )

              console.log("커밋" + commitsRes)
              if (commitsRes.ok) {
                const commits = await commitsRes.json()
                if (Array.isArray(commits)) {
                  totalCount += commits.length
                }
              } else {
                console.error(
                  `Failed to fetch commits for repo: ${repo.name}. Status: ${commitsRes.status}`
                )
              }
            } catch (commitsError) {
              console.error(
                `An error occurred while fetching commits for repo: ${repo.name}`,
                commitsError
              )
            }
          }
          setTotalCommitCount(totalCount)
        } else {
          console.error(`Failed to fetch repositories. Status: ${res.status}`)
        }

        // Fetch organization data
        const orgRes = await fetch(
          `https://api.github.com/users/${users}/orgs`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )

        if (orgRes.ok) {
          const orgs = await orgRes.json()
          console.log("orgs", orgs) // 수정된 로그
          setOrganizationCount(orgs.length)
        } else {
          console.error(
            `Failed to fetch organizations. Status: ${orgRes.status}`
          )
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching repositories or organizations:",
          error
        )
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [users, accessToken])

  const data = [
    {
      title: `15`,
      description: "Organizations",
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

  return { data, loading }
}

export default useStatsDetail
