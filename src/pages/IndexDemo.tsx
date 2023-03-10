import { FC, useState } from 'react'

interface Props {
  title: string
}

const IndexDemo: FC<Props> = ({ title }) => {
  const [show, setShow] = useState(false)

  const onAccordionClick = () => {
    setShow(!show)
  }

  return (
    <div className="IndexDemo">
      <h3 className="IndexDemo-title">{title}</h3>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => { onAccordionClick() }}>{!show ? 'Show' : 'Hide'}
      </button>
      {show && (
        <div className="IndexDemo-content">
          <h4>Content</h4>
        </div>
      )}
    </div>
  )
}

export default IndexDemo
