import React from 'react'

export default function Footer() {
    // styling in React 
    // let footerStyle = {
    //     position: "relative",
    //     top: "100vh",
    //     width: "100%"
    // } 
    // we have to call the fuction where to apply that styling
    return (
        <div>
            <footer className="bg-dark text-light py-3" /*style={footerStyle}*/>
                <p className="text-center">
                    Copyright &copy; All right reserved || Rakesh Ranjan Kumar
                </p>
            </footer>
        </div>
    )
}
