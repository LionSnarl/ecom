import React from 'react'

import './preview-collection.styles.scss'

const PreviewCollection = ({ title, items, id }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
)

export default PreviewCollection
