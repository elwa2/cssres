document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("img,iframe").forEach(e=>{!e.hasAttribute("loading")&&e.setAttribute("loading","lazy")});window.addEventListener("load",()=>{document.querySelectorAll("link[rel='stylesheet']").forEach(e=>{try{e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length===0&&e.remove()}catch(t){}})});let e=!1;window.addEventListener("scroll",()=>{if(!e){window.requestAnimationFrame(()=>{e=!1});e=!0}});document.querySelectorAll("img").forEach(e=>{if((!e.width||!e.height)&&e.naturalWidth&&e.naturalHeight){e.style.aspectRatio=`${e.naturalWidth} / ${e.naturalHeight}`}})});



document.addEventListener("DOMContentLoaded", function () {
  const style = `
    .popup {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .popup-content {
      background: #000;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 10px;
      position: relative;
      width: 90%;
      max-width: 400px;
      font-family: sans-serif;
    }
    .popup-content button {
      background: #00d161;
      color: white;
      padding: 10px 25px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      margin-top: 15px;
    }
    .popup-content .close {
      position: absolute;
      top: 10px; right: 15px;
      font-size: 24px;
      color: white;
      cursor: pointer;
    }
  `;

  const html = `
    <div class="popup" id="whatsappPopup">
      <div class="popup-content">
        <span class="close" onclick="document.getElementById('whatsappPopup').remove()">&times;</span>
        <p>

        
        انضم الى قناة الواتس معلومات مجانية لحياة صحية
        </p>
        <button onclick="window.location.href='https://whatsapp.com/channel/0029VayTzRoHVvTXyQ1zRO05'">إنضم الآن</button>
      </div>
    </div>
  `;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);

  const div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div);
});
