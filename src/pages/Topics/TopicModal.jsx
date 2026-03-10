function TopicDetails({ topic }) {
  const detailsText = topic.details ?? topic.Details ?? 'No details available for this topic.'

  return (
    <div className="topic-details">
      {/* <p className="modal-meta">
        <strong>Created:</strong> {topic.created} • <strong>Status:</strong> {topic.status}
      </p> */}
      <div className="topic-details-content">
        {detailsText}
      </div>
    </div>
  )
}
export default function TopicModal({ topic, onClose }) {
  if (!topic) return null


  return (
    <div className="topic-modal-overlay" onClick={onClose}>
      <div className="topic-modal" role="dialog" aria-modal="true" aria-label={`Topic details for ${topic.name}`} onClick={(event) => event.stopPropagation()}>
        <header className="modal-header">
          <div className="modal-title-group">
            <h2>{topic.name}</h2>
            <p className="modal-submeta">
              Created: {topic.created} • Status: {topic.status}
            </p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close details">
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <div className="modal-body">
          <TopicDetails topic={topic} />
        </div>
      </div>
    </div>
  )
}