<template>
  <div class="reservations">
    <h1>Make a Reservation</h1>
    <form @submit.prevent="submitReservation">
      <div class="form-group">
        <label for="UserID">Name:</label>
        <input type="text" id="name" v-model="reservation.UserID" required>
      </div>
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="reservation.date" required>
      </div>
      <div class="form-group">
        <label for="TimeOfReservation">Time:</label>
        <select type="time" id="time" v-model="reservation.TimeOfReservation" required>
          <option> 11:00 AM </option>
          <option> 11:15 AM </option>
          <option> 11:30 AM </option>
          <option> 11:45 AM </option>
          <option> 12:00 PM </option>
          <option> 12:15 PM </option>
          <option> 12:30 PM </option>
          <option> 12:45 PM </option>
          <option> 1:00 PM </option>
          <option> 1:15 PM </option>
          <option> 1:30 PM </option>
          <option> 1:45 PM </option>
          <option> 2:00 PM </option>
          <option> 2:15 PM </option>
          <option> 2:30 PM </option>
          <option> 2:45 PM </option>
          <option> 3:00 PM </option>
          <option> 3:15 PM </option>
          <option> 3:30 PM </option>
          <option> 3:45 PM </option>
          <option> 4:00 PM </option>
          <option> 4:15 PM </option>
          <option> 4:30 PM </option>
          <option> 4:45 PM </option>
          <option> 5:00 PM </option>
          <option> 5:15 PM </option>
          <option> 5:30 PM </option>
          <option> 5:45 PM </option>
          <option> 6:00 PM </option>
          <option> 6:15 PM </option>
          <option> 6:30 PM </option>
          <option> 6:45 PM </option>
          <option> 7:00 PM </option>
          <option> 7:15 PM </option>
          <option> 7:30 PM </option>
          <option> 7:45 PM </option>
          <option> 8:00 PM </option>
          <option> 8:15 PM </option>
          <option> 8:30 PM </option>
          <option> 8:45 PM </option>
          <option> 9:00 PM </option>
        </select>
      </div>
      <div class="form-group">
        <div class="justify-content-end"></div>
        <label for="table">Table Size:</label>
        <select id="table" v-model="reservation.table" required>
          <option> Table of 2 </option>
          <option> Table of 4 </option>
          <option> Table of 8 </option>
          <option> Table of 12 </option>
          <option> Table of 20 </option>
        </select>
      </div>
      <button type="submit">Submit Reservation</button>
    </form>
    <reservation-submit :showPopup="showPopup" @closePopup="closePopup"/>
  </div>
</template>

<script>

export default {
  name: 'Reservations',
  data() {
    return {
      reservation: {
        UserID: '',
        date: '',
        TimeOfReservation: '',
        table: '',
      },
      showPopup: false,
    };
  },
  methods: {
    submitReservation() {
      console.log('Reservation Submitted!', this.reservation);
      this.showPopup = true;
      this.reservation.UserID = '';
      this.reservation.date = '';
      this.reservation.TimeOfReservation = '';
      this.reservation.table = '';
      window.alert('Reservation Submitted!')
      this.showPopup = false;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
.reservations {
  text-align: center;
  padding: 20px;
  font-family: 'Franklin Gothic Medium';
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: rgb(207, 47, 47);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
}

input {
  width: 60%;
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
}

button {
  background-color: rgb(207, 47, 47);;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>
