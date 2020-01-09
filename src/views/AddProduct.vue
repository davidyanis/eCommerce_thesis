<template>
  <div>
    <div class="container mt-5 d-flex justify-content-between flex-wrap">
      <sidebar class="col-md-5 sidebar">
        <h4>Exempel på en bra annons..</h4>
        <p>Namn: Magnus Johansson</p>
        <p> Rubrik: Däckbyte</p>
        <p> Pris: 100 kr</p>
        <p> Beskrivning: Däckmontör med flera års erfarenhet från att ha jobbat med det proffesionellt och gjort mycket åt vänner.</p>
        <p> Meddelande till kunden: Tack för ditt köp. Så fort jag har sett denna transaktionen, ringer jag upp dig. 🙂</p>
    
      </sidebar>
      <b-form @submit="onSubmit" class="col-md-6">
        <h4>Här kan du lägga till en tjänst </h4>
        <b-form-group label="Ditt namn:">
          <b-form-input v-model="form.name" type="text"></b-form-input>
        </b-form-group>
        <b-form-group label="Rubrik:" >
          <b-form-input v-model="form.title" placeholder="Hårklippning hemma hos dig." type="text"></b-form-input>
        </b-form-group>
        <b-form-group label="Pris:">
          <b-form-input v-model="form.price" type="text"></b-form-input>
        </b-form-group>
        <b-form-group label="Beskrivning:">
          <b-form-textarea v-model="form.description" id="textarea" placeholder="Jag hjälper dig med.." rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-form-group label="Ladda upp en bild:">
          <b-form-file v-model="form.imageSrc" browse-text="Välj fil" placeholder="Bild på tjänsten..." drop-placeholder="Dra filen hit..."></b-form-file>
          <b-button @click="uploadImage" size="sm" variant="primary">Spara bild <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" /></b-button>
          <!-- <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img> -->
        </b-form-group>
        <b-form-group label="Meddelande till kunden vid köp:">
          <b-form-textarea v-model="form.customerMessage" id="textarea" placeholder="Tack för ditt köp.." rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-button variant="success" type="submit">Publicera</b-button>
      </b-form>
   
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: '',
        title: '',
        description: '',
        price: null,
        imageSrc: null,
        customerMessage: '',
      }
    }
  },
  methods: {
    uploadImage: async function() {
      try {
        let response = await this.$axios.post("http://localhost:3000/api/upload/image", {
        imageSrc: this.form.imageSrc,
    
        })
      } catch (err) {
        alert(err)
      }
    },
    onSubmit: async function(evt) {
      evt.preventDefault()
      try {
        let response = await this.$axios.post("http://localhost:3000/api/createProduct", {
        form: this.form,
        cookie: localStorage.getItem("cookie")
      })
      } catch (err) {
        alert(err)
      }
    }
  },
  computed: {
    charactersRemaining: function() {
      return this.form.maxCharacters - this.form.shortDescription.length
    },
  },

}
</script>
<style scoped>
form {
  background-color: rgb(243, 243, 243);
  padding: 2em;
}

.sidebar {
  padding: 2em;
}

h4 {
  color: #42b983;
}
</style>