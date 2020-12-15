var app = new Vue(
  {
    el: "#root",
    // DATA ELEMENT
    data: {
      contactsList: [
        {
      		name: 'Claudia',
      		avatar: 'https://www.rivistablam.it/wp-content/uploads/2020/04/claudia-petrucci-850x560.jpg',
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
          lastAccess: "12/01/2020 19:16"
        },
        {
      		name: 'Fabio',
      		avatar: 'https://www.agile-school.com/hs-fs/hubfs/Images/Fabio-Lisca_preview-819x1024.jpeg?width=819&name=Fabio-Lisca_preview-819x1024.jpeg',
      		visible: true,
      		messages: [
      			{
      				date: '03/20/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '03/20/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '03/20/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
          lastAccess: "12/09/2020 10:06"
      	},
      	{
      		name: 'Samuele',
      		avatar: 'https://cdn.britannica.com/77/191077-050-63262B99/Samuel-L-Jackson.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '03/28/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '03/28/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '03/28/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
          lastAccess: "12/01/2020 12:47"
      	},
      	{
      		name: 'Luisa',
      		avatar: 'https://telecaprinews.it/wp-content/uploads/2019/12/luisa-ranieri.jpg',
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
          lastAccess: "11/01/2020 15:50"
      	},
        {
      		name: 'Gianni',
      		avatar: 'https://media.urbanpost.it/wp-content/uploads/2017/05/morandi.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai la spesa?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati che abbiamo un appuntamento',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'No!',
      				status: 'received'
      			}
          ],
          lastAccess: "12/01/2020 19:16"
        },
        {
      		name: 'Andrea',
      		avatar: 'https://cdn.calciomercato.com/images/2020-08/Andrea.Agnelli.Juve.2019.20.1080x648.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Non ci credo',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Complimenti!',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Grazie!',
      				status: 'received'
      			}
          ],
          lastAccess: "12/01/2020 19:16"
        },
        {
      		name: 'Matteo',
      		avatar: 'https://pbs.twimg.com/profile_images/906796230839296000/ZrW9jYJ1.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Tanti auguri!!',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ormai sei un vecchio',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Già...',
      				status: 'received'
      			}
          ],
          lastAccess: "12/01/2020 19:16"
        },
        {
      		name: 'Enzo',
      		avatar: 'https://www.musikandance.it/wp-content/uploads/bfi_thumb/enzo-dong-owv6lvjplfezhyvi8qkvxh8e9w1dengxppqylggrwg.jpeg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Ho ricevuto una telefonata da questo numero',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ho sbagliato numero',
      				status: 'received'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'mi perdoni',
      				status: 'received'
      			}
          ],
          lastAccess: "12/01/2020 19:16"
        },
        {
      		name: 'Simona',
      		avatar: 'https://www.ilpopoloveneto.it/giornale/wp-content/uploads/2020/01/Simona-Cavallari--680x400.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Ci vediamo oggi?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Non so se riesco stasera',
      				status: 'received'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Fammi sapere!',
      				status: 'received'
      			}
          ],
          lastAccess: "12/01/2020 19:16"
        },
        {
      		name: 'Palmira',
      		avatar: 'https://www.siccomforniture.it/wp-content/uploads/2019/03/casacca-palmira-nera-isacco-005101m.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato il gatto dal veterinario?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Sto andando adesso',
      				status: 'received'
      			},
      			{
      				date: '10/01/2020 18:20:22',
      				text: 'Fatto!',
      				status: 'received'
      			}
          ],
          lastAccess: "12/01/2020 19:16"
        },
        {
      		name: 'Tonio',
      		avatar: 'https://vignette.wikia.nocookie.net/lamelevisione/images/9/9b/Tonio_Cartonio.jpg/revision/latest?cb=20190211224627&path-prefix=it',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Andiamo a pesca?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Solo per il tramonto...',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Passo da te alle 18:00',
      				status: 'received'
      			}
          ],
          lastAccess: "12/01/2020 19:16"
        }
      ],
      contactSelected: 0,
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
      backgroundImage: "https://i.redd.it/qwd83nc4xxf41.jpg",
      newMessage:"",
      deleteMessageindex: -1
    },
    created: function() {
      this.contactsListFiltered = this.contactsList;
    },
    mounted: function() {
      this.contactsList.forEach(
        (element) => {
          element.lastAccess = dayjs(element.lastAccess).fromNow();
          element.messages.forEach(
            (element) => {
              element.date = dayjs(element.date).fromNow();
            }
          );
        }
      );
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
      },
      changeBackground: function() {
        let randomize = Math.floor(Math.random() * this.backgroundList.length);
        this.backgroundImage = this.backgroundList[randomize];
        this.deleteMessageindex = -1
      },
      sendMessage: function(object) {
        if (this.newMessage != "") {
          let newText = {
            date: dayjs().fromNow(),
            text: this.newMessage,
            status: 'sent'
          }
          let answer = {
            date: dayjs().fromNow(),
            text: "OK",
            status: 'received'
          }
          object.messages.push(newText);
          this.newMessage = "";
          setTimeout(
            function() {
              object.messages.push(answer);
            }
          ,1000);
          this.contactSelected.lastAccess = dayjs().fromNow()
        }
      },
      deleteMessage: function(index) {
        this.contactSelected.messages.splice(index,1);
      }
    }
  }
);
