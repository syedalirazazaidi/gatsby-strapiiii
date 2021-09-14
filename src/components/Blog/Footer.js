import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <React.Fragment>
      <div className="copyright-area seven">
        <div className="container">
          <div className="copyright-item">
            <p>
              &copy;{currentYear} Design & Developed by{" "}
              <a href="https://serverlesstech.netlify.app/" target="_blank">
                aliraza
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
