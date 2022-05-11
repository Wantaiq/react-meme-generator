export default function MemeForm(props) {
  return (
    <div className="form">
      <label htmlFor="top-text">Top text</label>
      <input onChange={(e) => props.handleTopInput(e)} id="top-text" />
      <label htmlFor="bot-text">Bottom text</label>
      <input onChange={(e) => props.handleBotInput(e)} id="bot-text" />
      <label htmlFor="template-input">Meme template</label>
      <input
        onChange={(e) => props.handleTemplateInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        id="template-input"
      />
    </div>
  );
}
