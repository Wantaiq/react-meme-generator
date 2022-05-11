export default function Button(props) {
  return (
    <div className="buttons flex-col">
      <div className="flex-row">
        <button
          data-test-id="generate-meme"
          onClick={props.handleTemplateSubmit}
          htmlFor="generate-template"
        >
          Generate meme
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
