export default function Button(props) {
  return (
    <>
      <button onClick={props.handlePreview} data-test-id="generate-meme">
        {' '}
        See preview of your meme
      </button>
      <button onClick={props.handleTemplateSubmit} htmlFor="generate-template">
        Generate template{' '}
      </button>
      <button htmlFor="download-btn"> Download </button>
    </>
  );
}
