    // Initialiser le carrousel
    $(document).ready(function(){
        $('.carousel').slick({
          dots: true, // Affiche les indicateurs de pagination (points)
          infinite: true, // Active la lecture en boucle du carrousel
          speed: 200, // Vitesse de transition entre les slide (millisecondes)
          slidesToShow: 1, // Nombre de slide à afficher à la fois
          slidesToScroll: 1, // Nombre de slide à faire défiler à chaque changement
          autoplay: true, // Active la lecture automatique
          autoplaySpeed: 2000 // Durée entre chaque changement des slide en mode automatique (millisecondes)
        });
      });

    // Fonction appelée lorsqu'un onglet de la partie galerie est cliqué
    function filterImages(category) {
      // Masque toutes les images
      const allImages = document.querySelectorAll('.gallery img');
      allImages.forEach(image => image.style.display = 'none');

      // Affiche uniquement les images de la catégorie sélectionnée
      const selectedImages = document.querySelectorAll(`.gallery .${category}`);
      selectedImages.forEach(image => image.style.display = 'block');

      // Met à jour l'état actif de l'onglet
      const tabs = document.querySelectorAll('.category-tab');
      tabs.forEach(tab => tab.classList.remove('active'));
      const activeTab = document.querySelector(`.category-tab.${category}`);
      activeTab.classList.add('active');
    }