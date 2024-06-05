    
import { SpeechConfig, AudioConfig, SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';

 // Create a new SpeechRecognizer object
     const speechConfig = SpeechConfig.fromSubscription('<key>', 'eastus');
     const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
     const recognizer = new SpeechRecognizer(speechConfig, audioConfig);
 
     // Start speech recognition when the user clicks the microphone icon
     const startSpeechRecognition = () => {
      recognizer.recognizeOnceAsync((result) => {
        const recognizedText = result.text || '';
        const withoutFullStop = recognizedText.split('.').join('');
        setSearchCategory(withoutFullStop.trim());
      });
    };
