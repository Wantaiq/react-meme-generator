import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';
import Buttons from './components/Buttons';
import Hero from './components/Hero';
import ImagePreview from './components/ImagePreview';
import MemeForm from './components/MemeForm';

export default function App() {
  const [topInput, setTopInput] = useState('');
  const [botInput, setBotInput] = useState('');
  const [templateInput, setTemplateInput] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  const [options, setOptions] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [url, setUrl] = useState('https://api.memegen.link/templates/afraid');

  function handleBotInput(e) {
    setBotInput(e.currentTarget.value);
  }

  function handleTopInput(e) {
    setTopInput(e.currentTarget.value);
  }

  function handleTemplateInput(e) {
    setTemplateInput(e.currentTarget.value);
  }

  function handleTemplateSubmit() {
    templateInput
      ? setUrl(
          `https://api.memegen.link/templates/${templateInput.toLowerCase()}`,
        )
      : setUrl(`https://api.memegen.link/templates/doge`);
  }

  function handlePreview() {
    setIsPreview(true);
    setOptions({
      method: 'POST',
      accept: 'application/json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        style: ['string'],
        text: [topInput, botInput],
        font: 'string',
        extension: 'string',
        redirect: true,
      }),
    });
  }
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = isPreview
          ? await fetch(url, options)
          : await fetch(url);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = isPreview ? response : await response.json();
        return isPreview ? data.url : data.blank;
      } catch (error) {
        console.log(error);
      }
    }
    fetchImage()
      .then((data) => setImgSrc(data))
      .catch((err) => console.log(err));
  }, [url, options, isPreview]);

  function handleFileDownload() {
    saveAs(imgSrc, 'meme.png');
  }

  return (
    <div className="container">
      <ImagePreview imgSrc={imgSrc} />
      <MemeForm
        handleTopInput={handleTopInput}
        handleBotInput={handleBotInput}
        handleTemplateInput={handleTemplateInput}
        handleTemplateSubmit={handleTemplateSubmit}
      />
      <div className="flex-row">
        <Buttons
          handleTemplateSubmit={handleTemplateSubmit}
          handlePreview={handlePreview}
          imgSrc={imgSrc}
          handleFileDownload={handleFileDownload}
        />
      </div>
    </div>
  );
}
