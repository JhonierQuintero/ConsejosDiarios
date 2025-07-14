const questions = [
    "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
    "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
    "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
    "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
    "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
    "¿Qué es el dinero para mí... y de quién aprendí eso?",
    "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
    "¿Qué me impide reconocer que ya soy una energía de riqueza?",
    "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
    "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
    "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
    "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
    "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
    "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
    "¿Qué pasaría si dejara de rechazar ser rica?",
    "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
    "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
    "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
    "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
    "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
    "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
    "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
    "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
    "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
    "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
    "¿Qué me impide ser el imán que realmente soy para el dinero?",
    "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
    "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
    "¿Qué riqueza energética está disponible para mí ahora mismo?",
    "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?"
];

const inspirations = [
    "La abundancia es tu estado natural. Cuando te alineas con esta verdad, el dinero fluye hacia ti como el agua fluye hacia el mar.",
    "El dinero es energía en movimiento. Cuando te conviertes en un canal claro y abierto, esta energía te encuentra sin esfuerzo.",
    "Tus limitaciones sobre el dinero son solo pensamientos. Cambia tus pensamientos y transformarás tu realidad financiera.",
    "El dinero responde al amor, no al miedo. Cuando amas lo que haces y te amas a ti mismo, el dinero se convierte en tu aliado.",
    "La escasez es una ilusión creada por la mente. En el universo infinito, hay abundancia ilimitada esperando por ti.",
    "Tus creencias sobre el dinero son programaciones del pasado. Hoy puedes elegir nuevas creencias que te empoderen.",
    "Cada juicio sobre el dinero es una barrera que tú mismo has construido. Derríbalas y permite que la abundancia fluya.",
    "Ya eres riqueza en forma humana. Solo necesitas recordar esta verdad y actuar desde ella.",
    "El disfrute y la culpa no pueden coexistir. Elige el disfrute y observa cómo se multiplica tu prosperidad.",
    "Las posibilidades infinitas están disponibles ahora. Solo necesitas expandir tu visión para verlas.",
    "El control bloquea el flujo. Cuando te relajas y confías, el dinero encuentra caminos que ni imaginabas.",
    "El universo tiene formas infinitas de traerte dinero. Mantén tu mente abierta a lo inesperado.",
    "Lo que resistes persiste. Acepta tu grandeza financiera y observa cómo se manifiesta.",
    "Nadie te enseñó sobre tu poder financiero ilimitado porque ellos tampoco lo conocían. Ahora tú puedes descubrirlo.",
    "Rechazar la riqueza es rechazar una parte de ti mismo. Abraza tu derecho divino a la abundancia.",
    "Cuando el dinero no es un problema, puedes elegir desde el corazón. Esa es la verdadera libertad.",
    "Las creencias familiares sobre el dinero son como ropa vieja. Puedes cambiarlas por algo que te quede mejor.",
    "Facilidad, alegría y gloria son las frecuencias de la verdadera abundancia. Sintonízate con ellas.",
    "La gratitud es el imán más poderoso para el dinero. Agradece lo que tienes y se multiplicará.",
    "Tu esencia es tu mayor riqueza. El dinero viene a honrar quien realmente eres.",
    "Cada día puedes elegir una nueva conciencia sobre el dinero. Hoy elige la conciencia de abundancia infinita.",
    "Los clientes ideales están buscando exactamente lo que tú ofreces. Sé la energía que los atraiga.",
    "Tu contribución al mundo es valiosa. Permítete recibir abundantemente por el valor que aportas.",
    "La simplicidad es la clave. El dinero fluye cuando dejas de complicar el proceso.",
    "Tu magia única es tu ventaja competitiva. Úsala conscientemente para crear prosperidad.",
    "Eres un imán natural para el dinero. Solo necesitas recordar cómo activar este poder.",
    "No necesitas justificar tu abundancia. Mereces riqueza simplemente por existir.",
    "El dinero puede ser ligero y divertido. Permítete jugar con la prosperidad.",
    "Tu riqueza energética es infinita. Conéctate con ella y se manifestará en forma física.",
    "Cada elección que haces puede crear más dinero. Elige conscientemente desde la abundancia."
];


const quizData = [
    {
        question: "¿Cuál de estas acciones te acerca más a la abundancia?",
        options: [
            "Visualizar tus metas financieras con claridad.",
            "Agradecer lo que ya tienes en tu vida.",
            "Tomar acción inspirada hacia tus objetivos."
        ]
    },
    {
        question: "¿Qué cualidad es esencial para atraer prosperidad?",
        options: [
            "La generosidad y el dar sin esperar nada a cambio.",
            "La confianza en tu capacidad de crear valor.",
            "La apertura a recibir de fuentes inesperadas."
        ]
    },
    {
        question: "¿Cómo puedes mejorar tu relación con el dinero?",
        options: [
            "Entendiéndolo como una herramienta para el bien.",
            "Liberándote de creencias limitantes sobre él.",
            "Celebrando cada pequeña ganancia o ahorro."
        ]
    },
    {
        question: "¿Qué mentalidad fomenta la riqueza?",
        options: [
            "La mentalidad de crecimiento y aprendizaje constante.",
            "La mentalidad de abundancia, no de escasez.",
            "La mentalidad de servicio y contribución."
        ]
    },
    {
        question: "¿Qué hábito contribuye a la prosperidad?",
        options: [
            "Invertir en tu desarrollo personal y profesional.",
            "Rodearte de personas que te inspiren y apoyen.",
            "Practicar la gratitud diariamente."
        ]
    }
];

// Estado global de la aplicación
let appState = {
    currentQuestionIndex: 0,
    userResponses: {}, // Almacena { question: string, response: string, date: string, questionIndex: number }
    streakData: {
        currentStreak: 0,
        longestStreak: 0,
        lastDate: null, // Fecha de la última racha ganada (YYYY-MM-DD)
        quizCompletedToday: false // Indica si el quiz de hoy ya fue completado
    },
    currentQuiz: null // Almacena la pregunta del quiz actual
};


/**
 * Formatea una fecha a un string legible en español.
 * @param {Date} date - Objeto Date a formatear.
 * @returns {string} Fecha formateada.
 */
function formatDisplayDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
}

/**
 * Obtiene la fecha actual en formato de string para comparación (YYYY-MM-DD).
 * @returns {string} Fecha actual en formato 'YYYY-MM-DD'.
 */
function getTodayDateString() {
    return new Date().toISOString().slice(0, 10);
}

/**
 * Calcula la diferencia en días entre dos fechas.
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number} Diferencia en días.
 */
function getDaysDifference(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(diffTime / oneDay);
}

/**
 * Mezcla un array (algoritmo de Fisher-Yates).
 * @param {Array} array - El array a mezclar.
 * @returns {Array} El array mezclado.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function loadData() {
    try {
        const savedResponses = JSON.parse(localStorage.getItem('abundanceResponses')) || {};
        appState.userResponses = savedResponses;

        const savedStreak = JSON.parse(localStorage.getItem('abundanceStreak')) || {};
        // Asegurarse de que todos los campos de streakData estén inicializados
        appState.streakData = {
            currentStreak: savedStreak.currentStreak || 0,
            longestStreak: savedStreak.longestStreak || 0,
            lastDate: savedStreak.lastDate || null,
            quizCompletedToday: savedStreak.quizCompletedToday || false
        };
    } catch (e) {
        console.error("Error al cargar datos de localStorage:", e);

    }
}

function saveData() {
    localStorage.setItem('abundanceResponses', JSON.stringify(appState.userResponses));
    localStorage.setItem('abundanceStreak', JSON.stringify(appState.streakData));
}


function displayCurrentDate() {
    document.getElementById('currentDate').textContent = formatDisplayDate(new Date());
}

function displayDailyContent() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
    appState.currentQuestionIndex = dayOfYear % questions.length;

    displayQuestion(appState.currentQuestionIndex);
}

/**
 * @param {number} index 
 */
function displayQuestion(index) {
    const questionElement = document.getElementById('dailyQuestion');
    const inspirationElement = document.getElementById('inspirationText');
    const userResponseElement = document.getElementById('userResponse');

    questionElement.textContent = questions[index];
    inspirationElement.textContent = inspirations[index];

    const todayString = getTodayDateString();
    const questionKey = `${index}_${todayString}`;
    userResponseElement.value = appState.userResponses[questionKey]?.response || '';
}

function updateStreakDisplay() {
    const { currentStreak, longestStreak } = appState.streakData;
    const streakNumberElement = document.getElementById('streakNumber');
    const streakMessageElement = document.getElementById('streakMessage');

    streakNumberElement.textContent = currentStreak;

    let message = '';
    if (currentStreak === 0) {
        message = '¡Comienza tu viaje hacia la abundancia!';
    } else if (currentStreak === 1) {
        message = '¡Excelente! Has comenzado tu racha de abundancia 🌟';
    } else if (currentStreak < 7) {
        message = `¡Vas muy bien! Mantén el impulso 💪`;
    } else if (currentStreak < 14) {
        message = `¡Increíble! Una semana completa de abundancia 🎉`;
    } else if (currentStreak < 30) {
        message = `¡Eres imparable! Tu compromiso es admirable 🔥`;
    } else {
        message = `¡MAESTRO DE LA ABUNDANCIA! Has creado un hábito poderoso 👑`;
    }

    if (longestStreak > currentStreak) {
        message += ` (Récord personal: ${longestStreak} días)`;
    }
    streakMessageElement.textContent = message;
}

/**
 * Muestra todas las respuestas anteriores del usuario.
 */
function displayResponses() {
    const container = document.getElementById('responsesContainer');
    // Convertir el objeto de respuestas a un array y filtrar solo las respuestas válidas
    const responses = Object.values(appState.userResponses).filter(res => res && res.question && res.response);

    if (responses.length === 0) {
        container.innerHTML = '<p class="no-responses">Aún no has guardado respuestas. ¡Empieza hoy tu viaje de transformación!</p>';
        return;
    }

    // Ordenar respuestas por fecha (más reciente primero)
    responses.sort((a, b) => new Date(b.date) - new Date(a.date));

    let html = '';
    responses.forEach(response => {
        const date = new Date(response.date);
        const formattedDate = formatDisplayDate(date);

        html += `
            <div class="response-item" data-key="${response.questionIndex}_${response.date}">
                <p class="response-question">${response.question}</p>
                <p class="response-text">${response.response}</p>
                <p class="response-date">${formattedDate}</p>
                <div class="response-actions">
                    <button class="action-btn delete-btn" onclick="deleteResponse('${response.questionIndex}_${response.date}')">🗑️ Borrar</button>
                    <button class="action-btn share-btn" onclick="shareResponse('${response.question}', '${response.response}', '${formattedDate}')">🔗 Compartir</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function saveResponse() {
    const responseText = document.getElementById('userResponse').value.trim();
    if (responseText === '') {
        alert('Por favor, escribe una respuesta antes de guardar.');
        return;
    }

    const todayString = getTodayDateString();
    const questionKey = `${appState.currentQuestionIndex}_${todayString}`;

    appState.userResponses[questionKey] = {
        question: questions[appState.currentQuestionIndex],
        response: responseText,
        date: todayString, // Guardar como string para consistencia
        questionIndex: appState.currentQuestionIndex
    };

    saveData(); // Guardar todos los datos después de la actualización

    showSavedMessage();
    displayResponses(); // Refrescar la lista de respuestas
}


function showSavedMessage() {
    const savedMessage = document.getElementById('savedMessage');
    savedMessage.style.display = 'block';
    savedMessage.classList.add('fade-in-out'); // Añadir clase para animación
    setTimeout(() => {
        savedMessage.classList.remove('fade-in-out');
        savedMessage.style.display = 'none';
    }, 3000);
}

/**
 * Elimina una respuesta del historial.
 * @param {string} key - La clave de la respuesta a eliminar (ej. "0_2023-10-27").
 */
function deleteResponse(key) {
    Swal.fire({
        title: "estas seguro?",
        text: "si lo borras no hay vuelta atrás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: `cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("todo ha sido borrado correctamente", "", "success");
            delete appState.userResponses[key];
            saveData();
            displayResponses();

        } else {
          Swal.fire("cancelado", "la operación ha sido cancelada con éxito", "success");
        }
      });
}

/**
 * Comparte una respuesta (usando la API Web Share si está disponible).
 * @param {string} question - La pregunta.
 * @param {string} response - La respuesta.
 * @param {string} date - La fecha formateada.
 */
async function shareResponse(question, response, date) {
    const shareText = `Mi reflexión de abundancia del ${date}:\n\nPregunta: "${question}"\nMi respuesta: "${response}"\n\n#AbundanciaDiaria #Reflexión`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Mi Reflexión de Abundancia',
                text: shareText,
            });
            console.log('Contenido compartido exitosamente');
        } catch (error) {
            console.error('Error al compartir:', error);
            alert('No se pudo compartir el contenido. Puedes copiarlo manualmente:\n\n' + shareText);
        }
    } else {
        // Fallback para navegadores que no soportan Web Share API
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Reflexión copiada al portapapeles. ¡Ahora puedes pegarla donde quieras!');
        }).catch(err => {
            console.error('Error al copiar al portapapeles:', err);
            alert('Tu navegador no soporta la función de compartir o copiar automáticamente. Por favor, copia el texto manualmente:\n\n' + shareText);
        });
    }
}


function initializeQuiz() {
    const quizSection = document.getElementById('quizSection');
    const congratulationsMessage = document.getElementById('congratulationsMessage');
    const todayString = getTodayDateString();

    // Reiniciar quizCompletedToday si es un nuevo día
    if (appState.streakData.lastDate !== todayString) {
        appState.streakData.quizCompletedToday = false;
        saveData(); // Guardar el estado reiniciado
    }

    if (appState.streakData.quizCompletedToday) {
        quizSection.style.display = 'none';
        congratulationsMessage.style.display = 'block';
        congratulationsMessage.classList.add('show-confetti'); // Activar animación de confeti
        setTimeout(() => {
            congratulationsMessage.classList.remove('show-confetti');
        }, 3000); // Duración de la animación
    } else {
        quizSection.style.display = 'block';
        congratulationsMessage.style.display = 'none';
        loadQuizQuestion();
    }
}


function loadQuizQuestion() {
    const quizQuestionElement = document.getElementById('quizQuestion');
    const quizOptionsElement = document.getElementById('quizOptions');

    // Seleccionar una pregunta aleatoria del quizData
    const randomIndex = Math.floor(Math.random() * quizData.length);
    appState.currentQuiz = quizData[randomIndex];

    quizQuestionElement.textContent = appState.currentQuiz.question;
    quizOptionsElement.innerHTML = ''; // Limpiar opciones anteriores

    // Mezclar las opciones para que no siempre estén en el mismo orden
    const shuffledOptions = shuffleArray([...appState.currentQuiz.options]);

    shuffledOptions.forEach((option, index) => {
        const label = document.createElement('label');
        label.classList.add('quiz-option');
        label.innerHTML = `
            <input type="radio" name="quizOption" value="${option}" id="option${index}">
            <span>${option}</span>
        `;
        quizOptionsElement.appendChild(label);
    });

    displayQuizDetails();
}


function checkQuizAnswer() {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');

    if (!selectedOption) {
        alert('Por favor, selecciona una opción.');
        return;
    }

    const tinSound = document.getElementById('tin-sound');
    tinSound.currentTime = 0;
    tinSound.play();

    updateStreakLogic(); // Actualizar la racha
    appState.streakData.quizCompletedToday = true; 
    saveData(); // Guardar el estado actualizado

    document.getElementById('quizSection').style.display = 'none';
    const congratulationsMessage = document.getElementById('congratulationsMessage');
    congratulationsMessage.style.display = 'block';
    congratulationsMessage.classList.add('show-confetti'); // Activar animación de confeti

    setTimeout(() => {
        congratulationsMessage.classList.remove('show-confetti');
        congratulationsMessage.style.display = 'none';
    }, 3000);
}

function updateStreakLogic() {
    let { currentStreak, longestStreak, lastDate } = appState.streakData;
    const todayString = getTodayDateString();
    const today = new Date(todayString);
    const last = lastDate ? new Date(lastDate) : null;

    if (!last) {
        // Primera racha
        currentStreak = 1;
        longestStreak = 1;
    } else {
        const daysDiff = getDaysDifference(today, last);

        if (daysDiff === 0) {
            // Ya ganó la racha hoy, no hacer nada (esto debería ser prevenido por quizCompletedToday)
            return;
        } else if (daysDiff === 1) {
            // Día consecutivo
            currentStreak++;
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else {
            // Racha rota o primer día después de un salto
            currentStreak = 1;
        }
    }

    appState.streakData.currentStreak = currentStreak;
    appState.streakData.longestStreak = longestStreak;
    appState.streakData.lastDate = todayString; // Actualizar la última fecha de racha ganada

    updateStreakDisplay();
}

function previousQuestion() {
    appState.currentQuestionIndex = (appState.currentQuestionIndex - 1 + questions.length) % questions.length;
    displayQuestion(appState.currentQuestionIndex);
}

function nextQuestion() {
    appState.currentQuestionIndex = (appState.currentQuestionIndex + 1) % questions.length;
    displayQuestion(appState.currentQuestionIndex);
}


function initializeApp() {
    loadData();
    displayCurrentDate();
    displayDailyContent(); 
    updateStreakDisplay();
    displayResponses();
    initializeQuiz(); 
    displayQuizDetails();
}

// Fondo de estrellas
function createStars() {
    const starsBg = document.querySelector('.stars-bg');
    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsBg.appendChild(star);
    }
}

// Estrellas fugaces
function createShootingStar() {
    const shootingBg = document.querySelector('.shooting-stars-bg');
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = `${Math.random() * 90 + 5}vw`;
    star.style.top = `${Math.random() * 30}vh`;
    shootingBg.appendChild(star);
    setTimeout(() => star.remove(), 1200);
}
setInterval(createShootingStar, 3500);

function displayQuizDetails() {
    const quizDetailsCard = document.getElementById('quizDetailsCard');
    if (!appState.currentQuiz) {
        quizDetailsCard.innerHTML = '<p>No hay pregunta de quiz hoy.</p>';
        return;
    }
    let html = `<div class="quiz-details-question">${appState.currentQuiz.question}</div>`;
    html += '<div class="quiz-details-options">';
    appState.currentQuiz.options.forEach(opt => {
        html += `<div class="quiz-details-option">• ${opt}</div>`;
    });
    html += '</div>';
    quizDetailsCard.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', createStars);

// Event Listener para cargar la aplicación
window.addEventListener('load', initializeApp);