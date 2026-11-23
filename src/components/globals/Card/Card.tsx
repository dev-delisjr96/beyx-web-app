import React from 'react'

type content = React.ReactNode;
type onClick = () => void;

const Card = ({ content,  onClick }: { content: content, onClick: onClick },) => {

  return (
    <div className={`card`} onClick={onClick}>
      {content}
    </div>
  )
}

export default Card