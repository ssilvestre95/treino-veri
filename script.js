// Mapeamento de exercícios para imagens (GIFs)
const exerciseImages = {
    'agachamento (com barra ou na smith)': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif',
        description: 'Exercício fundamental para desenvolvimento de pernas e glúteos. Mantenha as costas retas e desça até 90 graus.'
    },
    'extensora': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif',
        description: 'Isolamento do quadríceps. Controle o movimento na descida e contraia no topo.'
    },
    'leg curl deitado': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Single-Leg-Curl.gif',
        description: 'Exercício para posterior de coxa. Foque na contração no topo do movimento.'
    },
    'stiff com halteres': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif',
        description: 'Trabalha posterior de coxa e glúteos. Mantenha as costas retas e pernas levemente flexionadas.'
    },
    'elevação pélvica unilateral': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2025/03/Single-Leg-Dumbbell-Hip-Thrust.gif',
        description: 'Excelente para glúteos. Contraia fortemente no topo e controle a descida.'
    },
    'peso morto': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2022/09/barbell-deadlift.gif',
        description: 'Exercício completo para posterior. Mantenha a barra próxima ao corpo durante todo movimento.'
    },
    'panturrilha na smith': {
        image: 'https://i.pinimg.com/originals/f6/7a/bf/f67abf162c15edbd924f407dba8223b7.gif',
        description: 'Desenvolvimento das panturrilhas. Amplitude completa e pausa no topo.'
    },
    'pulldown': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif',
        description: 'Trabalha dorsais. Puxe até a linha do peito mantendo o peito elevado.'
    },
    'remada alta iso-lateral': {
        image: 'https://burnfit.io/wp-content/uploads/2023/11/HIGH_ROW_MC.gif',
        description: 'Fortalece as costas. Mantenha os cotovelos próximos ao corpo e contraia as escápulas.'
    },
    'iso-lateral sentada': {
        image: 'https://app.aspira-fitness.com/api/media/efe8e38e-397a-49c1-935e-0ed991651f5e',
        description: 'Remada sentada para dorsais. Puxe com controle e evite balanços.'
    },
    'face pull': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif',
        description: 'Exercício para deltoides posteriores e saúde dos ombros. Puxe em direção à testa.'
    },
    'elevação lateral': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif',
        description: 'Desenvolvimento de ombros laterais. Cotovelos levemente flexionados, não balance o corpo.'
    },
    'biceps curl barra em w': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Z-Bar-Curl.gif',
        description: 'Isolamento dos bíceps. Mantenha os cotovelos fixos e controle o movimento.'
    },
    'bicep curl (na polia)': {
        image: 'https://burnfit.io/wp-content/uploads/2023/11/CABLE_CURL.gif',
        description: 'Trabalha os bíceps com resistência constante. Evite balanços e foque na contração.'
    },
    'búlgaro na smith': {
        image: 'https://cdn.jumpshare.com/preview/DVPB90quilUZGGq0kp805_022NGegbl9qnx_8vECpnV5K6yaNX0QdDVxw23KM0VaD2rObCIORedx2Big9oa7L4_8e8TQb625lVe7oLFnq7g',
        description: 'Excelente para glúteos e pernas. Mantenha o tronco ereto e desça controladamente.'
    },
    'elevação pélvica (máquina)': {
        image: 'https://burnfit.io/wp-content/uploads/2023/11/HIP_THRUST_MAC.gif',
        description: 'Foco total nos glúteos. Contraia fortemente no topo e controle a descida.'
    },
    'sumo com halter': {
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDloaGgwa3pvazNjNzRxdGlwOGg1M3E0ZzBkMGhxdmtvbWl4dnZ1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pk4TgnYXJO6hWLNQVU/giphy.gif',
        description: 'Foco nos glúteos e parte interna das coxas. Mantenha o tronco ereto e desça controladamente.'
    },
    'glúteo kickback': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Cable-Donkey-Kickback.gif',
        description: 'Isolamento de glúteos. Controle total do movimento, aperte no topo.'
    },
    'prancha': {
        image: 'https://burnfit.io/wp-content/uploads/2023/11/PLANK.gif',
        description: 'Core completo. Mantenha o corpo alinhado, não deixe o quadril cair.'
    },
    'abdominal na polia': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Kneeling-Cable-Crunch.gif',
        description: 'Fortalecimento abdominal. Contraia bem o abdômen em cada repetição.'
    },
    'elevação de pernas deitada': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif',
        description: 'Trabalha abdômen inferior. Mantenha a lombar colada ao chão durante o movimento.'
    },
    'press ombro': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif',
        description: 'Desenvolvimento de ombros. Empurre verticalmente mantendo o core ativado.'
    },
    'elevação frontal halteres': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Two-Arm-Dumbbell-Front-Raise.gif',
        description: 'Trabalha deltoides frontais. Eleve até a altura dos olhos.'
    },
    'remada diagonal unilateral': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Half-Kneeling-Lat-Pulldown.gif',
        description: 'Fortalece as costas. Mantenha o tronco estável e puxe com o cotovelo.'
    },
    'puxada com braço reto': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Rope-Straight-Arm-Pulldown.gif',
        description: 'Isolamento dos dorsais. Mantenha os braços retos e puxe com os músculos das costas.'
    },
    'aberturas invertidas na polia': {
        image: 'https://burnfit.io/wp-content/uploads/2023/11/CABLE_REV_FLY.gif',
        description: 'Trabalha deltoides posteriores. Mantenha leve flexão nos cotovelos e controle o movimento.'
    },
    'tríceps overhead na polia': {
        image: 'https://burnfit.io/wp-content/uploads/2023/11/CABLE_OHT_EXT.gif',
        description: 'Desenvolvimento dos tríceps. Mantenha os cotovelos fixos durante o movimento.'
    },
    'tríceps na polia unilateral': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Tricep-Kickback.gif',
        description: 'Isolamento dos tríceps. Concentre-se na contração e evite balanços.'
    },
    'belt squat': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2023/01/belt-squat.gif',
        description: 'Agachamento sem carga na coluna. Ótimo para quem tem limitações lombares.'
    },
    'leg press unilateral': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Single-Leg-Press.gif',
        description: 'Exercício para pernas unilateral. Desça até 90 graus mantendo os pés firmes.'
    },
    'panturrilha na leg press': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Leg-Press-Calf-Raise.gif',
        description: 'Desenvolvimento das panturrilhas. Amplitude completa e pausa no topo.'
    },
    'leg curl sentada': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif',
        description: 'Trabalha posterior de coxa. Foque na contração no topo do movimento.'
    },
    'stiff unilateral com halter': {
        image: 'https://image.tuasaude.com/media/article/sm/rs/stiff_75587.gif?width=1372&height=974',
        description: 'Isolamento do posterior de coxa. Mantenha as costas retas e controle o movimento.'
    },
    'abdutora': {
        image: 'https://burnfit.io/wp-content/uploads/2023/11/HIP_ABD_MC.gif',
        description: 'Trabalha glúteo médio. Importante para estabilidade do quadril.'
    },
    'adutora': {
        image: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/HIP-ADDUCTION-MACHINE.gif',
        description: 'Trabalha parte interna da coxa. Controle e pausa no fechamento.'
    },
};

// Função para encontrar a chave do exercício
function findExerciseKey(exerciseName) {
    const name = exerciseName.toLowerCase();
    for (let key in exerciseImages) {
        if (name.includes(key)) {
            return key;
        }
    }
    return null;
}

// Função para abrir o modal
function openModal(exerciseName) {
    const modal = document.getElementById('exerciseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    const key = findExerciseKey(exerciseName);
    
    if (key && exerciseImages[key]) {
        modalTitle.textContent = exerciseName;
        modalImage.src = exerciseImages[key].image;
        modalDescription.textContent = exerciseImages[key].description;
        modal.classList.add('active');
    } else {
        modalTitle.textContent = exerciseName;
        modalImage.src = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop';
        modalDescription.textContent = 'Imagem ilustrativa do exercício. Consulte seu treinador para execução correta.';
        modal.classList.add('active');
    }
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('exerciseModal');
    modal.classList.remove('active');
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('exerciseModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Adicionar evento de clique a todos os nomes de exercícios
document.addEventListener('DOMContentLoaded', function() {
    const exerciseNames = document.querySelectorAll('.exercise-name');
    exerciseNames.forEach(name => {
        name.addEventListener('click', function() {
            openModal(this.textContent);
        });
    });

});
