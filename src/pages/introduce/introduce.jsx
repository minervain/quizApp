import React, { useState } from 'react';
import './introduce.css';
import { useNavigate } from 'react-router-dom';

function Introduce({ modlar }) {
  const navigate = useNavigate();
  const [selectedMod, setSelectedMod] = useState("");

  const sayfayaGit = () => {
    if (selectedMod) {
      navigate(`/quiz/${selectedMod}`);
    }
  }

  const handleSelectChange = (e) => {
    setSelectedMod(e.target.value);
  };

  return (
    <div className='tanitim'>
      <div className='alt-tanitim'>
        <h1 className='km-baslik'>Kim Milyoner Olmak İsterkiye Hoşgeldin</h1>
        <img style={{ width: 300 }} src="https://static.birgun.net/resim/haber/2023/09/13/kim-milyoner-olmak-ister-de-buyuk-odul-5-milyon-tl-oldu.jpg" alt="" />

        <div>Zorluk Seviyesini Seç ve Başla</div>

        <select className='select-option' onChange={handleSelectChange}>
          {modlar.map((veri) => (
            <option key={veri.id} value={veri}>
              {veri}
            </option>
          ))}
        </select>
        <button className='introduceBtn-btn' onClick={sayfayaGit}>Başla</button>
      </div>
    </div>
  )
}

export default Introduce;
