new Vue({
  el: '#app',
  data() {
      return {
          items: [
              { image: 'img/01.webp' },
              { image: 'img/02.webp' },
              { image: 'img/03.webp' },
              { image: 'img/04.webp' },
              { image: 'img/05.webp' },
              // Aggiungi altre immagini come necessario
          ],
          currentIndex: 0,
                    intervalId: null // Memorizza l'ID dell'intervallo
                };
            },
            methods: {
                prevImage() {
                    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
                },
                nextImage() {
                    this.currentIndex = (this.currentIndex + 1) % this.items.length;
                },
                startAutoPlay() {
                    // Avvia l'autoplay
                    this.intervalId = setInterval(this.nextImage, 4000); // 3 secondi (700 millisecondi)
                },
                stopAutoPlay() {
                    // Ferma l'autoplay
                    clearInterval(this.intervalId);
                }
            },
            mounted() {
                // Avvia l'autoplay al caricamento della pagina
                this.startAutoPlay();
            },
            beforeDestroy() {
                // Ferma l'autoplay prima della distruzione del componente
                this.stopAutoPlay();
            }
        });