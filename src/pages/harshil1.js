import React, { Component } from "react"
 import { Link } from "gatsby"
 import SEO from "../components/seo"
 import Img from "gatsby-image"
export const datas =["harshil","harshil","harshil"]
// import Layout from "../components/layout"
//import Image from "../components/image"


class IndexPage extends Component{
   constructor({data}){
       super({data});
       this.state={
           title:"harshil"
       }
   }

 handleChangeName=()=>{
     this.setState({
         title:"nikunj"
     })
}

render(){
    return (
        <div>
          <SEO title="Harshil" />
          <h1>Hi Harshil1</h1>
          <p>Welcome to your Dentek Material Hub.</p>
          <ul>{datas.map((name,i)=><li key={i}>{name}</li>)}</ul>
          <p>{this.state.title}</p>
          <button onClick={this.handleChangeName}>Change Name</button>
          {/* <p>Now go build something great.</p> */}
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
          </div>
          <Link to="/page-2/">Go to page 2</Link>
          {/* <Link to="/harshil/">Harshil</Link> */}
        </div>
      )}
    
}

export default IndexPage
