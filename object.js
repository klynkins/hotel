var hotel = { 
  name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: true,
  pool: false, 
  
  roomsAvail: function() {
  return this.rooms - this.roomsBooked;
  }
}

function getInfo() {
  var totalRooms = hotel.rooms;
  var availRooms = hotel.roomsAvail();
  console.log(availRooms);
  document.getElementById("demo1").innerHTML=hotel.name;
  document.getElementById("demo2").innerHTML=hotel.rooms;
  document.getElementById("demo3").innerHTML=availRooms;
  }


