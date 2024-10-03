function afficherDateAujourdHui() {
    const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const aujourdHui = new Date();
    const jour = jours[aujourdHui.getDay()];
    const jourDuMois = aujourdHui.getDate();
    const moisCourant = mois[aujourdHui.getMonth()];
    const annee = aujourdHui.getFullYear();

    alert(`Aujourd'hui, nous sommes ${jour}, le ${jourDuMois} ${moisCourant} ${annee}.`);
}

afficherDateAujourdHui();
