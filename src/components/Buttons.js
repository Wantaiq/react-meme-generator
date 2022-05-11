export default function Button(props) {
  return (
    <div className="buttons flex-col">
      <div className="flex-row">
        <button
          onClick={props.handleTemplateSubmit}
          htmlFor="generate-template"
        >
          Generate template
        </button>
        <button onClick={props.handlePreview} data-test-id="generate-meme">
          Preview meme
        </button>
      </div>
      <button
        onClick={props.handleFileDownload}
        className="download-btn"
        htmlFor="download-btn"
      >
        Download
      </button>
    </div>
  );
}
