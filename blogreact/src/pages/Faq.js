import React from 'react'
import Question from './Question'
function Faq() {
  return (
    <div>
      <h1>welcome to the FAQ ? </h1>
      {/* numberinG and raanking are two proprty ARE USED in home page which are pass in child page*/}
      <Question numbering='1' ranking='A'/>
      <Question numbering='2' ranking='b'/>
      <Question numbering='3' ranking='D'/>
      <Question numbering='4' ranking='c'/>


    </div>
  )
}

export default Faq
