import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';
import Buttons from './components/Buttons';
import ImagePreview from './components/ImagePreview';
import MemeForm from './components/MemeForm';

export default function App() {
  const [topText, setTopText] = useState('');
  const [botText, setBotText] = useState('');
  const [templateInput, setTemplateInput] = useState('');
  const [options, setOptions] = useState({ method: 'GET' });

  const [imgSrc, setImgSrc] = useState('');
  const [url, setUrl] = useState('https://api.memegen.link/images/afraid');

  function handleBotText(e) {
    setBotText(e.currentTarget.value);
  }

  function handleTopText(e) {
    setTopText(e.currentTarget.value);
  }

  function handleTemplateInput(e) {
    setTemplateInput(e.currentTarget.value);
  }

  function handleTemplateSubmit() {
    setOptions({ method: 'GET' });
    setUrl(`https://api.memegen.link/images/${templateInput}`);
  }

  function handlePreview() {
    setOptions({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        template_id: templateInput ? templateInput.toLowerCase() : 'aag',
        text: [topText, botText],
        extension: 'string',
        redirect: true,
      }),
    });
    setUrl('https://api.memegen.link/images');
  }
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = response;
        console.log(data);
        return data.url;
      } catch (error) {
        console.log(error);
      }
    }
    fetchImage()
      .then((data) => setImgSrc(data))
      .catch((err) => console.log(err));
  }, [url, options]);

  function handleFileDownload() {
    saveAs(imgSrc, 'meme.png');
  }

  return (
    <div className="container">
      <ImagePreview imgSrc={imgSrc} />
      <MemeForm
        handleTopText={handleTopText}
        handleBotText={handleBotText}
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
