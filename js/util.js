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
    acquiredID.innerHTML = `1995年2月8日生まれの${String(age)}歳（双子）`;
  } else {
    acquiredID.innerHTML = `1995年2月8日生まれの${String(age - 1)}歳（双子）`;
  }
};
calcAge();
