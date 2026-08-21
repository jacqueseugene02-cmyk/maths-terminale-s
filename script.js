// Message du bouton "Commencer"
function afficherMessage() {
    alert(
        "Bienvenue sur Maths Terminale S ! 📐\n\n" +
        "Choisis un chapitre pour commencer tes révisions."
    );
}


// Bouton du quiz
function lancerQuiz() {
    window.location.href = "quiz.html";
}

function chapitreBientot() {

    alert(
        "📚 Ce chapitre est en préparation.\n\n" +
        "Il sera bientôt disponible avec :\n" +
        "• Le cours\n" +
        "• Des exemples\n" +
        "• Des exercices\n" +
        "• Les corrections\n" +
        "• Un quiz"
    );

}
function afficherCorrectionLimite() {

    alert(
        "✅ Correction\n\n" +
        "Lorsque x → +∞, le terme 3x devient +∞.\n\n" +
        "Donc :\n" +
        "lim(3x + 2) = +∞."
    );

}
function correctionExercice1() {

    alert(
        "✅ Correction\n\n" +
        "La suite est arithmétique.\n" +
        "Sa raison est r = 3.\n\n" +
        "Formule : uₙ = u₀ + nr\n\n" +
        "u₅ = 4 + 5 × 3\n" +
        "u₅ = 19"
    );

}


function correctionExercice2() {

    alert(
        "✅ Correction\n\n" +
        "uₙ = u₀ + nr\n\n" +
        "uₙ = 7 + 5n\n\n" +
        "Donc :\n" +
        "u₁₀ = 7 + 5 × 10\n" +
        "u₁₀ = 57"
    );

}


function correctionExercice3() {

    alert(
        "✅ Correction\n\n" +
        "Lorsque x → +∞,\n" +
        "5x → +∞.\n\n" +
        "Donc :\n" +
        "lim(5x + 2) = +∞."
    );

}


function correctionExercice4() {

    alert(
        "✅ Correction\n\n" +
        "Lorsque x → +∞,\n" +
        "1/x devient de plus en plus proche de 0.\n\n" +
        "Donc :\n" +
        "lim(1/x) = 0."
    );

}


function correctionExercice5() {

    alert(
        "✅ Correction\n\n" +
        "f(x) = x² + 3x + 2\n\n" +
        "f'(x) = 2x + 3"
    );

}


function correctionExercice6() {

    alert(
        "✅ Correction\n\n" +
        "Une primitive de 3x² est :\n\n" +
        "F(x) = x³ + C\n\n" +
        "où C est une constante réelle."
    );

}
const questions = [

    {
        question:
            "Soit f(x) = (2x - 1)eˣ. Pour quelle valeur de x a-t-on f'(x) = 0 ?",

        reponses: [
            "x = -1/2",
            "x = 1/2",
            "x = -1",
            "Aucune valeur réelle"
        ],

        bonneReponse: 0
    },


    {
        question:
            "Soit la suite définie par u₀ = 3 et uₙ₊₁ = -2uₙ. Quelle est la valeur de u₄ ?",

        reponses: [
            "48",
            "-48",
            "24",
            "-24"
        ],

        bonneReponse: 0
    },


    {
        question:
            "Calculer la limite lorsque x tend vers +∞ de (5x² + 3)/(x³ - 1).",

        reponses: [
            "0",
            "5",
            "+∞",
            "1"
        ],

        bonneReponse: 0
    },


    {
        question:
            "Soit z = 1 + i. Quelle est la forme algébrique de z² ?",

        reponses: [
            "2i",
            "2 + i",
            "1 + 2i",
            "-2i"
        ],

        bonneReponse: 0
    },


    {
        question:
            "Soit f(x) = ln(x) - x + 1. Quelle est la valeur de f'(1) ?",

        reponses: [
            "0",
            "1",
            "-1",
            "2"
        ],

        bonneReponse: 0
    }

];
let questionActuelle = 0;
let scoreQuiz = 0;
let aRepondu = false;


// Afficher une question
function afficherQuestion() {

    const question = questions[questionActuelle];

    const texte = document.getElementById("questionTexte");
    const reponses = document.getElementById("reponses");
    const progression = document.getElementById("progression");
    const barre = document.getElementById("progressionBarre");
    const boutonSuivant = document.getElementById("boutonSuivant");

    aRepondu = false;

    boutonSuivant.style.display = "none";

    texte.textContent = question.question;

    reponses.innerHTML = "";

    progression.textContent =
        "Question " +
        (questionActuelle + 1) +
        " / " +
        questions.length;

    const pourcentage =
        ((questionActuelle + 1) / questions.length) * 100;

    barre.style.width = pourcentage + "%";


    question.reponses.forEach(function(reponse, index) {

        const bouton = document.createElement("button");

        bouton.textContent = reponse;

        bouton.classList.add("reponse");

        bouton.onclick = function() {
            verifierReponse(index, bouton);
        };

        reponses.appendChild(bouton);

    });
}


// Vérifier la réponse
function verifierReponse(index, boutonClique) {

    if (aRepondu) {
        return;
    }

    aRepondu = true;

    const question = questions[questionActuelle];

    const boutons =
        document.querySelectorAll(".reponse");


    if (index === question.bonneReponse) {

        boutonClique.classList.add("correct");

        scoreQuiz++;

    } else {

        boutonClique.classList.add("fausse");

        boutons[question.bonneReponse]
            .classList.add("correct");

    }


    boutons.forEach(function(bouton) {

        bouton.disabled = true;

    });


    document.getElementById("boutonSuivant")
        .style.display = "block";
}


// Passer à la question suivante
function questionSuivante() {

    questionActuelle++;

    if (questionActuelle < questions.length) {

        afficherQuestion();

    } else {

        afficherResultat();

    }
}

// Afficher le résultat
function afficherResultat() {

    document.getElementById("question")
        .style.display = "none";

    document.getElementById("boutonSuivant")
        .style.display = "none";

    document.getElementById("progression")
        .style.display = "none";

    document.querySelector(".barre")
        .style.display = "none";

    document.getElementById("resultat")
        .style.display = "block";


    document.getElementById("score").textContent =
        scoreQuiz + " / " + questions.length;


    const pourcentage =
        (scoreQuiz / questions.length) * 100;


    let message = "";


    if (pourcentage === 100) {

        message =
            "🏆 Excellent ! Tu maîtrises parfaitement le sujet.";

    } else if (pourcentage >= 80) {

        message =
            "🔥 Très bon travail ! Ton niveau est excellent.";

    } else if (pourcentage >= 60) {

        message =
            "👏 Bon travail ! Continue encore tes révisions.";

    } else if (pourcentage >= 40) {

        message =
            "📚 Tu progresses. Revois les cours et réessaie.";

    } else {

        message =
            "💪 Ne te décourage pas. Reprends les cours et entraîne-toi.";

    }


    document.getElementById("messageScore")
        .textContent = message;
}


// Recommencer le quiz
function recommencerQuiz() {

    questionActuelle = 0;

    scoreQuiz = 0;

    document.getElementById("question")
        .style.display = "block";

    document.getElementById("progression")
        .style.display = "block";

    document.querySelector(".barre")
        .style.display = "block";

    document.getElementById("resultat")
        .style.display = "none";

    afficherQuestion();
}


// Lancer le quiz automatiquement
if (document.getElementById("questionTexte")) {

    afficherQuestion();

}
function correctionDerivation() {

    alert(
        "✅ Correction\n\n" +

        "f(x) = x³ - 3x² + 2\n\n" +

        "1. Dérivée :\n" +
        "f'(x) = 3x² - 6x\n\n" +

        "2. Factorisation :\n" +
        "f'(x) = 3x(x - 2)\n\n" +

        "Donc :\n" +
        "f'(x) = 0 pour x = 0 ou x = 2.\n\n" +

        "3. Signe de f'(x) :\n" +
        "positif sur ]-∞ ; 0[,\n" +
        "négatif sur ]0 ; 2[,\n" +
        "positif sur ]2 ; +∞[.\n\n" +

        "La fonction est donc :\n" +
        "croissante sur ]-∞ ; 0],\n" +
        "décroissante sur [0 ; 2],\n" +
        "croissante sur [2 ; +∞[."
    );

}
function correctionIntegrale() {

    alert(
        "✅ Correction\n\n" +

        "f(x) = 4x³ + 2x\n\n" +

        "1. Une primitive est :\n" +
        "F(x) = x⁴ + x²\n\n" +

        "2. Calcul de l'intégrale :\n" +
        "I = F(1) − F(0)\n\n" +

        "I = (1⁴ + 1²) − 0\n\n" +

        "Donc : I = 2."
    );

}
function correctionLogarithme() {

    alert(
        "✅ Correction\n\n" +

        "f(x) = x ln(x)\n\n" +

        "1. Domaine :\n" +
        "x > 0\n" +
        "Donc Df = ]0 ; +∞[.\n\n" +

        "2. Dérivée :\n" +
        "f'(x) = ln(x) + 1\n\n" +

        "3. Résolution :\n" +
        "ln(x) + 1 = 0\n" +
        "ln(x) = -1\n" +
        "x = e⁻¹ = 1/e.\n\n" +

        "4. Signe :\n" +
        "f'(x) < 0 sur ]0 ; 1/e[.\n" +
        "f'(x) > 0 sur ]1/e ; +∞[.\n\n" +

        "Donc f est décroissante puis croissante.\n" +
        "Elle possède un minimum en x = 1/e."
    );

}
function correctionComplexes1() {

    alert(
        "✅ Correction\n\n" +

        "z₁ = 3 + 2i\n" +
        "z₂ = 1 - 4i\n\n" +

        "1. z₁ + z₂ = 4 - 2i\n\n" +

        "2. z₁ × z₂\n" +
        "= (3+2i)(1-4i)\n" +
        "= 3 - 12i + 2i - 8i²\n" +
        "= 11 - 10i\n\n" +

        "3. z̄₁ = 3 - 2i\n\n" +

        "4. |z₁| = √(3²+2²)\n" +
        "Donc |z₁| = √13."
    );

}


function correctionComplexes2() {

    alert(
        "🔥 Correction\n\n" +

        "z² - 6z + 13 = 0\n\n" +

        "Δ = (-6)² - 4×1×13\n" +
        "Δ = 36 - 52\n" +
        "Δ = -16\n\n" +

        "√Δ = 4i\n\n" +

        "z₁ = (6 + 4i)/2\n" +
        "z₁ = 3 + 2i\n\n" +

        "z₂ = (6 - 4i)/2\n" +
        "z₂ = 3 - 2i\n\n" +

        "✅ Les solutions sont :\n" +
        "z₁ = 3 + 2i\n" +
        "z₂ = 3 - 2i."
    );

}


function correctionComplexes3() {

    alert(
        "🚀 Correction\n\n" +

        "z = 1 + i\n\n" +

        "1. Module :\n" +
        "|z| = √(1²+1²)\n" +
        "|z| = √2\n\n" +

        "2. Un argument est :\n" +
        "θ = π/4\n\n" +

        "3. Forme trigonométrique :\n" +
        "z = √2[cos(π/4)+i sin(π/4)]\n\n" +

        "4. Forme exponentielle :\n" +
        "z = √2 e^(iπ/4)"
    );

}
function correctionProbabilites1() {

    alert(
        "✅ Correction\n\n" +

        "Il y a 4 boules rouges sur 10 boules.\n\n" +

        "1. P(Rouge) = 4/10 = 0,4\n\n" +

        "2. P(Bleue) = 6/10 = 0,6\n\n" +

        "On vérifie :\n" +
        "0,4 + 0,6 = 1."
    );

}


function correctionProbabilites2() {

    alert(
        "🚀 Correction\n\n" +

        "1. X suit une loi binomiale :\n" +
        "X ~ B(10 ; 0,02)\n\n" +

        "2. P(X = 1)\n\n" +
        "= C(10,1) × 0,02 × 0,98⁹\n\n" +
        "≈ 0,1663\n\n" +

        "3. Espérance :\n" +
        "E(X) = np\n" +
        "E(X) = 10 × 0,02\n" +
        "E(X) = 0,2."
    );

}
function correctionGeo1() {

    alert(
        "✅ Correction\n\n" +

        "A(1 ; 2 ; 3)\n" +
        "B(4 ; 6 ; 5)\n\n" +

        "1. AB⃗ = B - A\n" +
        "AB⃗ = (4-1 ; 6-2 ; 5-3)\n" +
        "AB⃗ = (3 ; 4 ; 2)\n\n" +

        "2. AB = √(3²+4²+2²)\n" +
        "AB = √29."
    );

}


function correctionGeo2() {

    alert(
        "🚀 Correction\n\n" +

        "u⃗ = (2 ; -1 ; 3)\n" +
        "v⃗ = (1 ; 4 ; 0)\n\n" +

        "u⃗ · v⃗ = 2×1 + (-1)×4 + 3×0\n\n" +

        "u⃗ · v⃗ = 2 - 4 + 0\n\n" +

        "✅ u⃗ · v⃗ = -2"
    );

}
function ouvrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("menu-ouvert");

}