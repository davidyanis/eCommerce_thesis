<template>
  <div>
    <div class="container mt-5 d-flex justify-content-between flex-wrap">
      <sidebar class="col-md-5 sidebar">
        <h4>Exempel på en bra annons..</h4>
        <p>Namn: Magnus Johansson</p>
        <p> Rubrik: Däckbyte</p>
        <p> Pris: 100 kr</p>
        <p> Beskrivning: Däckmontör med flera års erfarenhet från att ha jobbat med det proffesionellt och gjort mycket åt vänner.</p>
        <p> Telefonnummer: 073-982 98 00</p>
    
      </sidebar>
      <b-form @submit="publishProduct" class="col-md-6">
        <h4>Här kan du lägga till en tjänst </h4>
         <div v-if="inputerror === true" class="alert alert-danger">
            <strong>Vänligen fyll i alla fält.</strong> 
          </div>
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
          <b-form-file @change="onFileChanged" v-model="form.imageSrc" browse-text="Välj fil" placeholder="Bild på tjänsten..." drop-placeholder="Dra filen hit..."></b-form-file>
        </b-form-group>
        <b-form-group label="Telefonnummer:">
            <b-form-input v-model="form.customerMessage"></b-form-input>
        </b-form-group>
        <b-button variant="success" type="submit">Publicera  <b-spinner v-if="loader == true" small variant="light" label="Spinning"></b-spinner> </b-button>
      </b-form>
    </div>
    
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      inputerror: null,
      loader: false,
      form: {
        name: null,
        title: null,
        description: null,
        price: null,
        imageSrc: null,
        customerMessage: null,
      }
    }
  },
  validations: {
    form: {
      name: { required },
      title: { required },
      description: { required },
      price: { required },
      imageSrc: { required },
      customerMessage: { required },
    }
  },
  methods: {
    onFileChanged (event) {
      this.form.imageSrc = event.target.files[0]
      console.log(this.form.imageSrc)
    },
    publishProduct: async function(evt) {
      evt.preventDefault()
      this.loader = true
      try {
        const formData = new FormData()
        formData.append('imageSrc', this.form.imageSrc)
        formData.append('name', this.form.name)
        formData.append('title', this.form.title)
        formData.append('description', this.form.description)
        formData.append('price', this.form.price)
        formData.append('customerMessage', this.form.customerMessage)
        formData.append('cookie', localStorage.getItem("cookie"))
        let response = await this.$axios.post("http://localhost:3000/api/createProduct", formData)
        
        if (response.status === 200) {
          this.$router.push('/tjanster')
        }

      } catch (err) {
      this.inputerror = true;
        if (err.response.status === 401) {
          this.$router.push('/logout')
          alert("Vänligen logga in igen")
        }
      }
      this.loader = false
    }
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

button {
  background-color: #42b983;
}
</style>