export default function ImagePreview(props) {
  // props.templateInput
  // props.botInput
  // props.topInput
  return (
    <>
      <img src={props.imgSrc} alt="meme" data-test-id="meme-image" />;
      <a href={props.imgSrc} download>
        DOWNLOAD
      </a>
    </>
  );
}
