import React from 'react';
import './style.css'

export default function SampleModal({ close, book }) {
  
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        Content
        {book.title}
      </div>
    </div>
  )
}