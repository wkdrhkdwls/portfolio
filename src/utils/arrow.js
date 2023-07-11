import { Link } from "gatsby"
import React from "react"
import "../styles/style.css"
import { FaArrowAltCircleUp } from "react-icons/fa"

const ArrowUp = () => {
  return (
    <Link href="#top" class="go-top" data-go-top title="Go to Top">
      <FaArrowAltCircleUp size={48} />
    </Link>
  )
}

export default ArrowUp
