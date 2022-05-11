export default function MemeForm(props) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      props.handleTemplateSubmit();
    }
  }
  return (
    <>
      <div className="meme-template flex-col">
        <label htmlFor="template-input">Meme template</label>
        <input
          onChange={(e) => props.handleTemplateInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          id="template-input"
        />
      </div>
      <div className="form flex-row">
        <div className="top-text flex-col">
          <label htmlFor="top-text">Top text</label>
          <input onChange={(e) => props.handleTopInput(e)} id="top-text" />
        </div>
        <div className="bottom-text flex-col">
          <label htmlFor="bot-text">Bottom text</label>
          <input onChange={(e) => props.handleBotInput(e)} id="bot-text" />
        </div>
      </div>
    </>
  );
}
