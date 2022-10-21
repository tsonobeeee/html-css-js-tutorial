const calcAge = () => {
  const myBirthYear = 1995;
  const myBirthMonth = 2;
  const myBirthDay = 8;

  const todayDate = new Date();
  const todayYear = Number(todayDate.getFullYear());
  const todayMonth = Number(todayDate.getMonth() + 1);
  const todayDay = Number(todayDate.getDate());

  let age = todayYear - myBirthYear;

  let acquiredID = document.getElementById("age");

  if (todayMonth >= myBirthMonth && todayDay >= myBirthDay) {
    acquiredID.innerHTML = String(age);
  } else {
    acquiredID.innerHTML = String(age - 1);
  }
};

calcAge();
