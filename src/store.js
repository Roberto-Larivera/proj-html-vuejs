import { reactive } from 'vue'

export const store = reactive({
  // HeaderBottom
  headerBottomCurrent: 0,
  headerBottomList: [
    {
      imgSrc: 'rev-slider-main-home-img-03.jpg'
    },
    {
      imgSrc: 'rev-slider-main-home-img-02.png'
    },
  ],
  
  // MainSectionClient
  mainClientList: [
    {
      src: 'h4-clients-img-01.png',
      hover: 'h4-clients-img-02.png',
      status: false
    },
    {
      src: 'h4-clients-img-03.png',
      hover: 'h4-clients-img-04-1.png',
      status: false
    },
    {
      src: 'h4-clients-img-05.png',
      hover: 'h4-clients-img-06-1.png',
      status: false
    },
    {
      src: 'h4-clients-img-07.png',
      hover: 'h4-clients-img-08-1.png',
      status: false
    },
    {
      src: 'h4-clients-img-09.png',
      hover: 'h4-clients-img-10-1.png',
      status: false
    },
  ],

  // MainSectionContact
  mainContactList: [
    {
      title: 'New York Coaching',
      status: false
    },
    {
      title: 'London Coaching',
      status: false
    },
    {
      title: 'Melbourne Coaching',
      status: false
    }
  ],
  // FooterSectionLinks
  footerLinks: [
    {
      textName: '',
      textEmail: ''
    }
  ]
}
);