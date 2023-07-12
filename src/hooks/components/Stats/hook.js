import { SlOrganization } from "react-icons/sl"
import { RiGitRepositoryLine } from "react-icons/ri"
import { DiGitCommit } from "react-icons/di"
import React from "react"

function useStatsDetail() {
  const data = [
    {
      title: "6+",
      description: "Organization",
      icon: <SlOrganization color="black" size={32} />,
    },
    {
      title: "38+",
      description: "Repositories",
      icon: <RiGitRepositoryLine color="black" size={30} />,
    },
    {
      title: "716+",
      description: "Commits",
      icon: <DiGitCommit color="black" size={40} />,
    },
  ]

  return { data }
}

export default useStatsDetail
