var app = new Vue(
  {
    el: "#root",
    // DATA ELEMENT
    data: {
      contactsList: [
        {
      		name: 'Claudia',
      		avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
          ],
          lastAccess: 'Ultimo accesso 10/01/2020 18:49'
        },
        {
      		name: 'Fabio',
      		avatar: 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
          lastAccess: 'Ultimo accesso 15/01/2020 19:45'
      	},
      	{
      		name: 'Samuele',
      		avatar: 'https://image.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
          lastAccess: 'Ultimo accesso 09/01/2020 15:50'
      	},
      	{
      		name: 'Luisa',
      		avatar: 'https://image.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
          lastAccess: 'Ultimo accesso 12/01/2020 14:27'
      	},
      ],
      indexContact: 0,
      search:"",
      contactsListFiltered:[],
      backgroundList: [
        "https://i.pinimg.com/originals/0f/05/27/0f05274b1bdc8feed70822513cd7a903.jpg",
        "https://i.redd.it/xsd14fpxa7l41.jpg",
        "https://wallpaperaccess.com/full/1288171.jpg",
        "https://64.media.tumblr.com/59d9990a0adcb19e9f687a47953226b3/tumblr_ouztgbH0CG1vj8v9mo4_1280.png",
        "https://www.wallpapertip.com/wmimgs/5-55896_wallpaper-background-whatsapp-default-dark-whatsapp-dark-wallpaper.jpg",
        "https://www.setaswall.com/wp-content/uploads/2019/08/Whatsapp-Wallpaper-112.jpg"
      ],
      backgroundImage: "https://i.redd.it/qwd83nc4xxf41.jpg"
    },
    created: function() {
      this.contactsListFiltered = this.contactsList;
    },
    // FUNCTIONS
    methods: {
      // filter in list
      filterList: function() {
        if (this.search != "") {
          this.contactsListFiltered = this.contactsList.filter(
            (element)=> {
              return element.name.toUpperCase().includes(this.search.toUpperCase())
            }
          );
        } else this.contactsListFiltered = this.contactsList;
        console.log(this.contactsListFiltered);
      },
      changeBackground: function() {
        let randomize = Math.floor(Math.random() * this.backgroundList.length);
        this.backgroundImage = this.backgroundList[randomize];
      }
    }
  }
);
