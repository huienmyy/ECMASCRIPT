let name = "Huyền My"; // biến, "" = chuỗi
let birthday = "17/03/2004";

// arrow fuction
let sayHello = () => {
  console.log(`I'm ${name}, I'm ${birthday}`);
};



let namHienTai = new Date().getFullYear();
let namSinh = 2004;

// Tính tuổi
let tuoi = () => {
        console.log(`Tui đã được ${namHienTai - namSinh} tuổi`);
      };

sayHello();
tuoi();


