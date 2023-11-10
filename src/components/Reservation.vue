<template>
  <div class="reservations">
    <h1>Make a Reservation</h1>
    <form @submit.prevent="submitReservation">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="reservation.name" required>
      </div>
      <div class="form-group">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="reservation.date" required>
      </div>
      <div class="form-group">
        <label for="time">Time:</label>
        <input type="time" id="time" v-model="reservation.time" required>
      </div>
      <div class="form-group">
        <label for="table">Table Size:</label>
        <select id="table" v-model="reservation.table" required>
          <option v-for="table in tables" :value="tableSize.id" :key="tableSize.id">{{ tableSize_choices.name }}</option>
        </select>
      </div>
      <button type="submit">Submit Reservation</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Reservations',
  data() {
    return {
      reservation: {
        name: '',
        date: '',
        time: '',
        table: '',
      },
    };
  },
  methods: {
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
  color: black;
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
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>
