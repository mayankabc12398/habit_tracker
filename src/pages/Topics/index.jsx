import React, { useMemo, useState } from 'react'
import TopicModal from './TopicModal'
import DOM from './ReactJS/DOM'

const mockTopics = [
  {
    id: 1,
    name: 'Document Object Model (DOM)',
    description: 'Understanding the structure and manipulation of the DOM is crucial for effective web development.',
    created: 'Jan 25, 2026',
    status: 'Active',
    Details: <DOM/>,
  },
  
  
]





export default function index() {
  const [activeTopicId, setActiveTopicId] = useState(null)

  const activeTopic = useMemo(
    () => mockTopics.find((topic) => topic.id === activeTopicId) ?? null,
    [activeTopicId]
  )

  return (
    <section className="topics-page p-2">
      <header className="topics-header p-1">
        <h4>Topics</h4>
        {/* <p className="topics-subtitle">
          Explore the key areas of your habit journey. Use the table below to quickly scan and manage topics.
        </p> */}
      </header>

      <div className="table-wrapper">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Description</th>
              <th>View</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTopics.map((topic) => (
              <tr key={topic.id}>
                <td>
                  <strong>{topic.name}</strong>
                </td>
                <td>{topic.description}</td>
                <td>
                  <button
                    className="icon-button"
                    type="button"
                    onClick={() => setActiveTopicId(topic.id)}
                    aria-label={`View details for ${topic.name}`}
                  >
                    <i className="fas fa-eye" aria-hidden="true" />
                  </button>
                </td>
                <td>
                  <span className={`status-pill status-pill--${topic.status.toLowerCase()}`}>
                    {topic.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TopicModal topic={activeTopic} onClose={() => setActiveTopicId(null)} />
    </section>
  )
}
