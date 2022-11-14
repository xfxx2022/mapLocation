import React from 'react'
import './index.css'

export default function TuCao() {
  if (!process.env.REACT_APP_TUCAO_ID) {
    return null
  }

  return (
    <a className="tucao"  target="_blank" href={`https://wpa.qq.com/msgrd?v=3&uin=1255104520&site=qq&menu=yes${process.env.REACT_APP_TUCAO_ID}`}>
      反馈 留言
    </a>
  )
}