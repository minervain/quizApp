import React from 'react'
import './introduce.css'

function introduce({ modlar }) {

  return (
    <div className='tanitim'>
      <div className='alt-tanitim'>
        <h1 className='km-baslik'>Kim Milyoner Olmak istemezkiye hoşgeldin</h1>
        <img style={{ width: 300 }} src="https://static.birgun.net/resim/haber/2023/09/13/kim-milyoner-olmak-ister-de-buyuk-odul-5-milyon-tl-oldu.jpg" alt="" />

        <div>Zorluk Seviyesini seç ve başla</div>

        <select className='select-option'>
          {modlar.map((veri) => (
            <option key={veri.id} value={veri.value}>
              {veri}
            </option>
          ))}
        </select>

      </div>
    </div>
  )
}

export default introduce