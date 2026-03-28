import React from 'react'
import './dock.scss'
const dock = () => {
  return (
    <footer className='dock'>
        <div className='icon github'><img src="/doc-icon/github.svg" alt="" /></div>
        <dir className='icon note'><img src="/doc-icon/note.svg" alt="" /></dir>
        <dir className='icon pdf'><img src="/doc-icon/pdf.svg" alt="" /></dir>
        <dir className='icon calender'><img src="/doc-icon/calender.svg" alt="" /></dir>
        <dir className='icon spotify'><img src="/doc-icon/spotify.svg" alt="" /></dir>
        <dir className='icon mail'><img src="/doc-icon/mail.svg" alt="" /></dir>
        <dir className='icon link'><img src="/doc-icon/link.svg" alt="" /></dir>
        <dir className='icon cli'><img src="/doc-icon/cli.svg" alt="" /></dir>
    </footer>
  )
}

export default dock
