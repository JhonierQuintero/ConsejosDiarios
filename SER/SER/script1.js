document.addEventListener('DOMContentLoaded', () => {
  const gameContainer  = document.getElementById('game-container');
  const silhouetteCont = document.getElementById('silhouette');
  const silhouetteImg  = document.getElementById('silhouette-img');
  const board          = document.getElementById('tangram-board');
  const timerEl        = document.getElementById('timer');
  const controls       = document.getElementById('controls');
  const pauseBtn       = document.getElementById('pause-btn');
  const resetBtn       = document.getElementById('reset-btn');
  const hintBtn        = document.getElementById('hint-btn');
  const finishBtn      = document.getElementById('finish-btn');

  const levels = [
    { img: 'silhouettes/gato.png',   hint: 'Empieza con triángulo grande.' },
    { img: 'silhouettes/paloma.png', hint: 'Cabeza arriba.' },
    { img: 'silhouettes/cisne.png',  hint: 'Cuello curvo.' }
  ];
  let order = shuffle(levels), current = 0;
  let timerId, previewTime, assemblyTime, paused, hintUsed;

  // Arrancar previsualización al cargar
  startPreviewPhase();

  function startPreviewPhase() {
    gameContainer.className = 'preview';
    controls.style.display = 'none';
    board.style.display    = 'none';
    silhouetteCont.style.display = 'block';
    silhouetteImg.src = order[current].img;
    previewTime = 30;
    timerEl.textContent = formatTimer(previewTime);
    clearInterval(timerId);
    timerId = setInterval(() => {
      previewTime--;
      timerEl.textContent = formatTimer(previewTime);
      if (previewTime <= 0) {
        clearInterval(timerId);
        silhouetteCont.style.display = 'none';
        startAssemblyPhase();
      }
    }, 1000);
  }

  function startAssemblyPhase() {
    gameContainer.className = 'assembly';
    controls.style.display = 'flex';
    board.style.display    = 'block';
    showPieces();
    assemblyTime = 180;
    paused = false;
    hintUsed = false;
    timerEl.textContent = formatTimer(assemblyTime);
    clearInterval(timerId);
    timerId = setInterval(() => {
      if (!paused) {
        assemblyTime--;
        timerEl.textContent = formatTimer(assemblyTime);
        if (assemblyTime <= 0) {
          clearInterval(timerId);
          nextLevel();
        }
      }
    }, 1000);

    pauseBtn.onclick  = () => paused = !paused;
    resetBtn.onclick  = () => { clearInterval(timerId); startAssemblyPhase(); };
    hintBtn.onclick   = () => { if (!hintUsed) { alert(order[current].hint); hintUsed = true; } };
    finishBtn.onclick = () => alert('Función finalizar pendiente');
  }

  const piecesData = [
    { points: '0,0 200,0 0,200',           color: '#FF6B6B' },
    { points: '200,200 200,0 0,200',       color: '#FFD93D' },
    { points: '100,100 200,100 100,200',   color: '#6BCB77' },
    { points: '0,200 100,200 0,300',       color: '#4D96FF' },
    { points: '200,0 300,0 300,100',       color: '#E96479' },
    { points: '100,0 200,0 200,100 100,100', color: '#845EC2' },
    { points: '0,300 100,300 200,200 100,200', color: '#FF9671' }
  ];

  function showPieces() {
    board.innerHTML = '';
    piecesData.forEach(p => {
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg   = document.createElementNS(svgNS,'svg');
      svg.classList.add('piece');
      svg.draggable = false;
      svg.dataset.angle = '0';
      svg.setAttribute('viewBox','0 0 300 300');
      svg.setAttribute('width','40%');

      const poly = document.createElementNS(svgNS,'polygon');
      poly.setAttribute('points', p.points);
      poly.setAttribute('fill', p.color);
      svg.appendChild(poly);
      board.appendChild(svg);

      svg.addEventListener('dblclick', () => {
        const ang = (parseInt(svg.dataset.angle)+45)%360;
        svg.dataset.angle = ang;
        svg.style.transform = `rotate(${ang}deg)`;
      });

      setTimeout(() => {
        const rect = svg.getBoundingClientRect();
        const x = Math.random()*(board.clientWidth-rect.width);
        const y = Math.random()*(board.clientHeight-rect.height);
        svg.style.left = `${x}px`;
        svg.style.top  = `${y}px`;
        makeDraggable(svg);
      }, 0);
    });
  }

  function makeDraggable(el) {
    let dragging=false, startX, startY, origX, origY;
    el.addEventListener('pointerdown', e => {
      e.preventDefault();
      dragging = true;
      el.setPointerCapture(e.pointerId);
      const b = board.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY;
      origX  = r.left - b.left; origY = r.top - b.top;
    });
    el.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx=e.clientX-startX, dy=e.clientY-startY;
      let nx=origX+dx, ny=origY+dy;
      nx = Math.max(0, Math.min(nx, board.clientWidth-el.clientWidth));
      ny = Math.max(0, Math.min(ny, board.clientHeight-el.clientHeight));
      el.style.left = `${nx}px`; el.style.top = `${ny}px`;
    });
    el.addEventListener('pointerup', e => {
      dragging = false;
      el.releasePointerCapture(e.pointerId);
    });
  }

  function formatTimer(s) {
    const m = String(Math.floor(s/60)).padStart(2,'0');
    const sec = String(s%60).padStart(2,'0');
    return `${m}:${sec}`;
  }

  function shuffle(a) {
    for(let i=a.length-1; i>0; i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }

  function nextLevel() {
    current = (current+1) % order.length;
    startPreviewPhase();
  }
});
