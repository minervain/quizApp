import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './quiz.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quiz({ data }) {
  const { zorluk } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Seçilen zorluk seviyesine göre soruları filtrele
  const selectedQuestions = data[zorluk] || [];

  // Soruları karıştır
  const shuffledQuestions = selectedQuestions.sort();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {

      setScore(score + 10);
    }

    // Sonraki soruya geçin veya quiz'i tamamlayın
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz tamamlandı, istediğiniz bir şeyi yapabilirsiniz.
      // Örneğin, sonucu göstermek veya yeniden başlatmak.
      // Bu örnek sadece tüm soruları yanıtlar ve quiz'i tamamlar.
      toast(`Quiz tamamlandı. Toplam Puan: ${score}`);
    }
  };

  if (shuffledQuestions.length === 0) {
    return <div>Seçilen zorluk seviyesine uygun soru bulunamadı.</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <>
      <p className='Puan'>Puan: {score}</p>
      <p className='zorlukseviye'>Zorluk Seviyesi: {zorluk}</p>
      <div className='quiz'> 

        <img style={{ width: 450 }} src='https://image.posta.com.tr/i/posta/75/0x410/64ccca87e4bfdd194ce93e06.jpg' />
        <h3>Soru {currentQuestionIndex + 1}:</h3>
        <p>{currentQuestion.question}</p>
        <ul className='sorular'>
          {currentQuestion.options.map((option, index) => (
            <div className='sorular'>
              <li key={index}>
                <button className='bg-white hover:bg-blue-700  font-bold py-2 px-4 rounded' onClick={() => handleAnswer(option === currentQuestion.correctAnswer)}>
                  {option}
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Quiz;
