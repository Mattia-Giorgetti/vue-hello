
const { createApp } = Vue;

createApp({
  data() {
    return {
      h1Message: 'Hello World!',
      innerMsg: 'Premi il bottone per cambiare immagini',
      myImg_1: './img/img-1.jpg',
      myImg_2: './img/img-3.jpg',
      myImg_3: './img/img-5.jpg',

      h1messageClass: 'text-info text-center p-4 huge_txt',
      innerMsgClass: 'text-uppercase text-white text-center pb-4',
      myImgClass: 'round_border',
      containerClass: 'p-5 my_bg'
    }
  },
  methods: {
    changePicture(){
     this.myImg_1 = (this.myImg_1 === './img/img-1.jpg')? this.myImg_1 = './img/img-2.jpg' : this.myImg_1 = './img/img-1.jpg';
     this.myImg_2 = (this.myImg_2 === './img/img-3.jpg')? this.myImg_2 = './img/img-4.jpg' : this.myImg_2 = './img/img-3.jpg';
     this.myImg_3 = (this.myImg_3 === './img/img-5.jpg')? this.myImg_3 = './img/img-6.jpg' : this.myImg_3 = './img/img-5.jpg';
    }
  }
}).mount('#app');